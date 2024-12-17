import image1 from '../assests/images/project-1.jpg'
import image2 from '../assests/images/project-2.jpg'
import image3 from '../assests/images/project-3.jpg'
import image4 from '../assests/images/project-4.jpg'
import image5 from '../assests/images/project-5.jpg'

/* eslint-disable-next-line no-unused-vars */
const projects = [
  {
    name: "Artisan Brew Co.",
    image: image1,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
  {
    name: "Bloom Botanicals",
    image: image5,
  },
];

const Projects = () => {
  return <section className={'section'}>
    <div className={'container'}>
      <h2 className={'text-4xl md:text-7xl lg:text-8xl'}>Selected works</h2>

    {/*  projects div */}
      <div className='mt-10 md:mt-16 lg:mt-20'>
        {projects.map((project) => (
          <a href='#' key={project.name} className={'border-t border-stone-500 py-6 md:py-8 lg:py-10 border-dotted flex flex-col last:border-b'}>
            <div>
              <div className={'aspect-video md:hidden'}>
                <img src={project.image} alt={project.name} className={'size-full object-cover'} />
              </div>
              <div className={'flex justify-between items-center mt-8 md:mt-0'}>
                <h3 className={'text-2xl md:text-3xl lg:text-4xl'}>{project.name}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                </svg>

              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>;
};

export default Projects;
