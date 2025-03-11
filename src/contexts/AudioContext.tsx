
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AudioContextType {
  isBgMusicEnabled: boolean;
  toggleBgMusic: () => void;
  bgMusicVolume: number;
  setBgMusicVolume: (volume: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isBgMusicEnabled, setIsBgMusicEnabled] = useState(false);
  const [bgMusicVolume, setBgMusicVolume] = useState(0.5);

  const toggleBgMusic = () => setIsBgMusicEnabled(prev => !prev);

  return (
    <AudioContext.Provider 
      value={{ 
        isBgMusicEnabled, 
        toggleBgMusic,
        bgMusicVolume,
        setBgMusicVolume
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
