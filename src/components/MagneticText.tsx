import React, { useRef, useState, useEffect } from 'react';

interface MagneticTextProps {
  children: React.ReactNode;
  repel?: boolean;
  strength?: number;
}

const MagneticText: React.FC<MagneticTextProps> = ({ 
  children, 
  repel = false,
  strength = repel ? 80 : 10 
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!textRef.current) return;
    
    const { left, top, width, height } = textRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from mouse to center of element
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Calculate movement direction based on repel flag
    const direction = repel ? -1 : 1;
    
    // Calculate movement amount (closer = more movement)
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = 100; // Maximum distance to apply effect
    
    if (distance < maxDistance) {
      const power = (1 - distance / maxDistance) * strength;
      
      // Move away from cursor if repel is true, toward cursor if false
      setPosition({
        x: direction * (distanceX / distance) * power,
        y: direction * (distanceY / distance) * power
      });
    } else {
      // Reset position when cursor is far away
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    // Reset position when mouse leaves
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <span
      ref={textRef}
      className="magnetic-text"
      style={{
        display: 'inline-block',
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      {children}
    </span>
  );
};

export default MagneticText; 