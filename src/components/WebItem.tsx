import React, { useState, useCallback } from 'react';
import useImageCache from '../hooks/useImageCache';
import { Button } from './ui/button'; // Import the Button component

interface WebItemProps {
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrcs: string[];
  reverse?: boolean;
  id: string; // Add unique identifier
  link?: string; // Add link prop
}

const WebItem: React.FC<WebItemProps> = ({ title, description, imageSrcs, reverse, id, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
  
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSrcs.length);
  }, [imageSrcs.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageSrcs.length) % imageSrcs.length);
  }, [imageSrcs.length]);

  // Use original imageSrcs for mapping to avoid cache key issues in display
  const displayImages = useImageCache(imageSrcs);

  return (
    <div className={`project-item ${reverse ? 'reverse' : ''}` } >
      <div className="project-details">
        <h3 data-aos={reverse ? "fade-up-left" : "fade-up-right"}>{title}</h3>
        <p data-aos={reverse ? "fade-up-left" : "fade-up-right"}>{description}</p>
        {link && (
          <div style={{ marginTop: '10px' }}>
            <Button 
              onClick={() => window.open(link, '_blank')}
            >
              Visit Site
            </Button>
          </div>
        )}
      </div>
      <div className="project-images-Web" data-aos={reverse ? "fade-up-right" : "fade-up-left"}>
        <button className="slider-button-Web prevs" onClick={prevImage} aria-label="Previous image">&lt;</button>
        <div className="image-container-Web">
          {displayImages.map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`${title} - Image ${index + 1}`}
              className="responsive-image"
              style={{
                display: index === currentImageIndex ? 'block' : 'none',
                borderRadius: 20
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