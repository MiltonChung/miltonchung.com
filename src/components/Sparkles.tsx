import * as React from 'react';
import { StarIcon } from '../Icons';

const SPARKLE_COUNT = 8;

const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

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
    // 10–90% of card, to avoid extreme edges
    top: randomInRange(10, 90),
    left: randomInRange(10, 90),
    // 8–18px star size
    size: randomInRange(8, 18),
    // 0–4s animation delay
    delay: randomInRange(0, 4),
    // 4–8s animation duration
    duration: randomInRange(4, 8)
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
