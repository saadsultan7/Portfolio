import React, { useState, useCallback } from 'react';
import useImageCache from '../hooks/useImageCache';

interface WebItemProps {
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrcs: string[];
  reverse?: boolean;
}

const WebItem: React.FC<WebItemProps> = ({ title, description, imageSrcs, reverse }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cachedImages = useImageCache(imageSrcs);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cachedImages.length);
  }, [cachedImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + cachedImages.length) % cachedImages.length);
  }, [cachedImages.length]);

  return (
    <div className={`project-item ${reverse ? 'reverse' : ''}` } style={{backgroundColor:"pink"}} >
      <div className="project-details">
        <h3 data-aos={reverse ? "fade-up-left" : "fade-up-right"}>{title}</h3>
        <p data-aos={reverse ? "fade-up-left" : "fade-up-right"}>{description}</p>
      </div>
      <div className="project-images" data-aos={reverse ? "fade-up-right" : "fade-up-left"}>
        <button className="slider-button prev" onClick={prevImage} aria-label="Previous image">&lt;</button>
        <div className="image-container">
          {cachedImages.map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`${title} - Image ${index + 1}`}
              className="responsive-image"
              style={{
                display: index === currentImageIndex ? 'block' : 'none',
                borderRadius:20,
                justifyContent:"center",
                alignContent:"center",
              }}
            />
          ))}
        </div>
        <button className="slider-button next" onClick={nextImage} aria-label="Next image">&gt;</button>
      </div>
    </div>
  );
};

export default WebItem;

