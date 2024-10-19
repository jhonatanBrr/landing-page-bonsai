import React, { ReactNode } from 'react';
import './Grid.style.css';

interface GridProps {
  children: ReactNode;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, className = "" }) => {
  return (
    <div className={`grid ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
