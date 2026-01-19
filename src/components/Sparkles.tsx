import * as React from 'react';
import { StarIcon } from '../Icons';

const SPARKLE_COUNT = 8;

type Sparkle = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

const createSparkles = (): Sparkle[] => {
  return Array.from({ length: SPARKLE_COUNT }).map((_, index) => ({
    id: index,
    top: Math.random() * 80 + 10, // keep away from very edges
    left: Math.random() * 80 + 10,
    size: Math.random() * 10 + 8, // 8px - 18px
    delay: Math.random() * 4, // 0s - 4s
    duration: Math.random() * 4 + 4 // 4s - 8s
  }));
};

const Sparkles: React.FC = () => {
  const [sparkles] = React.useState<Sparkle[]>(() => createSparkles());

  return (
    <div className="sparkles" aria-hidden="true">
      {sparkles.map(sparkle => (
        <StarIcon
          key={sparkle.id}
          className="sparkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export { Sparkles };
