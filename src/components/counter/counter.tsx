import React, { useState } from 'react';
import styles from './counter.module.css';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState<'plus' | 'minus' | null>(null);

  return (
    <div className={styles.counterContainer}>
      <button
        className={ hovered === 'minus' ? `${styles.button} ${styles.buttonActive}` : styles.button }
        onMouseEnter={() => setHovered('minus')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setCount((c) => c - 1)}
        aria-label="Decrement"
      >
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button
        className={ hovered === 'plus' ? `${styles.button} ${styles.buttonActive}` : styles.button }
        onMouseEnter={() => setHovered('plus')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setCount((c) => c + 1)}
        aria-label="Increment"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
