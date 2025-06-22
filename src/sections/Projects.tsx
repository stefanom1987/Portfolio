import Image from "next/image";
import { Card } from "../components/Card";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Project1 from "../assets/images/Pollution.png";
import Project2 from "../assets/images/Youtube.png";

const portfolioProjects = [
  {
    year: "2025",
    title: "Pollution Monitoring",
    results: [
      { title: "Monitora il livello di inquinamento" },
      { title: "Utilizzo API di GlobalWarming" },
      { title: "Utilizzo di NextJS e TailwindCSS" },
    ],
    link: "https://stefanowork-pollution.vercel.app/",
    image: Project1,
  },
  {
    year: "2025",
    title: "Youtube Clone",
    results: [
      { title: "Clone di Youtube con funzionalità avanzate" },
      { title: "Interfaccia utente reattiva e intuitiva" },
      { title: "Integrazione con RapidAPI di YouTube" },
    ],
    link: "https://stefanowork-youtube.vercel.app/",
    image: Project2,
  },
];

export const ProjectsSection = () => {
  return (
    <section
      className='pb-16 lg:py-24'
      id='progetti'
    >
      <div className='container'>
        <div className='flex justify-center'>
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent'>
            Featured Projects
          </p>
        </div>
        <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>
          Siti Web realizzati
        </h2>
        <p className='text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto'>
          Guarda come ho trasformato questi siti web
        </p>
        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className='px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className='lg:grid lg:grid-cols-2 gap-16'>
                <div className='lg:pb-16'>
                  <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='font-serif text-2xl mt-2 md:mt-5 md:text-4xl'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className='flex gap-2 text-sm md:text-base text-white/50'
                      >
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                      <span>Visita Sito</span>
                      <ArrowUpRightIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
