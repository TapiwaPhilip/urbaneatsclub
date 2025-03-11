
import React, { useRef, useEffect } from 'react';
import { useAudio } from '@/contexts/AudioContext';
import { Music, MusicOff } from 'lucide-react';

const BackgroundMusic = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isBgMusicEnabled, toggleBgMusic, bgMusicVolume } = useAudio();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isBgMusicEnabled) {
      audio.play().catch(error => {
        console.error('Background music autoplay prevented:', error);
      });
    } else {
      audio.pause();
    }
    
    return () => {
      audio.pause();
    };
  }, [isBgMusicEnabled]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = bgMusicVolume;
  }, [bgMusicVolume]);

  return (
    <>
      <audio ref={audioRef} src={src} loop />
      <button
        onClick={toggleBgMusic}
        className="fixed bottom-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-slate-200 text-slate-700 hover:bg-slate-50"
        aria-label={isBgMusicEnabled ? 'Mute background music' : 'Play background music'}
      >
        {isBgMusicEnabled ? <Music size={18} /> : <MusicOff size={18} />}
      </button>
    </>
  );
};

export default BackgroundMusic;
