import image1 from '../assests/images/testimonial-1.jpg';
import image2 from '../assests/images/testimonial-2.jpg';
import image3 from '../assests/images/testimonial-3.jpg';

/* eslint-disable-next-line no-unused-vars */
const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Melvin's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Melvin transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Melvin brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials = () => {
  const testimonialIndex = 0;
  return (
  <section className={'section'}>
    <h2 className={'text-4xl flex flex-col overflow-hidden md:text-7xl lg:text-8xl'}>
      <span className={'whitespace-nowrap'}>some nice words from my past clients </span>
      <span className={'whitespace-nowrap self-end text-orange-500'}>some nice words from my past clients </span>
    </h2>
    <div className={'container'}>
    {/*  testimonials array*/}
      <div className={'mt-20'}>
        {testimonials.map((testimonial,index) => index ===  testimonialIndex && (
            <div key={testimonial.name} className={'grid md:grid-cols-5 md:gap-8 md:items-center lg:gap-16'}>

              {/*image div*/}
              <div className={'aspect-square md:aspect-[9/16] md:col-span-2'}>
                <img src={testimonial.image} alt={testimonial.name} className={'size-full object-cover'}
                style={{
                  objectPosition: `50% ${testimonial.imagePositionY * 100}%`,
                }}
                />
              </div>

            {/*  quotes*/}
              <blockquote className={'md:col-span-3'}>
                <div className={'text-3xl mt-8 md:text-5xl md:mt-0 lg:text-6xl'}>
                  <span>&ldquo;</span>
                  <span>
                    {testimonial.quote}
                  </span>
                  <span>&rdquo;</span>
                </div>
                <cite className={'mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl'}>
                  {testimonial.name}, {testimonial.role} at {testimonial.company}
                </cite>
              </blockquote>

            </div>
        ))}
      </div>

      {/*button div*/}
      <div className={'flex gap-4 mt-6 lg:mt-10'}>
        <button className={'border border-stone-400 size-11 inline-flex items-center justify-center rounded-full'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
          </svg>

        </button>
        <button className={'border border-stone-400 size-11 inline-flex items-center justify-center rounded-full'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
          </svg>

        </button>
      </div>
    </div>
  </section>
  );
};

export default Testimonials;
