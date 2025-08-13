import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  duration?: number;
  className?: string;
}

const CountUp = ({ 
  end, 
  suffix = '', 
  prefix = '', 
  separator = '',
  duration = 2000,
  className = ''
}: CountUpProps) => {
  const { count, elementRef } = useCountUp({
    end,
    suffix,
    prefix,
    separator,
    duration
  });

  return (
    <span ref={elementRef} className={className}>
      {count}
    </span>
  );
};

export default CountUp;