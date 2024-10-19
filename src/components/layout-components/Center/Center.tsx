import React, { ReactNode } from 'react';
import "./Center.style.css";

interface CenterProps {
  children: ReactNode;
}

const Center: React.FC<CenterProps> = ({ children }) => {
  return (
    <div className='center'>{children}</div>
  );
};

export default Center;
