import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { Modal } from '../ui/Modal';
import { ContactContent, SkillsContent, ExperienceContent, EducationContent } from '../sections/Modals';
import { Briefcase, Code, Award, ArrowRight, User } from 'lucide-react';

export const IDCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleFlip = (e: React.MouseEvent) => {
    // Prevent flipping if clicked on interactive elements
    if ((e.target as HTMLElement).closest('.prevent-flip')) return;
    setIsFlipped(!isFlipped);
  };

  const openModal = (type: string) => {
    setActiveModal(type);
  };

  return (
    <div 
      className="relative w-[760px] h-[480px] perspective-[1200px] cursor-pointer group/card" 
      onClick={handleFlip}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT FACE: Minimalist Geometric Design */}
        <div className="absolute w-full h-full backface-hidden rounded-[32px] bg-[#d9d9d9] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden flex items-center p-8">
          
          {/* Red Dot Indicator */}
          <div className="absolute top-6 right-6 w-3.5 h-3.5 bg-[#f03a3a] rounded-full shadow-sm"></div>

          {/* Left Teal Block - Avatar / Contact */}
          <div 
            className="w-[280px] h-full bg-[#2a4e51] rounded-[24px] flex flex-col items-center justify-center prevent-flip cursor-pointer group/avatar relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-inner"
            onClick={(e) => { e.stopPropagation(); openModal('contact'); }}
          >
             <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
             {profile.avatar && profile.avatar !== "https://i.pravatar.cc/300" ? (
               <img src={profile.avatar} alt="Avatar" className="w-[140px] h-[140px] rounded-full object-cover border-4 border-white/10 shadow-lg group-hover/avatar:border-white/30 transition-all duration-300" />
             ) : (
               <User className="text-white/30 w-16 h-16" />
             )}
             <h1 className="text-white/90 text-xl font-bold mt-6 tracking-wide drop-shadow-sm">{profile.name}</h1>
             <p className="text-white/60 text-sm font-medium tracking-widest mt-1 uppercase">{profile.role}</p>
          </div>

          {/* Right Section - 3 Dark Pills */}
          <div className="flex-1 h-full pl-8 flex flex-col justify-center gap-6 prevent-flip">
            
            {/* Experience Pill */}
            <div 
              className="w-full h-[80px] bg-[#1a1111] rounded-full flex items-center px-8 cursor-pointer group/pill transition-all duration-300 hover:bg-[#2a1b1b] shadow-lg"
              onClick={(e) => { e.stopPropagation(); openModal('experience'); }}
            >
               <Briefcase size={22} className="text-white/30 group-hover/pill:text-white/90 transition-colors mr-6" />
               <span className="text-white/30 group-hover/pill:text-white font-medium text-lg tracking-widest uppercase transition-colors">Experience</span>
               <ArrowRight size={20} className="text-white/0 group-hover/pill:text-white/50 ml-auto transition-all duration-300 transform translate-x-[-10px] group-hover/pill:translate-x-0" />
            </div>

            {/* Skills Pill */}
            <div 
              className="w-full h-[80px] bg-[#1a1111] rounded-full flex items-center px-8 cursor-pointer group/pill transition-all duration-300 hover:bg-[#2a1b1b] shadow-lg"
              onClick={(e) => { e.stopPropagation(); openModal('skills'); }}
            >
               <Code size={22} className="text-white/30 group-hover/pill:text-white/90 transition-colors mr-6" />
               <span className="text-white/30 group-hover/pill:text-white font-medium text-lg tracking-widest uppercase transition-colors">Skills</span>
               <ArrowRight size={20} className="text-white/0 group-hover/pill:text-white/50 ml-auto transition-all duration-300 transform translate-x-[-10px] group-hover/pill:translate-x-0" />
            </div>

            {/* Certificates Pill */}
            <div 
              className="w-full h-[80px] bg-[#1a1111] rounded-full flex items-center px-8 cursor-pointer group/pill transition-all duration-300 hover:bg-[#2a1b1b] shadow-lg"
              onClick={(e) => { e.stopPropagation(); openModal('education'); }}
            >
               <Award size={22} className="text-white/30 group-hover/pill:text-white/90 transition-colors mr-6" />
               <span className="text-white/30 group-hover/pill:text-white font-medium text-lg tracking-widest uppercase transition-colors">Certificates</span>
               <ArrowRight size={20} className="text-white/0 group-hover/pill:text-white/50 ml-auto transition-all duration-300 transform translate-x-[-10px] group-hover/pill:translate-x-0" />
            </div>

          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-[32px] p-12 flex flex-col items-center justify-center pointer-events-none shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#d9d9d9] text-[#1a1111]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="absolute top-6 right-6 w-3.5 h-3.5 bg-[#f03a3a] rounded-full shadow-sm"></div>
          
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-widest text-[#2a4e51]">About Me</h2>
          <p className="text-[#1a1111]/70 text-center leading-relaxed mb-10 text-lg max-w-xl font-medium">
            {profile.bio}
          </p>
          
          <div className="p-4 bg-white rounded-2xl mb-4 pointer-events-auto prevent-flip hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg border border-black/5">
            <img src={profile.qrCode} alt="QR Code" className="w-32 h-32" />
          </div>
          <p className="text-[12px] tracking-[0.4em] text-[#1a1111]/50 mt-2 font-bold uppercase">SCAN FOR CV</p>
        </div>
      </motion.div>

      {/* Modals outside 3D space */}
      <div className="prevent-flip" onClick={e => e.stopPropagation()}>
        <Modal isOpen={activeModal === 'contact'} onClose={() => setActiveModal(null)} title="Contact Info">
          <ContactContent />
        </Modal>
        <Modal isOpen={activeModal === 'skills'} onClose={() => setActiveModal(null)} title="Skills Overview">
          <SkillsContent />
        </Modal>
        <Modal isOpen={activeModal === 'experience'} onClose={() => setActiveModal(null)} title="Work Experience">
          <ExperienceContent />
        </Modal>
        <Modal isOpen={activeModal === 'education'} onClose={() => setActiveModal(null)} title="Certificates & Education">
          <EducationContent />
        </Modal>
      </div>

    </div>
  );
};
