import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { profile } from '../../data/profile';

export const ContactContent = () => {
  return (
    <div className="space-y-3">
      {Object.entries(profile.contacts).map(([key, value]) => {
        let Icon: React.ElementType = Mail;
        if (key === 'phone') Icon = Phone;
        if (key === 'github') Icon = FaGithub;
        if (key === 'linkedin') Icon = FaLinkedin;
        if (key === 'facebook') Icon = FaFacebook;

        const isLink = value.startsWith('http');

        return (
          <a
            key={key}
            href={isLink ? value : (key === 'email' ? `mailto:${value}` : `tel:${value}`)}
            target={isLink ? "_blank" : "_self"}
            rel="noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 group hover:scale-[1.02]"
          >
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <Icon size={20} className="text-white/70 group-hover:text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-white/50 capitalize tracking-wider font-medium">{key}</p>
              <p className="text-white font-medium truncate">{value.replace('https://', '')}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export const SkillsContent = () => {
  return (
    <div>
      <h4 className="text-white/50 uppercase text-xs tracking-[0.2em] mb-4 font-bold">Technical Skills</h4>
      <div className="space-y-4 mb-8">
        {profile.skills.technical.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-white/90">{skill.name}</span>
              <span className="text-xs font-mono text-white/50">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-primary/80 h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="text-white/50 uppercase text-xs tracking-[0.2em] mb-4 font-bold">Soft Skills</h4>
      <div className="flex flex-wrap gap-2">
        {profile.skills.soft.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-white/5 rounded-xl text-sm text-white/80 border border-white/10 hover:bg-white/10 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const ExperienceContent = () => {
  return (
    <div className="space-y-8">
      {profile.experience.map((exp, idx) => (
        <div key={idx} className="relative pl-8 border-l border-white/10 hover:border-primary/50 transition-colors">
          <div className="absolute w-3 h-3 bg-primary rounded-full left-[-6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <p className="text-xs font-mono text-primary mb-2 tracking-widest">{exp.period}</p>
          <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h4>
          <p className="text-white/60 text-sm mb-3 font-medium">{exp.company}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export const EducationContent = () => {
  return (
    <div className="space-y-8">
      <h4 className="text-white/50 uppercase text-xs tracking-[0.2em] mb-4 font-bold">Academic</h4>
      {profile.education.map((edu, idx) => (
        <div key={idx} className="bg-white/5 p-5 rounded-2xl border border-white/10">
          <h4 className="text-white font-bold text-lg mb-1">{edu.degree}</h4>
          <p className="text-primary text-sm mb-3">{edu.school}</p>
          <p className="text-white/40 font-mono text-xs">{edu.period}</p>
        </div>
      ))}

      <h4 className="text-white/50 uppercase text-xs tracking-[0.2em] mt-8 mb-4 font-bold">Languages</h4>
      <div className="grid grid-cols-2 gap-4">
        {profile.languages.map((lang, idx) => (
          <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-1">
             <span className="text-white font-medium">{lang.name}</span>
             <span className="text-white/50 text-xs font-mono">{lang.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const ProjectsContent = () => {
  return (
    <div className="space-y-4">
      {profile.projects.map((proj, idx) => (
         <div key={idx} className="group flex gap-4 p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
           <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
             <img src={proj.image} alt={proj.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
           </div>
           <div className="flex flex-col justify-center">
             <h4 className="text-white font-bold mb-1">{proj.name}</h4>
             <p className="text-white/60 text-sm line-clamp-2">{proj.description}</p>
           </div>
         </div>
      ))}
    </div>
  );
}
