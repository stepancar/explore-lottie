import { useEffect, useRef, useState, ChangeEvent } from 'react';
import styles from './index.module.css';
import Lottie, { AnimationItem, } from 'lottie-web';

import squareAnimation from '../../animations/square.json';


export function LottiePlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameNumber, setFrameNumber] = useState(0);
  const [animationItem, setAnimationItem] = useState<AnimationItem | null>(null);
  
  useEffect(() => {
    if (containerRef.current !== null) {
      const animationItem = Lottie.loadAnimation({
        container: containerRef.current,
        animationData: squareAnimation,
        renderer: 'html',
      })

      animationItem.addEventListener('enterFrame', (f) => {
        setFrameNumber(animationItem.currentFrame);
      });

      setAnimationItem(animationItem);

      return () => {
        animationItem.destroy();
      }
    }
  }, []);

  const handleFrameNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setFrameNumber(value);
    animationItem.goToAndStop(value, true)
  };

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
      <input type='number' step={1} value={frameNumber} onChange={handleFrameNumberChange} />
    </div>
  );
}
