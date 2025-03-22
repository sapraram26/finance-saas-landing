
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
  hoverEffect?: boolean;
  animateIn?: boolean;
  animationDelay?: number;
};

const AnimatedCard = ({ 
  children, 
  className = '',
  glassEffect = true,
  hoverEffect = true,
  animateIn = true,
  animationDelay = 0
}: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!hoverEffect || !cardRef.current) return;

    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverEffect]);
  
  const glassStyles = glassEffect ? 'glass-morphism' : '';
  const animationStyles = animateIn ? 'opacity-0 animate-fade-in-up' : '';
  const hoverStyles = hoverEffect ? 'transition-all duration-300 hover:shadow-lg' : '';
  
  const animationDelayStyle = {
    animationDelay: `${animationDelay}ms`,
    animationFillMode: 'forwards'
  };
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        'rounded-xl p-6 relative', 
        glassStyles, 
        hoverStyles,
        animationStyles,
        className
      )}
      style={animateIn ? animationDelayStyle : {}}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
