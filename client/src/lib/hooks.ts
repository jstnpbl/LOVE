import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export function useAudio(url: string) {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
      audio.pause();
    };
  }, [audio]);

  return [playing, toggle] as const;
}

export function useConfetti() {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(100);

  const triggerConfetti = (confettiCount = 100) => {
    setCount(confettiCount);
    setIsActive(true);
    setTimeout(() => setIsActive(false), 5000);
  };

  return { isActive, count, triggerConfetti };
}
