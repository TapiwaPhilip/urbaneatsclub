
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

const AudioPlayer = ({ src, className, autoPlay = false, loop = false }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    if (autoPlay) {
      audio.play().catch(error => {
        console.error('Autoplay prevented:', error);
        setIsPlaying(false);
      });
    }
    
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [autoPlay]);

  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error('Play prevented:', error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className={cn('flex items-center space-x-2 bg-white rounded-lg p-3 shadow-sm border border-slate-200', className)}>
      <audio ref={audioRef} src={src} loop={loop} />
      
      <button
        onClick={togglePlay}
        className="w-8 h-8 flex items-center justify-center bg-urban-100 text-urban-600 rounded-full hover:bg-urban-200 transition-colors"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
      
      <div className="flex-1">
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleSliderChange}
          className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${(currentTime / (duration || 1)) * 100}%, #e2e8f0 ${(currentTime / (duration || 1)) * 100}%, #e2e8f0 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      
      <button
        onClick={toggleMute}
        className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </div>
  );
};

export default AudioPlayer;
