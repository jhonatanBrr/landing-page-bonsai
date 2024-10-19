import React, { ReactNode } from 'react';
import './ReboteAnimation.style.css';

interface ReboteAnimationProps {
  children: ReactNode;
}

const ReboteAnimation: React.FC<ReboteAnimationProps> = ({ children }) => {
  return (
    <div className="rebote-animation">
      {children}
    </div>
  );
};

export default ReboteAnimation;
