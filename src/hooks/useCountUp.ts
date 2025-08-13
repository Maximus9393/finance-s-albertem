import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
}

export const useCountUp = ({
  start = 0,
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  separator = ''
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setCount(start); // Reset to start value when not visible
        }
      },
      { threshold: 0.3 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [start]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = startValue + (endValue - startValue) * easeOutCubic;
      
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, start, end, duration]);

  const formatNumber = (num: number) => {
    let formatted = num.toString();
    
    if (separator && num >= 1000) {
      formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    
    return `${prefix}${formatted}${suffix}`;
  };

  return {
    count: formatNumber(count),
    elementRef
  };
};