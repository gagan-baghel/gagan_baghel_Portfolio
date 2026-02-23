export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex justify-center items-center overflow-hidden">
      <div className="mover sm:block hidden overflow-hidden">
        <a className="mitem m1 z-20" id="m1" href="">
          <i className="fa-solid fa-code"></i>
        </a>
        <a className="mitem m2 z-20" id="m2" href="">
          <i className="fa-solid fa-terminal"></i>
        </a>
        <a className="mitem m3 z-20" id="m3" href="">
          <i className="fa-solid fa-bug"></i>
        </a>

        <a className="mitemo m4 z-20" href="">
          <i className="fa-solid fa-code"></i>
        </a>
        <a className="mitemo m5 z-20" href="">
          <i className="fa-solid fa-terminal"></i>
        </a>
        <a className="mitemo m6 z-20" href="">
          <i className="fa-solid fa-bug"></i>
        </a>

        <a className="mitemo2 m7 z-20" href="">
          <i className="fa-solid fa-code"></i>
        </a>
        <a className="mitemo2 m8 z-20" href="">
          <i className="fa-solid fa-terminal"></i>
        </a>
        <a className="mitemo2 m9 z-20" href="">
          <i className="fa-solid fa-bug"></i>
        </a>
        <a className="mitemo2 m10 z-20" href="">
          <i className="fa-solid fa-bug"></i>
        </a>
      </div>

      <div className="absolute sm:h-[50vh] sm:w-1/4 w-1/2 h-1/2 bg-[#000000] top-0 right-0 rounded-bl-[240px]"></div>

      <div className="sm:absolute sm:top-[30%] sm:left-[15%] md:right-[15%] lg:right-[25%] text-white px-6 sm:px-0">
        <p className="leading-[50px] text-[#64ffda] p1 typewritter-text">Hello my name is _</p>
        <div className="name cursor-pointer">
          <h2 className="leading-[50px] ease-in-out text-[35px] sm:text-[50px] md:text-[70px] duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] font-[700]">
            G
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            a
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            g
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            a
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            n
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            B
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            a
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            g
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            h
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            e
          </h2>
          <h2 className="leading-[50px] ease-in-out duration-300 hover:scale-y-[0.6] hover:scale-x-[1.2] inline-block hover:text-[#64ffda] text-[35px] sm:text-[50px] md:text-[70px] font-[700]">
            l
          </h2>
        </div>
        <h3 className="z-20 leading-[30px] sm:leading-[50px] md:leading-[70px] lg:leading-[80px] text-[30px] sm:text-[40px] md:text-[60px] font-[700] py-2 sm:py-0 subhead">
          I Design and Create Things For The Web.
        </h3>
        <p className="z-20 leading-[20px] sm:leading-[40px] md:leading-[60px] text-[#64ffda] md:text-[20px] intrest">
          I love everything about the WEB including the spiders who create Them..........
        </p>
      </div>
    </section>
  );
}
