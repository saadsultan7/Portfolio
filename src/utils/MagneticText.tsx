import { useRef, useState, useEffect, useCallback, memo } from 'react';
import type { ReactNode } from 'react';

interface MagneticTextProps {
  children: ReactNode;
  repel?: boolean;
  strength?: number;
}

const MagneticText: React.FC<MagneticTextProps> = memo(({
  children,
  repel = false,
  strength = repel ? 80 : 10,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!textRef.current) return;

      const { left, top, width, height } =
        textRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const direction = repel ? -1 : 1;
      const distance = Math.sqrt(
        distanceX * distanceX + distanceY * distanceY
      );
      const maxDistance = 100;

      if (distance < maxDistance) {
        const power = (1 - distance / maxDistance) * strength;
        setPosition({
          x: direction * (distanceX / distance) * power,
          y: direction * (distanceY / distance) * power,
        });
      } else {
        setPosition((prev) =>
          prev.x === 0 && prev.y === 0 ? prev : { x: 0, y: 0 }
        );
      }
    },
    [repel, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <span
      ref={textRef}
      className="magnetic-text"
      style={{
        display: 'inline-block',
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {children}
    </span>
  );
});

MagneticText.displayName = 'MagneticText';

export default MagneticText;
