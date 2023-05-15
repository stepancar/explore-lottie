import { useEffect, useRef } from 'react';
import styles from './index.module.css';


export function LottiePlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current !== null) {

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
