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

// Deterministic layout used for the initial SSR + hydration pass so server and client markup match
const createInitialSparkles = (): Sparkle[] => {
  return Array.from({ length: SPARKLE_COUNT }).map((_, index) => ({
    id: index,
    top: 20 + ((index * 10) % 60),
    left: 20 + ((index * 15) % 60),
    size: 12,
    delay: 0,
    duration: 6
  }));
};

const createSparkles = (): Sparkle[] => {
  return Array.from({ length: SPARKLE_COUNT }).map((_, index) => ({
    id: index,
    top: randomInRange(10, 90), // 10–90% of card
    left: randomInRange(10, 90),
    size: randomInRange(8, 18), // 8–18px star size
    delay: randomInRange(0, 4), // 0–4s animation delay
    duration: randomInRange(4, 8) // 4–8s animation duration
  }));
};

const Sparkles: React.FC = () => {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>(() =>
    createInitialSparkles()
  );

  React.useEffect(() => {
    setSparkles(createSparkles());
  }, []);

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
