import useSound from 'use-sound';
import { useEffect } from 'react';

export const useAppSound = () => {
  const [playSelect] = useSound('/sounds/select.mp3', { volume: 0.5 });
  const [playSuccess] = useSound('/sounds/success.mp3', { volume: 0.5 });
  const [playError] = useSound('/sounds/error.mp3', { volume: 0.5 });

  useEffect(() => {
    // Pré-carrega os sons
    const audio = new Audio('/sounds/select.mp3');
    audio.preload = 'auto';
  }, []);

  return {
    playSelect,
    playSuccess,
    playError
  };
};