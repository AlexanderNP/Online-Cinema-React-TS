import { useCallback, useRef } from 'react'

export const useDebounce = (callback: (...args: any[]) => void, delay: number)  => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const debouncedCallback = useCallback((...args: any[]) => {
    if(timer.current !== undefined){
      clearTimeout(timer.current);
    } 
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
}

