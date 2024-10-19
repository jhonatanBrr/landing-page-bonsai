import React, { ReactNode } from 'react';
import "./Section.style.css";

interface SectionProps {
  children: ReactNode;
  paddingTop?: string;
}

const Section: React.FC<SectionProps> = ({ children, paddingTop = "0px" }) => {
  return (
    <section className="section" style={{ paddingTop }}>
      {children}
    </section>
  );
};

export default Section;
