const safe = (value) => value.replace(/[&<>]/g, '');

function createProjectArt(title, a, b, c) {
  const cleanTitle = safe(title);
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${cleanTitle}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}" stop-opacity="0.35"/>
      <stop offset="45%" stop-color="${b}" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="${c}" stop-opacity="0.9"/>
    </linearGradient>
    <radialGradient id="spot" cx="60%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#64ffda" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#64ffda" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="#0a101b"/>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <rect width="1200" height="800" fill="url(#spot)"/>
  <g stroke="#64ffda" stroke-opacity="0.22" fill="none">
    <path d="M60 710 L540 220 L1120 680"/>
    <path d="M80 580 L390 290 L710 530 L1110 210"/>
    <circle cx="390" cy="290" r="7" fill="#64ffda" fill-opacity="0.45"/>
    <circle cx="710" cy="530" r="7" fill="#64ffda" fill-opacity="0.45"/>
  </g>
  <text x="90" y="665" fill="#d7f8f2" font-family="Arial, sans-serif" font-size="72" font-weight="700">${cleanTitle}</text>
  <text x="94" y="715" fill="#9fc3d8" font-family="Arial, sans-serif" font-size="28" letter-spacing="4">NEXT.JS PORTFOLIO VISUAL</text>
</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const skillGroups = [
  {
    title: 'Frontend Craft',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Accessibility', 'Motion'],
  },
  {
    title: 'Backend + Data',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Auth', 'Caching'],
  },
  {
    title: 'Engineering',
    items: ['System Design', 'Testing', 'Git Workflow', 'Performance', 'CI/CD', 'SEO'],
  },
];

const repoImages = {
  ai: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
  saas: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  edtech: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80',
  productivity: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
  bike: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=80',
  portfolio: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
  frontend: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  iot: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80',
  template: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80',
  business: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1400&q=80',
  bootstrap: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=80',
  cpp: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
  js: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
};

export const featuredProjects = [
  {
    title: 'PostPersona',
    summary:
      'AI-powered social content platform for LinkedIn/X with persona-driven writing, scheduling, and approval-first workflows.',
    image: repoImages.ai,
    tags: ['AI SaaS', 'Next.js', 'Convex'],
    year: '2026',
  },
  {
    title: 'EdTechPlatform',
    summary:
      'Production-ready e-learning system with authentication, payments, course workflows, and REST APIs.',
    image: repoImages.edtech,
    tags: ['MERN', 'Razorpay', 'Cloudinary'],
    year: '2025',
  },
  {
    title: 'linkstore',
    summary:
      'Minimal React + Vite starter project focused on clean structure and fast frontend bootstrapping.',
    image: repoImages.frontend,
    tags: ['React', 'Vite', 'Starter'],
    year: '2024',
  },
];

export const allProjects = [
  {
    title: 'PostPersona',
    description:
      'AI-powered social content generation platform with persona workflows, scheduling, queue management, and approval-first publishing.',
    image: repoImages.ai,
    stack: ['Next.js 16', 'React 19', 'Convex', 'TypeScript', 'Gemini/Groq'],
    status: 'Live',
  },
  {
    title: 'EdTechPlatform',
    description:
      'Full-stack e-learning platform with JWT authentication, payment integration, course management, and robust backend APIs.',
    image: repoImages.edtech,
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    status: 'Live',
  },
  {
    title: 'linkstore',
    description: 'Minimal React + Vite starter template repository with lightweight initial structure.',
    image: repoImages.frontend,
    stack: ['React', 'Vite'],
    status: 'Prototype',
  },
  {
    title: 'ButtlerAI',
    description:
      'Gemini-style AI chat interface clone with typed responses, image-to-text extraction, and text-to-audio output.',
    image: repoImages.saas,
    stack: ['React', 'JavaScript', 'AI Chat UI'],
    status: 'Live',
  },
  {
    title: 'EMailManager',
    description:
      'Email automation utility for bulk email operations, filtering logic, and unwanted-message management workflows.',
    image: repoImages.saas,
    stack: ['Python', 'Node.js', 'Automation'],
    status: 'Live',
  },
  {
    title: 'React-Redux',
    description:
      'Collection of React apps demonstrating Redux state management patterns across e-commerce and music application flows.',
    image: repoImages.frontend,
    stack: ['React', 'Redux', 'State Management'],
    status: 'Live',
  },
  {
    title: 'SpotifyClone_frontend',
    description:
      'Vanilla JavaScript Spotify UI clone with playlist rendering, login flow, and interactive audio interface controls.',
    image: repoImages.js,
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
  },
  {
    title: 'React',
    description:
      'Practice repository of React projects featuring leaderboard systems and cart-based UI component compositions.',
    image: repoImages.frontend,
    stack: ['React', 'Bootstrap', 'Reusable Components'],
    status: 'Live',
  },
  {
    title: 'Consistency-Manager',
    description:
      'Productivity dashboard for sprint and earnings tracking with isolated user data, CRUD APIs, and progress analytics.',
    image: repoImages.productivity,
    stack: ['Next.js', 'MongoDB', 'Analytics'],
    status: 'Live',
  },
  {
    title: 'Supes',
    description:
      'Interactive motorcycle brand prototype with animation-heavy storytelling and structured product-focused UI flows.',
    image: repoImages.bike,
    stack: ['Next.js', 'TypeScript', 'Animations'],
    status: 'Prototype',
  },
  {
    title: 'HorizontalPortfolio',
    description:
      'Horizontally scrolling portfolio experience with GSAP/Framer motion architecture and modular design system patterns.',
    image: repoImages.portfolio,
    stack: ['Next.js', 'React', 'Tailwind', 'GSAP', 'Framer Motion'],
    status: 'Live',
  },
  {
    title: 'TelegramIOT-BOT-Python',
    description:
      'IoT integration project combining Telegram bot server logic with ultrasonic sensor hardware control on ESP devices.',
    image: repoImages.iot,
    stack: ['Python', 'ESP', 'Telegram Bot', 'IoT'],
    status: 'Live',
  },
  {
    title: 'MERN',
    description:
      'AI image generation interface built on MERN principles with frontend-first architecture and backend-ready structure.',
    image: repoImages.ai,
    stack: ['React', 'Node.js', 'MongoDB', 'AI Images'],
    status: 'Prototype',
  },
  {
    title: 'LawFirm',
    description:
      'Responsive multi-page React template with structured routing and EmailJS-powered contact interactions.',
    image: repoImages.business,
    stack: ['React', 'JavaScript', 'EmailJS'],
    status: 'Live',
  },
  {
    title: 'gagan_baghel_Portfolio',
    description:
      'Personal Next.js portfolio using App Router with animations, structured sections, and clean project navigation.',
    image: repoImages.portfolio,
    stack: ['Next.js', 'App Router', 'Animations'],
    status: 'Live',
  },
  {
    title: 'vzallsites',
    description:
      'Multi-template collection spanning themed websites with animations, sliders, cart interactions, and responsive design.',
    image: repoImages.template,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Chakra UI'],
    status: 'Live',
  },
  {
    title: 'restaurant',
    description:
      'Responsive restaurant website with structured navigation, landing sections, and clean multi-section page layout.',
    image: repoImages.business,
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
  },
  {
    title: 'dental-website',
    description:
      'Static business website for a dental clinic focused on clear information hierarchy and responsive layout.',
    image: repoImages.business,
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
  },
  {
    title: 'Websites_Prototype',
    description:
      'Experimental website builds including landing pages, parallax layouts, recipe search, and internal prototypes.',
    image: repoImages.template,
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Prototype',
  },
  {
    title: 'startingwithbootstrap',
    description:
      'Bootstrap-based template repository with landing and blog patterns for rapid layout implementation.',
    image: repoImages.bootstrap,
    stack: ['HTML', 'CSS', 'Bootstrap'],
    status: 'Live',
  },
  {
    title: 'frontendPractice',
    description:
      'Frontend practice collection focused on CSS fundamentals, layout experiments, and Bootstrap implementation drills.',
    image: repoImages.bootstrap,
    stack: ['HTML', 'CSS', 'Bootstrap'],
    status: 'Prototype',
  },
  {
    title: 'TailwindComponents',
    description: 'Tailwind component repository intended for UI blocks, currently inactive and minimal in content.',
    image: repoImages.template,
    stack: ['Tailwind CSS'],
    status: 'Prototype',
  },
  {
    title: 'DesignPatterns',
    description:
      'Architecture-focused repository implementing classic design patterns such as Factory, Singleton, Adapter, and Facade.',
    image: repoImages.cpp,
    stack: ['Java', 'C++', 'OOP', 'Design Patterns'],
    status: 'Live',
  },
  {
    title: 'CodeBaseOfC_PlusPlus',
    description:
      'C++ fundamentals repository with programming exercises and small game implementations for core skill building.',
    image: repoImages.cpp,
    stack: ['C++', 'Programming Fundamentals', 'Games'],
    status: 'Live',
  },
  {
    title: 'Javascript',
    description:
      'JavaScript mini-projects collection including calculator, quiz, dice game, drum kit, clock, and to-do workflows.',
    image: repoImages.js,
    stack: ['JavaScript', 'DOM', 'Mini Projects'],
    status: 'Live',
  },
  {
    title: 'JS_Basics',
    description:
      'Core JavaScript fundamentals covering variables, loops, functions, objects, classes, and DOM basics.',
    image: repoImages.js,
    stack: ['JavaScript', 'Fundamentals'],
    status: 'Live',
  },
  {
    title: 'gagan-baghel',
    description:
      'GitHub profile README repository highlighting developer skills, experience, and concise project showcase context.',
    image: repoImages.portfolio,
    stack: ['Markdown', 'Profile README'],
    status: 'Live',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/gagan-baghel' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gagan-singh-baghel-0a894220b/' },
];
