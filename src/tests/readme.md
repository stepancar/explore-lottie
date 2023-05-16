// import { LottiePixiRenderer } from '../components/lottiePlayer2/pixiRenderer';
// import square from '../animations/square.json';
// describe('aaa', () => {

//     it('renders solid', async () => {
//         const canvas = document.createElement('canvas')

//         canvas.setAttribute("width", "200");
//         canvas.setAttribute("height", "200");

//         const div = document.createElement('div');

//         const renderer = new LottiePixiRenderer(div);

//         renderer.load(square);

//         renderer.seekToFrame(2);

//         const webglContext = canvas.getContext('webgl');

//         console.log(webglContext);

//         const base64 = renderer.app.renderer.extract.base64();

//         console.log(base64);

//         const buffer = Buffer.from(canvas.toDataURL().replace('data:image/png;base64,', ''), 'base64');
//         expect(buffer).toMatchImageSnapshot();
//     });
// });
