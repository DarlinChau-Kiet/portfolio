import React, { useState } from 'react'; 
import background from '../../assets/Background.png';
import { IDCard } from './IDCard';

// logic
const PortfolioLayout = () => {
// Lưu vị trí chuột, hàm tọa độ
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >  
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.18), transparent 20%)`,
        }}
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