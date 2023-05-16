import * as PIXI from "pixi.js";
import captainAmerica from '../../images/1.jpeg';
import {
    Animation,
    LayerType,
    Transform,
    SolidColorLayer,
    Layer,
    OffsetKeyframe,
    Value,
    PositionValue
} from './lottie'

export default class Plottie {
    static loadAnimation(animationData: Animation): PlottieAnimationItem {
        const plottieAnimationItem = new PlottieAnimationItem(document.body);
        plottieAnimationItem.load(animationData);
        return plottieAnimationItem;
    }
}

export class PlottieAnimationItem {
    app?: PIXI.Application<HTMLCanvasElement>;
    container: HTMLElement;
    constructor(container: HTMLElement) {
        this.container = container;
    }

    elements: {
        container: PIXI.Container,
        transform: Transform,
    }[] = [];

    currentFrame = 0;

    async load(animationData: Animation) {
        const width = animationData.w;
        const height = animationData.h;
        this.app = new PIXI.Application({ width, height });
        this.container.appendChild(this.app.view);

        console.log(animationData.w, animationData.h);
        const layers = animationData.layers || [];
        for (const layer of layers) {
            switch (layer.ty) {
                case LayerType.solid:
                    const width = layer.sw = layer.sw || 0;
                    const height = layer.sh = layer.sh || 0;
                    const color = layer.sc;

                    const rectangle = new PIXI.Graphics();
                    rectangle.beginFill(color);
                    rectangle.drawRect(0, 0, width, height);
                    rectangle.endFill();

                    this.app.stage.addChild(rectangle);

                    this.elements.push({
                        container: rectangle,
                        transform: layer.ks,
                    })
                    break;
            }
        }
        // TODO
        this.render();
    }

    isSolidColorLayer(layer: Layer): layer is SolidColorLayer {
        return layer.ty === LayerType.solid;
    }

    seekToFrame(frame: number) {
        // TODO
        this.currentFrame = frame;
        this.render();
    }

    render() {
        this.elements.forEach(({ container, transform }) => {
            const { x, y } = getPosition(transform, this.currentFrame);
            const rotation = getRotation(transform, this.currentFrame);
            container.position.x = x;
            container.position.y = y;

            console.log({ x, y, rotation });
            container.rotation = rotation;
        });
    }
}

function getPosition(transform: Transform, frame: number): { x: number, y: number } {
    const [x, y] = getPositionValue(transform.p, frame);
    return { x, y };
}

function getRotation(transform: Transform, frame: number): number {
    const [rotation] = getValues(transform.r, frame);
    return rotation * Math.PI / 180;
}

function getPositionValue(value: PositionValue, frame: number): number[] {
    if (value.s) {
        return [
            getValues(value.x, frame)[0],
            getValues(value.y, frame)[0],
        ];
    } else {
        return getValues(value, frame) as number[];
    }
}


function getValues(value: Value, frame: number): number[] {
    if (value.a === 1) {
        return getValuesFromKeyframes(value.k as OffsetKeyframe[], frame);
    }

    return value.k as number[];
}

function getValuesFromKeyframes(keyframes: OffsetKeyframe[], frame: number): number[] {
    const index = keyframes.findIndex((keyframe) => keyframe.t > frame);

    if (index === -1) {
        return keyframes[keyframes.length - 1].s;
    }

    if (index === 0) {
        return keyframes[0].s;
    }

    const endKeyFrame = keyframes[index];
    const startKeyFrame = keyframes[index - 1];

    return startKeyFrame.s.map((_, i) => interpolateValueBetweenKeyFrames(startKeyFrame.s[0] as number, endKeyFrame.s[0] as number, frame, startKeyFrame.t, endKeyFrame.t));
}

function interpolateValueBetweenKeyFrames(startValue: number, endValue: number, frame: number, startFrame: number, endFrame: number) {
    const value = startValue + (endValue - startValue) * (frame - startFrame) / (endFrame - startFrame);

    return value;
}
