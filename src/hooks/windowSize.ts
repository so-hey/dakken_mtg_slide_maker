import { useState, useEffect } from "react";

interface WindowSize {
  windowWidth: number;
  windowHeight: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
