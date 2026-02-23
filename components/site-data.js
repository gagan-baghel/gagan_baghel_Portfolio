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

export const featuredProjects = [
  {
    title: 'NeoTank Control Console',
    summary:
      'A real-time command dashboard for monitoring and remotely controlling smart water infrastructure.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    tags: ['Realtime', 'IoT', 'Dashboard'],
    year: '2025',
  },
  {
    title: 'Crypto Insight Lab',
    summary:
      'A data-rich market experience with predictive signals, trend maps, and custom alerting.',
    image: createProjectArt('Crypto Insight Lab', '#1b2944', '#15314a', '#09101b'),
    tags: ['Analytics', 'Data Viz', 'Alerts'],
    year: '2024',
  },
  {
    title: 'Visual Story Studio',
    summary:
      'A high-polish media platform that blends editorial flow, motion, and performance-first rendering.',
    image: createProjectArt('Visual Story Studio', '#1e263f', '#113243', '#070f18'),
    tags: ['Creative Tech', 'CMS', 'Performance'],
    year: '2024',
  },
];

export const allProjects = [
  {
    title: 'Weather API Experience',
    description: 'Forecast intelligence with location-aware weather timelines and insights.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1400&q=80',
    stack: ['API', 'React', 'Visualization'],
    status: 'Live',
  },
  {
    title: 'Parallax Brand Site',
    description: 'A narrative-first web experience with deep layers and cinematic movement.',
    image: createProjectArt('Parallax Brand Site', '#1e2b3d', '#10364b', '#09111b'),
    stack: ['GSAP', 'Scroll', 'Brand'],
    status: 'Concept',
  },
  {
    title: 'Dynamic ToDo Platform',
    description: 'Task intelligence platform with backend persistence and smart filtering.',
    image: createProjectArt('Dynamic ToDo Platform', '#173245', '#113f4b', '#08111d'),
    stack: ['Node', 'MongoDB', 'Auth'],
    status: 'Live',
  },
  {
    title: 'Modern Blog Engine',
    description: 'Composable blogging with edit flows, publishing states, and analytics hooks.',
    image: createProjectArt('Modern Blog Engine', '#1d2d43', '#114054', '#09121e'),
    stack: ['CMS', 'SSR', 'SEO'],
    status: 'Live',
  },
  {
    title: 'REST Platform Core',
    description: 'Production API architecture for content, users, workflows, and integrations.',
    image: createProjectArt('REST Platform Core', '#12344a', '#12384f', '#08111d'),
    stack: ['REST', 'Security', 'Docs'],
    status: 'Live',
  },
  {
    title: 'Mail Intelligence Toolkit',
    description: 'Python automation suite for mailbox classification and operational triage.',
    image: createProjectArt('Mail Intelligence Toolkit', '#1b2941', '#0f3a4f', '#09101b'),
    stack: ['Python', 'Automation', 'Rules'],
    status: 'Prototype',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/gagan-baghel' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gagan-singh-baghel-0a894220b/' },
  { label: 'Instagram', href: 'https://www.instagram.com/gagansinghbaghel15/?next=%2F' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100010154055321' },
];
