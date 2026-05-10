'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

interface GalleryModalProps {
  images: string[];
  initialIndex?: number;
  title: string;
  onClose: () => void;
}

export default function GalleryModal({ images, initialIndex = 0, title, onClose }: GalleryModalProps) {
  const [index, setIndex] = useState(initialIndex);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [next, prev, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="flex items-center justify-between px-4 lg:px-8 py-4 text-white">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-neutral-400">
            {index + 1} / {images.length}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 transition-colors"
          aria-label="Close gallery"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 relative flex items-center justify-center px-4 lg:px-16 pb-4">
        <button
          onClick={prev}
          className="absolute left-2 lg:left-6 z-10 p-3 text-white hover:bg-white/10 transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative w-full h-full max-w-6xl">
          <Image
            key={images[index]}
            src={images[index]}
            alt={`${title} ${index + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            quality={100}
            unoptimized
            priority
          />
        </div>

        <button
          onClick={next}
          className="absolute right-2 lg:right-6 z-10 p-3 text-white hover:bg-white/10 transition-colors"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="px-4 lg:px-8 pb-4 overflow-x-auto">
        <div className="flex gap-2 justify-center min-w-min">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setIndex(i)}
              className={`relative w-20 h-14 flex-shrink-0 overflow-hidden border-2 transition-all ${
                i === index ? 'border-white' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
              aria-label={`Go to image ${i + 1}`}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
