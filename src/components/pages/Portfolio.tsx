import React, { useRef } from 'react'; 
import { IDCard } from './IDCard';
import './Portfolio.css';


// logic
const PortfolioLayout = () => {
// Lưu vị trí chuột, hàm tọa độ
  const gradientRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (gradientRef.current) {
      gradientRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
      gradientRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
    }
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans overflow-hidden portfolio-bg"
    >  
      <div 
        ref={gradientRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 portfolio-gradient"
      />
    <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10">
        <IDCard />
      </div>

    </main>
  );
};

export default PortfolioLayout;