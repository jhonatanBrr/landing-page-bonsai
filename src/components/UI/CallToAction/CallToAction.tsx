import React from 'react';
import './CallToAction.style.css';
import Button from '../../General/Button/Button';
import Title from '../../General/Title/Title';

const CallToAction: React.FC = () => {
  return (
    <div className='call-to-action-content'>
      <Title title={'Un tributo al arte del bonsái'} />
      <p>Una colección de bonsáis, cuidadosamente cultivados por amigos apasionados por este arte. Cada árbol cuenta una historia y refleja la belleza de la naturaleza en miniatura.</p>
      <Button name={'Portafolio'} link='https://jhonatanbrr.github.io/new-portfolio/' />
    </div>
  );
};

export default CallToAction;
