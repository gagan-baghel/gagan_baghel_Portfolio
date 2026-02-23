export default function SkillsSection() {
  return (
    <section id="Skills" className="skills py-12 sm:px-28 sm:min-h-[70vh] flex items-center z-20">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full hidden md:flex flex-col justify-center items-center">
          <canvas width={650} className="z-20 xl:h-[600px] xl:w-[600px] lg:h-[500px] lg:w-[500px]" height={650} id="myCanvas">
            <ul id="tags">
              <li>
                <a href="#" target="_blank" id="at" rel="noreferrer">
                  <span> HTML </span>
                </a>
              </li>
              <li><a href="#" target="_blank" rel="noreferrer">CSS</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">ES5</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">TypeScript</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">REST</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">JSON</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">GSAP</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Data Science</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Wordpress</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">PHP</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Python</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Node JS</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Git</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">_lodash</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">SASS</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">JQuery</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">SQI</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">Gulp</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">npm</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">BEM</a></li>
              <li><a href="#" target="_blank" id="gagan" rel="noreferrer">Gagan</a></li>
            </ul>
          </canvas>
        </div>

        <div className="px-6 sm:px-12 py-12 lg:w-1/2 w-full flex flex-col justify-center items-center z-20">
          <div>
            <h1 className="cursor-pointer text-[#8892b0cb] leading-[50px] text-[25px] sm:text-[30px] md:text-[50px] ease-in-out duration-300 inline-block font-[700] z-20 pb-6">
              {`Hey Gagan Here, ¯\\_(ツ)_/¯`}
            </h1>
            <p className="z-20 cursor-pointer mt-5 smooth-italic md:text-xl sm:text-base text-sm hover:text-[#64ffda] text-[#8892b0cb]">
              I am a self learning, smartworking programmer proficient with programming languages like C++ ,
              Javascript , basics of Java &amp; python having a strong understanding of the key concepts of programming
              like OOPs , Design Patterns , Algorithms , Data_Structures etc.
            </p>
            <p className="z-20 cursor-pointer mt-5 smooth-italic md:text-xl sm:text-base text-sm hover:text-[#64ffda] text-[#8892b0cb]">
              Gagan is a developer, he is a Fullstack Web developer. In the frontend he know Html, Css,Tailwind ,
              Bootstrap, Javascript, React js, and in backend, he know Node js, Express js, I use MongoDb for
              database management. he is familiar with version control systems like Git, Github. he also have a Good
              Hand Over Data Structures &amp; Algorithms and still learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
