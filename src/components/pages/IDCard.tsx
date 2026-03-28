import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { Modal } from '../ui/Modal';
import { ContactContent, SkillsContent, ExperienceContent, EducationContent } from '../sections/Modals';
import { Briefcase, Code, Award, ArrowRight, User, MapPin, GraduationCap } from 'lucide-react';
import './IDCard.css';
// logic
export const IDCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleFlip = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.prevent-flip')) return;
    setIsFlipped(!isFlipped);
  };

  const openModal = (type: string) => {
    setActiveModal(type);
  };

  return (
    <div 
      className="card-perspective relative w-[500px] h-[300px] cursor-pointer group/card" 
      onClick={handleFlip}
      /* Đảm bảo góc nhìn 3D hoạt động 100% */
    >
      <motion.div
        className="w-full h-full relative preserve-3d shadow-[0_25px_60px_rgba(0,0,0,0.4)] rounded-[28px]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        
        {/* --- MẶT TRƯỚC --- */}
        <div className="card-front absolute w-full h-full backface-hidden rounded-[28px] overflow-hidden flex items-center p-5 border border-white/20">
          <div className="absolute top-4 right-5 w-2.5 h-2.5 bg-[#f03a3a] rounded-full shadow-[0_0_8px_rgba(240,58,58,0.6)] animate-pulse"></div>

          {/* Khối Teal */}
          <div 
            className="translate-x-15px translate-y-10 w-[190px] h-[180px] rounded-[22px] flex flex-col items-center justify-center prevent-flip group/avatar relative overflow-hidden transition-all duration-300 hover:scale-[1.03] shadow-inner"
            onClick={(e) => { e.stopPropagation(); openModal('contact'); }}
          >
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/avatar:opacity-100 transition-opacity pointer-events-none"></div>
             {profile.avatar && profile.avatar !== "https://i.pravatar.cc/300" ? (
               <img src={profile.avatar} alt="Avatar" className="w-30 h-30 rounded-full object-cover border-2 border-white/20 mb-3 shadow-lg group-hover/avatar:border-white/40 transition-all" />
             ) : (
               <div className="w-50 h-50 rounded-full bg-white/5 flex items-center justify-center mb-3">
                 <User className="text-white/20 w-10 h-10" />
               </div>
             )}
             <h1 className="text-black text-[16px] font-bold tracking-tight text-center px-2 translate-y-[-10px]">{profile.name}</h1>
             <p className="text-black text-[10px] font-black tracking-[0.2em] uppercase mt-1 translate-y-[-10px]">{profile.role}</p>
          </div>

          {/* 3 Thanh Đen */}
          <div className="flex-1 h-full pl-6 flex flex-col justify-center gap-3 prevent-flip">
            {[
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'skills', label: 'Skills', icon: Code },
              { id: 'certification', label: 'Certification', icon: Award },
              { id: 'education', label: 'Education', icon: GraduationCap },
              
            ].map((item) => (
              <div 
                key={item.id}
                className="translate-y-10 w-50 h-[30px] rounded-full flex items-center px-5 cursor-pointer group/pill transition-all duration-300 hover:bg-[#58d29f] border border-white shadow-md active:scale-[0.50]"
                onClick={(e) => { e.stopPropagation(); openModal(item.id); }}
              >
                 <div className="p-2 bg-white/5 rounded-full mr-4 group-hover/pill:bg-white/10 transition-colors">
                   <item.icon size={16} className="text-black group-hover/pill:text-white transition-colors" />
                 </div>
                 <span className="text-black group-hover/pill:text-white font-bold text-[11px] tracking-[0.15em] uppercase transition-colors">{item.label}</span>
                 <ArrowRight size={16} className="text-white/0 group-hover/pill:text-white/30 ml-auto transition-all transform translate-x-[-8px] group-hover/pill:translate-x-0" />
              </div>
            ))}
          </div>
        </div>

        {/* --- MẶT SAU --- */}
        <div className="card-back absolute w-full h-full backface-hidden rounded-[28px] p-8 flex flex-col items-center justify-between shadow-2xl  text-[#1a1111] border border-white/20">
          <div className="absolute top-4 right-5 w-2.5 h-2.5 bg-[#f03a3a] rounded-full shadow-[0_0_8px_rgba(240,58,58,0.6)] animate-pulse"></div>
          <div className="translate-x-[-20px] translate-y-[-20px] w-full flex justify-between items-center opacity-150 font-bold">
            <div className="flex items-center gap-2 text-[#2a4e51]">
               <MapPin size={14} />
               <span className="translate-x-[-5px] text-[10px] tracking-tighter uppercase">Quan Tan Phu, Thanh pho Ho Chi Minh, Viet Nam</span>
            </div>
            <span className="translate-x-[5px] text-[10px] font-mono tracking-widest text-[#1a1111]/40">#ID-2026-2703</span>
          </div>
          
          <div className="text-center px-4">
            <h2 className="translate-x-[-150px] translate-y-[-20px] text-xl font-black mb-3 uppercase tracking-[0.25em] text-[#2a4e51]">About Me</h2>
            <p className="text-[#1a1111]/80 text-[11px] leading-relaxed font-medium text-justify w-[85%] translate-y-[-30px] translate-x-[-20px]">
              {profile.bio}
            </p>
          </div>
          
          <div className="w-full flex items-center justify-between mt-4 px-2 pt-5 border-t border-[#2a4e51]/10">
            <div className="flex flex-col">

              <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#2a4e51]/20"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-[#2a4e51]/40"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-[#2a4e51]/60"></div>
              </div>
            </div>
            
            <div className="translate-y-[-50px] p-1 bg-white rounded-xl shadow-lg border border-black/5 prevent-flip pointer-events-auto hover:scale-110 transition-transform cursor-pointer">
              {/* Thêm xử lý lỗi nếu không có QR */}
              {profile.qrCode ? (
                 <img src={profile.qrCode} alt="QR Code" className=" w-12 h-12 grayscale-[0.2] hover:grayscale-0 transition-all" />
              ) : (
                 <div className=" w-12 h-12 bg-black/5 rounded-md flex items-center justify-center text-[8px] text-black/40">No QR</div>
              )}
            </div>
          </div>
        </div>

      </motion.div>

      {/* --- LỚP MODALS --- */}
      <div className="prevent-flip" onClick={e => e.stopPropagation()}>
        <Modal isOpen={activeModal === 'contact'} onClose={() => setActiveModal(null)} title="Contact Information">
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