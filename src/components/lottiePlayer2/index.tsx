import { useEffect, useRef, useState, ChangeEvent } from 'react';
import styles from './index.module.css';
import {PlottieAnimationItem} from './pixiRenderer';
import squareAnimation from '../../animations/moving.square.json';


export function LottiePlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameNumber, setFrameNumber] = useState(0);
  const [renderer, setRenderer] = useState<PlottieAnimationItem | null>(null);


  useEffect(() => {
    if (containerRef.current !== null) {
      const renderer = new PlottieAnimationItem(containerRef.current);
      renderer.load(squareAnimation as any);
      setRenderer(renderer);
    }
  }, []);

  const handleFrameNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFrameNumber(Number(event.target.value));
    renderer?.seekToFrame(Number(event.target.value));
  };

  return (
    <div className="App">
      <div className={styles.container} ref={containerRef}></div>
      <input type='number' value={frameNumber} onChange={handleFrameNumberChange} />
    </div>
  );
}
