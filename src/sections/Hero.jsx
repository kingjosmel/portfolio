import heroImage from '../assests/images/heroImage.jpeg.jpeg';
import Button from "../components/Button.jsx";
const Hero = () => {
  return <section>
    {/*grid system*/}
    <div className='grid md:grid-cols-12 md:h-screen md:items-stretch'>
      <div className='md:col-span-7 flex flex-col justify-center'>
        <div className='container !max-w-full'>
          <h1 className='text-5xl md:text-6xl mt-40 md:mt-0 lg:text-7xl'>
            Crafting digital experience through code and creative design
          </h1>

          {/*div for the buttons*/}

          <div className={'flex flex-col mt-10 items-start gap-6 md:flex-row md:items-center'}>
            <Button
                variant="secondary"
                iconAfter={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                  </svg>
                }

            >
              <span> <a href={'#projects'} >View my work</a> </span>
            </Button>

            <Button variant='text'> <a href={'#footer'} >Let&apos;s talk</a> </Button>
          </div>

        </div>
      </div>

      <div className='md:col-span-5'>
          {/*  div for the image */}
          <div className='mt-20 md:mt-0 md:h-full'>
            <img src={heroImage} alt="heroImage"
            className='size-full object-cover'
            />
          </div>

      </div>



    </div>
  </section>;
};

export default Hero;
