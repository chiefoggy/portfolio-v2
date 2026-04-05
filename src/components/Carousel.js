"use client";

import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

export function Carousel(props) {
  const { images, data } = props;
  
  let parsedImages = images;
  if (!parsedImages && typeof data === 'string') {
    try {
      parsedImages = JSON.parse(data);
    } catch (e) {
      console.error("Failed to parse Carousel data:", e);
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!parsedImages || parsedImages.length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % parsedImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + parsedImages.length) % parsedImages.length);
  };


  return (
    <div style={{ position: 'relative', width: '100%', margin: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', display: 'flex', justifyContent: 'center' }}>
        <img
          src={parsedImages[currentIndex].src}
          alt="Carousel image"
          style={{ width: '100%', height: 'auto', maxHeight: '75vh', objectFit: 'contain', borderRadius: '8px' }}
        />
        
        {parsedImages.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="Previous image"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="Next image"
            >
              <FiChevronRight size={24} />
            </button>
          </>
        )}
      </div>
      
      {parsedImages[currentIndex].subtext && (
        <p style={{ marginTop: '0.75rem', color: '#666', fontSize: '0.9rem', textAlign: 'center' }}>
          {parsedImages[currentIndex].subtext}
        </p>
      )}
    </div>
  );
}
