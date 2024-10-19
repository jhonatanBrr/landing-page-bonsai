import React, { ReactNode } from 'react';
import './MoveAnimations.style.css';

interface MoveAnimationsProps {
  children: ReactNode;
}

const MoveAnimations: React.FC<MoveAnimationsProps> = ({ children }) => {
  return (
    <div className="move-animations">
      {children}
    </div>
  );
};

export default MoveAnimations;
