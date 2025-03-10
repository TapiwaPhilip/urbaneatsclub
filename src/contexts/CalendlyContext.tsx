
import React, { createContext, useContext, useState } from 'react';
import CalendlyModal from '@/components/ui/CalendlyModal';

interface CalendlyContextType {
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly }}>
      {children}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </CalendlyContext.Provider>
  );
};

export const useCalendly = (): CalendlyContextType => {
  const context = useContext(CalendlyContext);
  if (context === undefined) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
};
