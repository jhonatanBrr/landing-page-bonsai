import React, { ReactNode } from 'react';
import './ScrollAnimation.style.css';

interface ScrollAnimationProps {
  children: ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  return (
    <div className="scroll-animation">
      {children}
    </div>
  );
};

export default ScrollAnimation;
