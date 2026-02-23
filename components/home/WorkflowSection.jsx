const workflowCards = [
  {
    icon: 'fa-solid fa-magnifying-glass sm:text-5xl text-4xl mb-2',
    title: 'Discover',
    text: 'I conduct user research to identify the problem I want to solve.',
    width: 'w-[13rem]',
  },
  {
    icon: 'fa-solid fa-pen sm:text-5xl text-4xl mb-2',
    title: 'Define',
    text: 'I brainstorm possible design solutions to the identified problem.',
    width: 'w-[13rem]',
  },
  {
    icon: 'fa-solid fa-align-left sm:text-5xl text-4xl mb-2',
    title: 'Ideate',
    text: 'I create wireframes and sketches of the product I’m about to design..',
    width: 'w-[13rem]',
  },
  {
    icon: 'fa-solid fa-compass-drafting sm:text-5xl text-4xl mb-2',
    title: 'Prototype',
    text: 'I create high fidelity design and prototype the screens.',
    width: 'w-[13rem]',
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench sm:text-5xl text-4xl mb-2',
    title: 'Implement',
    text: 'After designing, I deliver for implementation.',
    width: 'w-[14rem]',
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-12 sm:px-28 min-h-[55vh] flex flex-col items-center">
      <h1 className="w-full font-bold text-[#64ffda90] sm:text-5xl text-4xl sm:text-left text-center px-6">
        WorkFlow _ <i className="fa-solid fa-briefcase"></i>
      </h1>

      <div className="deck w-full sm:py-16 py-8 px-2 text-[#8892b0cb] flex flex-row flex-wrap justify-center">
        {workflowCards.map((card) => (
          <div
            key={card.title}
            className={`card ease-in-out duration-300 hover:-translate-y-4 border border-[#64ffda] rounded-[12px] ${card.width} px-6 py-8 hover:border-none hover:bg-[#8892b00c] mx-3 my-6 z-10`}
          >
            <i className={card.icon}></i>
            <h6 className="text-3xl sm:text-4xl font-bold">{card.title}</h6>
            <p className="smooth-italic sm:mt-2 cursor-pointer text-base hover:text-[#64ffda] text-[#8892b0cb] py-2">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
