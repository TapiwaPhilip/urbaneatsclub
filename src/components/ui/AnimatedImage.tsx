
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | string;
  priority?: boolean;
}

const AnimatedImage = ({
  src,
  alt,
  className,
  aspectRatio = 'square',
  priority = false,
  ...props
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Set aspect ratio class
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-video';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'wide':
        return 'aspect-[16/9]';
      default:
        return aspectRatio;
    }
  };

  // Simulate loading delay for demo purposes
  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [priority]);

  return (
    <div className={cn('overflow-hidden rounded-xl', getAspectRatioClass(), className)}>
      {!isLoaded && !error && (
        <div className="w-full h-full bg-slate-100 animate-pulse rounded-xl" />
      )}
      {error ? (
        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-sm">
          Failed to load image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
      )}
    </div>
  );
};

export default AnimatedImage;
