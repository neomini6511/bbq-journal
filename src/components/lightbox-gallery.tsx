'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { RecipeImage } from '@/data/recipes';
import Image from 'next/image';

export function LightboxGallery({ images }: { images: RecipeImage[] }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    description: img.caption,
  }));

  return (
    <>
      <div className="image-mosaic">
        {images.map((image, index) => (
          <figure key={image.src} className="image-mosaic__item">
            <div 
              className="image-frame image-frame--gallery cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw" 
                className="image-frame__img" 
              />
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        on={{ view: ({ index }) => setCurrentIndex(index) }}
        carousel={{ finite: false }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
        }}
      />
    </>
  );
}