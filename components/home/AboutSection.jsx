export default function AboutSection() {
  return (
    <section id="AboutMe" className="relative py-12 px-2 sm:px-28 sm:min-h-[60vh] flex items-center">
      <div className="circle absolute md:h-[900px] md:w-[900px] w-[500px] h-[500px] -left-[300px] rounded-full bg-black"></div>

      <div className="flex h-full lg:flex-row flex-col items-center z-20">
        <div className="aboutinfo px-6 sm:px-12 py-12 lg:w-1/2 w-full">
          <h1 className="cursor-pointer text-[#8892b0cb] leading-[50px] text-[35px] sm:text-[50px] md:text-[70px] ease-in-out duration-300 inline-block font-[700]">
            About-Me
          </h1>
          <p className="smooth-italic cursor-pointer mt-5 md:text-xl sm:text-base text-sm hover:text-[#64ffda] text-[#8892b0cb]">
            Gagan is a developer, programmer, solution oriented problem solver. He likes to code things from scratch,
            and enjoys bringing ideas to life in the browser. He values simple content structure, clean design
            patterns, and thoughtful interactions. He is naturally curious, and perpetually working on improving his
            skills.
          </p>
        </div>

        <div className="w-full lg:w-1/2 relative md:block hidden blessbox flex justify-center">
          <div className="slider">
            <div className="container">
              <div className="slide x"></div>
              <div className="slide y"></div>
              <div className="slide z"></div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
