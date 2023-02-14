import * as React from 'react';

const getWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  return { width: 0, height: 0 };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setWindowDimensions(getWindowDimensions()));
      return () =>
        window.removeEventListener('resize', () =>
          setWindowDimensions(getWindowDimensions())
        );
    }
  }, []);

  return windowDimensions;
};

export { useWindowDimensions };
