import Link from 'next/link';

export default function ProjectsCtaSection() {
  return (
    <section className="py-12 px-14">
      <Link href="/project">
        <h1 className="sm:text-6xl text-4xl underline font-bold text-[#8892b0] pb-12 text-center hover:text-[#64ffda]">
          <i className="fa-solid fa-link"></i> My Projects <i className="fa-solid fa-caret-right"></i>
        </h1>
      </Link>
    </section>
  );
}
