'use client';

import { useMemo, useState } from 'react';

export default function MainNav({ projectPage = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = useMemo(() => {
    if (projectPage) {
      return {
        about: '/#AboutMe',
        skills: '/#Skills',
        contact: '/#Contact',
        resumeClass:
          'sm:block hidden navlink text-[#64ffda] text-xl border border-[#64ffda] rounded-[4px] py-1 px-4 hover:text-[#8892b0cb] hover:border-[#8892b0cb]',
      };
    }

    return {
      about: '#AboutMe',
      skills: '#Skills',
      contact: '#Contact',
      resumeClass:
        'sm:block hidden navlink text-[#64ffda] text-lg border border-[#64ffda] rounded-[100px] py-1 px-4 hover:text-[#8892b0cb] hover:border-[#8892b0cb]',
    };
  }, [projectPage]);

  return (
    <section>
      <div
        id="leftmenu"
        className={`w-1/2 bg-black fixed left-0 top-[64px] h-screen ${menuOpen ? 'leftshow' : 'lefthide'}`}
      >
        <ul className="py-10">
          <li className="text-lg text-white py-4 pl-5 hover:text-[#64ffda]">
            <a href={links.about}>AboutMe</a>
          </li>
          <li className="text-lg text-white py-4 pl-5 hover:text-[#64ffda]">
            <a href={links.skills}>Skills</a>
          </li>
          <li className="text-lg text-white py-4 pl-5 hover:text-[#64ffda]">
            <a href={links.contact}>ContactMe</a>
          </li>
          <li className="text-lg text-white py-4 pl-5 hover:text-[#64ffda]">
            <a href="">Resume</a>
          </li>
        </ul>
      </div>

      <div style={{ zIndex: 999 }} className="fixed top-0 w-full">
        <nav
          style={{ zIndex: 9999 }}
          className="bg-black sm:bg-[#00000035] h-[65px] ease-in-out duration-900 hover:bg-black sm:px-1 md:px-16 py-3"
        >
          <ul className="flex flex-row justify-between">
            <i
              id="logo"
              className="fixed top-3 left-6 fa-brands fa-connectdevelop rotate text-5xl text-[#64ffda] z-100 rotate"
            ></i>

            <div className="for-Balancing-navbar"></div>

            <li className="flex items-center md:space-x-16 sm:space-x-12 opacity-75">
              <a
                href={links.about}
                className="items-center sm:block text-xl hidden navlink text-[#64ffda] hover:text-[#8892b0cb]"
              >
                AboutMe
              </a>
              <a
                href={links.skills}
                className="sm:block text-xl hidden navlink text-[#64ffda] hover:text-[#8892b0cb]"
              >
                Skills
              </a>
              <a
                href={links.contact}
                className="sm:block hidden text-xl navlink text-[#64ffda] hover:text-[#8892b0cb]"
              >
                ContactMe
              </a>
              <a href="" className={links.resumeClass} download>
                Resume
              </a>

              <button
                id="menubtn"
                type="button"
                className={`sm:hidden block navlink text-[#64ffda] font-semibold sm:text-lg text-xs mr-4 ${menuOpen ? 'change' : ''}`}
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
