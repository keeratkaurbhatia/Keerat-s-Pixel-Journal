export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ChatbotTopic {
  id: string;
  label: string;
  response: string;
}

export const portfolioData = {
  name: "Keerat Kaur",
  tagline: 'print("Hello, world!")',
  email: "itskeeratkaur@gmail.com",
  phone: "+91 9643723646",
  linkedin: "linkedin.com/in/keeratkaurbhatia",
  github: "github.com/keeratkaurbhatia",

  about: `Hey there! I'm Keerat, a first-year Computer Science and AI student at IGDTUW with a minor in AI from IIT Ropar. I'm passionate about building things that matter—whether it's exploring Explainable AI in melanoma detection research, developing full-stack web applications, or designing interfaces that feel like a warm hug.

I love diving into creative projects that blend tech with storytelling. From translating Punjabi proverbs with NLP to designing quirky productivity apps with a desi twist, I'm all about making tech more human and accessible.

When I'm not coding, you'll find me writing for my college's literary society, debating at MUN conferences, or doodling in my diary (which inspired this very website!). I believe in learning by doing, staying curious, and adding a sprinkle of whimsy to everything I create.`,

  education: [
    {
      institution: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
      degree: "Bachelor of Technology in Computer Science and Artificial Intelligence",
      period: "2024-28",
      cgpa: "9.93"
    },
    {
      institution: "IIT Ropar",
      degree: "Minor in AI",
      period: "2024-25"
    }
  ],

  experience: [
    {
      role: "Research Intern",
      organization: "Delhi Technological University (DTU) - Calibre Program",
      period: "June 2025 – Present",
      description: "Co-authoring a research paper on the clinical relevance of XAI techniques for distinguishing melanoma from benign nevi using dermoscopic images. Working under Dr. Sudhir (IGDTUW) and Prof. Rahul Katarya (DTU)."
    },
    {
      role: "Full Stack Development Intern",
      organization: "IGDTUW - AI-DS Dept.",
      period: "June 2025 – Present",
      description: "Developing an AI-powered web application under Dr. Dripty Tripathi's mentorship, focused on controlling binge-eating."
    },
    {
      role: "Society Member",
      organization: "B.H.A.V - The Literary Society, IGDTUW",
      period: "October 2024 – Present",
      description: "Active in Writing Circle, Debate Circle (represented college in inter-collegiate debates), and MUN Circle (served as USG External Affairs for IGDTUW MUN 2025)."
    }
  ],

  projects: [
    {
      title: "Budget Baes",
      description: "Co-designed a budgeting app that empowers Gen Z users to manage money with a bold and fun interface. Features include weekly challenges, mood-based expense scoring, 'Festive Funds,' and savings goals.",
      technologies: ["UI/UX Design", "Figma"],
      link: "https://www.figma.com/proto/budget-baes"
    },
    {
      title: "Chai Shai",
      description: "Developed a wellness-based productivity app prototype with a desi twist. Users choose a chai based on mood and pair it with guided break activities; a phone-lock timer ensures mindful rest.",
      technologies: ["UI/UX Design", "Figma"],
      link: "https://www.figma.com/proto/chai-shai"
    },
    {
      title: "Punjabi Proverb Translator: Akhan 'ch Akhaan",
      description: "Building an NLP tool leveraging the Llama3 model via Groq API to interpret Punjabi proverbs into English, preserving metaphorical and cultural meaning. 650+ proverbs pre-processed for fast, responsive experience.",
      technologies: ["Python", "NLP", "BLEURT", "Streamlit", "Llama3"],
      link: "https://akhan-ch-akhaan.streamlit.app"
    },
    {
      title: "Interactive Portfolio Room",
      description: "Designing a 3D virtual room showcasing symbolic objects that reflect personal experiences, skills, and values. Aiming to create a highly personal, immersive storytelling experience.",
      technologies: ["Web Development", "Spline", "3D Design"],
      link: "https://my.spline.design/portfolio"
    }
  ],

  skills: {
    languages: ["Python", "C++", "SQL", "JavaScript", "HTML/CSS", "R", "Dart"],
    frameworks: ["React", "Node.js", "Flask", "WordPress", "Flutter"],
    tools: ["Git", "Github", "VS Code", "Figma", "Google Colab"],
    libraries: ["pandas", "NumPy", "Matplotlib", "Seaborn", "TensorFlow", "Keras", "OpenCV", "BLEURT", "NLTK", "Beautiful Soup"]
  }
};

export const chatbotTopics: ChatbotTopic[] = [
  {
    id: "intro",
    label: "Who is Keerat?",
    response: "Hi! I'm Keerat Kaur, a Computer Science and AI student at IGDTUW with a minor from IIT Ropar. I'm passionate about building meaningful tech—from AI research to full-stack development to quirky UI/UX designs. I love blending creativity with code and making tech more human! 🐘"
  },
  {
    id: "projects",
    label: "Cool Projects",
    response: "I've worked on some fun stuff! Like Budget Baes (a Gen Z budgeting app), Chai Shai (a desi wellness app), a Punjabi Proverb Translator using NLP, and even a 3D Interactive Portfolio Room. Each project tells a story and solves a real problem!"
  },
  {
    id: "experience",
    label: "Experience",
    response: "I'm currently a Research Intern at DTU working on Explainable AI for melanoma detection, and a Full Stack Development Intern at IGDTUW building an AI-powered app. I'm also active in my college's literary society—writing, debating, and organizing MUN conferences!"
  },
  {
    id: "skills",
    label: "Technical Skills",
    response: "I work with Python, JavaScript, C++, SQL, and more! I love using React, Flask, Flutter, and TensorFlow. I'm also pretty handy with Figma for UI/UX design. Basically, if it involves creating something cool, I'm in!"
  },
  {
    id: "education",
    label: "Education",
    response: "I'm pursuing B.Tech in Computer Science and AI at IGDTUW (CGPA: 9.93) and doing a minor in AI from IIT Ropar. I love learning and constantly exploring new technologies and methodologies!"
  },
  {
    id: "contact",
    label: "Get in Touch",
    response: "Want to chat? You can reach me at itskeeratkaur@gmail.com or connect with me on LinkedIn and GitHub. I'm always up for interesting conversations and collaboration opportunities!"
  }
];
