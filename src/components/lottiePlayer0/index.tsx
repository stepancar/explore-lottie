import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import Lottie, { AnimationItem } from 'lottie-web';

import squareAnimation from '../../animations/square.json';


export function LottiePlayer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [animationItem, setAnimationItem] = useState<AnimationItem | null>(null);
  
  useEffect(() => {
    if (containerRef.current !== null) {
      const animationItem = Lottie.loadAnimation({
        container: containerRef.current,
        animationData: squareAnimation,
        renderer: 'html',
      })

      setAnimationItem(animationItem);

      return () => {
        animationItem.destroy();
      }
    }
  }, []);

  const handlePrevClick = () => {

  }

  const handlePlayClick = () => {

  }

  const handlePauseClick = () => {
    animationItem?.pause();
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
