export default function HomeFooter() {
  return (
    <footer className="bg-[#8892b0]">
      <div className="sm:fixed bottom-[8%] left-0 text-center px-6 text-2xl">
        <div className="flex sm:flex-col flex-row sm:space-y-2 sm:text-[#8892b0] text-black justify-center items-center space-x-5 sm:space-x-0 sm:pt-0 pt-3">
          <a className="ease-in-out duration-300 hover:-translate-y-2" href="https://github.com/gagan-baghel">
            <i className="fa-brands fa-github hover:text-[#64ffda]"></i>
          </a>
          <a className="ease-in-out duration-300 hover:-translate-y-2" href="https://www.facebook.com/profile.php?id=100010154055321">
            <i className="fa-brands fa-facebook-f hover:text-[#64ffda]"></i>
          </a>
          <a className="ease-in-out duration-300 hover:-translate-y-2" href="https://www.instagram.com/gagansinghbaghel15/?next=%2F">
            <i className="fa-brands fa-instagram hover:text-[#64ffda]"></i>
          </a>
          <a className="ease-in-out duration-300 hover:-translate-y-2" href="https://www.linkedin.com/in/gagan-singh-baghel-0a894220b/">
            <i className="fa-brands fa-linkedin hover:text-[#64ffda]"></i>
          </a>
        </div>
        <div className="sm:flex justify-center pt-6 hidden">
          <div className="h-48 w-[1px] bg-[#8892b0]"></div>
        </div>
      </div>

      <hr className="mx-8 my-2 text-[#8892b0] sm:hidden block" />
      <p className="text-center pb-4 sm:py-2 typewritter-text sm:text-sm text-xs">Copyright © 2022 Gagan Baghel</p>
    </footer>
  );
}
