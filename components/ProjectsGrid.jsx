const projects = [
  {
    src: 'https://s3.amazonaws.com/ionic-marketplace/api-weather-app/icon.png',
    header: 'Weather API',
    description:
      'Weather APIs are Application Programming Interfaces that allow you to connect to large databases of weather forecast and historical information',
    projectLink: '',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Parallex Website',
    description:
      'website built on a scrolling technique used in web design where background images throughout a web page move slower than foreground images, creating an illusion of depth on a two-dimensional site.',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Parallex Website',
    description:
      'website built on a scrolling technique used in web design where background images throughout a web page move slower than foreground images, creating an illusion of depth on a two-dimensional site.',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Dynamic ToDO List With Backend',
    description: 'A dynamic todolist using ejs,mongodb,html,css',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Basic Blog Website',
    description: 'Blog website to publish edit and delete blog',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Simon Game',
    description: 'A memory enhancement game which give you a better challang to user at every step',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Static TinDog',
    description: 'A static website using bootstrap',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Rest API',
    description: 'A rest api to perform all the actions to the database',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Anonymous Secrets Website',
    description: 'Place where you can post anonymous stuffs thus having oauth functionality',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Bakers Landing Page',
    description: 'Parellex baker landing page',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'Mail Manager',
    description: 'Python base mail code that help to read delete and seprate your mail',
    projectLink: 'pl',
    githubLink: 'gl',
  },
  {
    src: '',
    header: 'NeoTank',
    description: 'A watertank  chat bot to remotely control the functionality of watertank',
    projectLink: 'pl',
    githubLink: 'gl',
  },
];

export default function ProjectsGrid() {
  return (
    <div id="project-cards" className="flex flex-row flex-wrap justify-center text-left">
      {projects.map((project, index) => (
        <div
          key={`${project.header}-${index}`}
          className="border border-[#64ffda] w-[270px] min-h-[200px] px-4 py-5 rounded-lg ease-in-out duration-300 hover:-translate-y-4 hover:border-[#ffffff20] hover:bg-[#8892b010] m-4"
        >
          <img className="h-[150px] object-cover w-full rounded-xl" src={project.src} alt="" />
          <h1 className="text-[#8892b0] hover:text-[#64ffda] text-3xl font-extrabold py-3 smooth-italic">
            {project.header}
          </h1>
          <p className="text-[#8892b0] hover:text-[#64ffda] text-sm font-extrabold py-1 smooth-italic">
            {project.description}
          </p>
          <div className="w-full flex justify-around flex-row py-3">
            <a
              className="text-[#ffffff] hover:text-[blue] text-sm font-extrabold py-1 smooth-italic"
              href={project.projectLink}
            >
              See More
            </a>
            <a
              className="text-[#ffffff] hover:text-[blue] text-sm font-extrabold py-1 smooth-italic"
              href={project.githubLink}
            >
              Github
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
