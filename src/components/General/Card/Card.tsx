import React, { ReactNode } from 'react';
import './Card.style.css';

interface TextProps {
  text: string;
  color: string;
}

interface CardProps {
  children: ReactNode;
  title?: TextProps;
  paragraph?: TextProps;
  background?: string;
  h?: string;
  w?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title = { text: '', color: '' },
  paragraph = { text: '', color: '' },
  background,
  h,
  w
}) => {
  return (
    <div
      className='card-content'
      style={{
        backgroundColor: background,
        height: h,
        width: w
      }}
    >
      {children}
      <p style={{ color: paragraph.color }}>{paragraph.text}</p>
    </div>
  );
};

export default Card;
