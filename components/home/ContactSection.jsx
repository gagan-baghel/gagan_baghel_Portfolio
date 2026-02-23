export default function ContactSection() {
  return (
    <section id="Contact" className="relative py-12 flex justify-center items-center sm:px-28 sm:pb-36 pb-8">
      <div className="sm:bg-black bg-[#00000040] sm:w-1/4 w-1/2 absolute -top-64 bottom-0 left-0 rounded-tr-[240px]"></div>

      <div className="w-full lg:flex-row flex-col flex z-10">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <form
            action="https://formsubmit.co/8dceccfc7d1a6ea003ce596aa34236d6"
            method="POST"
            className="mx-2 w-full max-w-lg border-black bg-[#11111A] rounded-md px-8 py-10 sm:py-14"
            style={{ boxShadow: '0 12px 765px 0 rgba(31, 38, 135, 0.37)' }}
          >
            <h1 className="text-[#8892B0] text-center md:text-4xl text-3xl py-6 pb-10 smooth-italic">
              Post a Mail {'\u00a0'} <i className="fa-solid fa-envelope hover:text-[#64ffda]"></i>
            </h1>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-1/2 px-3 pb-2">
                <input
                  className="h-12 appearance-none block w-full text-[#64ffda] border border-[#8892B030] py-2 px-4 leading-tight focus:outline-none focus:bg-[#64ffda20]"
                  id="grid-first-name"
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full lg:w-1/2 px-3 py-2 lg:pt-0">
                <input
                  className="h-12 appearance-none block w-full text-[#64ffda] border border-[#8892B030] py-3 px-4 leading-tight focus:outline-none focus:bg-[#64ffda20]"
                  id="grid-last-name"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                />
              </div>
              <div className="w-full px-3 py-2">
                <input
                  className="h-12 appearance-none block w-full text-[#64ffda] border border-[#8892B030] py-2 px-4 leading-tight focus:outline-none focus:bg-[#64ffda20]"
                  id="grid-last-name"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 py-2">
                <textarea
                  className="h-48 resize-none appearance-none block w-full text-[#64ffda] border border-[#8892B030] py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#64ffda20] focus:border-gray-500"
                  id="grid-password"
                  name="user_msg"
                  placeholder="Message"
                ></textarea>
                <input type="hidden" name="_next" value="https://gagan-baghel.github.io/gagan_baghel_Portfolio/#Contact" />
              </div>
            </div>
            <div className="flex w-full justify-end">
              <button
                id="contactBtn"
                className="opacity-80 border-[1px] text-xs text-[#64ffda] border-[#64ffda] hover:text-[#8892B0] hover:border-[#8892b088] py-3 my-3 px-4"
              >
                Send your Message
              </button>
            </div>
          </form>
        </div>

        <div className="lg:w-1/2 w-full p-12 flex justify-center items-center">
          <div className="w-full">
            <div className="flex flex-row justify-center items-center">
              <div className="w-[200px] h-[200px] lg:m-4 m-1 flex justify-center items-center rounded-full icon">
                <a href="https://github.com/gagan-baghel">
                  <i className="fa-brands fa-github text-[#64ffda] text-5xl sm:text-7xl"></i>
                </a>
              </div>
              <div className="w-[200px] h-[200px] lg:m-4 m-1 flex justify-center items-center rounded-full icon">
                <a href="mailto:gaganbaghelofficial@gmail.com">
                  <i className="fa-solid fa-envelopes-bulk text-[#64ffda] text-5xl sm:text-7xl"></i>
                </a>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div className="w-[200px] h-[200px] lg:m-4 m-1 flex justify-center items-center rounded-full icon">
                <a href="https://auth.geeksforgeeks.org/user/gagansinghbaghel15">
                  <i className="text-[#64ffda] text-5xl sm:text-7xl">GFG</i>
                </a>
              </div>
              <div className="w-[200px] h-[200px] lg:m-4 m-1 flex justify-center items-center rounded-full icon">
                <a href="https://www.reddit.com/user/Gagan_Baghel">
                  <i className="fa-brands fa-reddit-alien text-[#64ffda] text-5xl sm:text-7xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
