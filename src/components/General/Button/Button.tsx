import React from 'react';
import './Button.style.css';
import ReboteAnimation from '../../animations/ReboteAnimation/ReboteAnimation';

interface ButtonProps {
  name: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ name, link }) => {
  return (
    <ReboteAnimation>
      <a href={link}>
        <button>
          {name}
        </button>
      </a>
    </ReboteAnimation>
  );
};

export default Button;
