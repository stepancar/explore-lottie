import { useEffect, useRef } from 'react';
import styles from './index.module.css';
// @ts-ignore
const Lottie = require('lottie-web/build/player/lottie_worker.js');
export function LottiePlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current !== null) {
      Lottie.loadAnimation({
        container: containerRef.current,
        path: 'https://assets10.lottiefiles.com/packages/lf20_uj8nrH.json',
        renderer: 'canvas',
      });
    }
  }, []);

  const handlePrevClick = () => {

  }

  const handlePlayClick = () => {

  }

  const handlePauseClick = () => {

  }

  const handleNextClick = () => {

  }

  return (
    <div className="App">
      <div className={styles.container} ref={containerRef}></div>
      <button
        className={styles.button}
        onClick={handlePrevClick}
      >
        prev
      </button>
      <button
        className={styles.button}
        onClick={handlePlayClick}>
        play
      </button>
      <button
        className={styles.button}
        onClick={handlePauseClick}>
        pause
      </button>
      <button
        className={styles.button}
        onClick={handleNextClick}
      >
        next
      </button>
    </div>
  );
}
