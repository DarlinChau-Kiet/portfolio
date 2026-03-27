import myAvatar from '../assets/face.jpg';
export const profile = {
  name: "Châu Trần Kiệt",
  role: "Frontend Developer",
  avatar: myAvatar,
  bio: "I am Chau Tran Kiet, a second-year Information Technology student with a strong focus on Frontend Development. I started exploring web development in grade 12 and have since consistently self-learned and built projects to strengthen my skills. I am particularly interested in creating user-friendly and scalable web interfaces, while gradually expanding toward Fullstack development. I am looking for an opportunity to contribute, learn from real-world projects, and grow in a professional environment.",
  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/",
  contacts: {
    email: "tranchaukiet.it@gmail.com",
    phone: "84+ 945 305 068",
    linkedin: "https://www.linkedin.com/in/darlin-chau-205059396/",
    github: "https://github.com/",
    facebook: "https://facebook.com/"
  },
  skills: {
    technical: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 }
    ],
    soft: ["Problem Solving", "Teamwork", "Time Management", "Adaptability"]
  },
  experience: [
    { company: "Tech Solutions Inc", role: "Frontend Developer", period: "2023 - Present", description: "Developed modern web applications..." },
    { company: "Creative Web Agency", role: "Junior Developer", period: "2021 - 2023", description: "Built interactive landing pages..." }
  ],
  projects: [
    { name: "E-Commerce Dashboard", description: "React Admin panel", image: "https://picsum.photos/400/300", github: "#" },
    { name: "AI Chat App", description: "Realtime messaging", image: "https://picsum.photos/400/301", github: "#" }
  ],
  education: [
    { school: "University of Technology", degree: "BSc Computer Science", period: "2017 - 2021" }
  ],
  languages: [
    { name: "Vietnamese", level: "Native" },
    { name: "English", level: "IELTS 7.0" }
  ],
  hobbies: ["Photography", "Gaming", "Traveling", "Reading"]
};
