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
    label: "Meet Keerat",
    response:
      "Hey there! I’m Ellie — Keerat’s digital sidekick. Let me introduce you to the human behind the code. Keerat Kaur is a Computer Science and AI student at IGDTUW who mixes logic with a healthy dose of creativity. She loves turning ideas into code, and code into experiences that actually make people smile."
  },
  {
    id: "projects",
    label: "What She’s Been Cooking",
    response:
      "Keerat recently built a Punjabi Proverb Translator using NLP — it takes classic Punjabi sayings and translates them while keeping their cultural flair intact. The rest of her projects are still simmering in the dev kitchen — patience, they’ll be worth the wait!"
  },
  {
    id: "experience",
    label: "Her Current Adventures",
    response:
      "Right now, Keerat’s juggling two cool gigs — she’s a Research Intern at DTU working on Explainable AI for melanoma detection, and a Full Stack Intern at IGDTUW helping build an AI-powered web app. Outside of tech, she’s all about words and ideas — especially writing."
  },
  {
    id: "skills",
    label: "Her Tech Superpowers",
    response:
      "Ellie’s seen her in action — Keerat codes fluently in Python, JavaScript, C++, and SQL. She loves crafting with React, Flask, Flutter, and TensorFlow, and designs interfaces on Figma that make pixels proud."
  },
  {
    id: "education",
    label: "Her Learning Journey",
    response:
      "Keerat’s pursuing a B.Tech in Computer Science and AI at IGDTUW (CGPA: 9.93) and a Minor in AI from IIT Ropar. She’s the kind of student who treats curiosity like caffeine — always exploring, always learning something new."
  },
  {
    id: "contact",
    label: "Want to Say Hi?",
    response:
      "Ellie here again — if you’d like to connect with Keerat, drop her a mail at itskeeratkaur@gmail.com or find her on LinkedIn and GitHub. She’s always up for collaborations, cool ideas, or a nerdy chat!"
  }
];

