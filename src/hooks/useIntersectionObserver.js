// src/hooks/useIntersectionObserver.js

import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);

  const callback = (entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentObserverRef = observerRef.current;

    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [observerRef, options]);

  return [observerRef, isIntersecting];
};

export default useIntersectionObserver;
