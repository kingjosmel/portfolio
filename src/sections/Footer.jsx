import Button from "../components/Button.jsx";

const Footer= () => {
  return (
  <footer className={'section h-screen bg-black text-white'} id={'footer'}>
    <div className={'container grid md:grid-cols-12'}>

    {/*grid system*/}
    <div className={'md:col-span-8 lg:col-span-5'}>

      <div className={'flex gap-4 items-center'}>
        <div className={'w-3 h-3 bg-green-500 rounded-full '}></div>
        <p className={' tracking-wide text-xl font-light'}>one spot available for next month</p>
      </div>

    <h2 className={'text-4xl mb-6 font-light md:text-7xl lg:text-7xl lg:leading-23'}>Enough talk. let&apos;s make something great together.</h2>
    <Button variant={'secondary'} className={'md:mt-6'} iconAfter={<svg xmlns="http://www.w3.org/2000/svg"
                                                                             fill="none" viewBox="0 0 24 24"
                                                                             strokeWidth="1.5"
                                                                             stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
    </svg>}
            onClick={() =>
                (window.location = 'mailto:josmeleph@gmail.com?subject=Hello&body=I am reaching out!')
            }
    >

      josmeleph@gmail.com
      <span>

</span>
    </Button>
    </div>

      <div className={'py-11 md:col-span-4 lg:col-span-7 md:text-right'}>
        <ul className={''}>
          <li className={'py-3'}>HOME</li>
          <li className={'py-3'}>PROJECTS</li>
          <li className={'py-3'}>TESTIMONIALS</li>
          <li className={'py-3'}>FAQS</li>
        <li className={'py-3'}>CONTACT</li>
      </ul>
    </div>

    </div>
  </footer>

      );
};

export default Footer;
