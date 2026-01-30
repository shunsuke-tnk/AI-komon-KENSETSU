import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, noPadding = false }) => {
  return (
    <section 
      id={id}
      className={`relative w-full border-t border-white/10 bg-black ${!noPadding ? 'py-24 md:py-40' : ''} ${className}`}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none z-0 opacity-50"></div>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 h-full">
        {children}
      </div>
    </section>
  );
};