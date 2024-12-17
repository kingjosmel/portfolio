import Button from "../components/Button.jsx";
/* eslint-disable-next-line no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  return <div>
    <header className='fixed top-0 left-0 w-full backdrop-blur-md'>
      <div className="container !max-w-full">
        {/*container for logo and nav*/}
        <div className='flex justify-between items-center h-20'>
          {/*right side*/}
          <div>
            <a href='/'>
              <span className='text-xl font-bold uppercase'>
                Melvin&nbsp; Joseph
              </span>
            </a>
          </div>
          {/*left side, logo*/}
          <div className='flex items-center gap-4'>
            {/*div for the boder*/}
            <div className='size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="15" width="18" height="2" fill="currentColor"/>
                <rect x="3" y="7" width="18" height="2" fill="currentColor"/>
              </svg>
            </div>
          {/*  contact button*/}
            <Button variant='primary' className='bg-orange-500 h-11 px-6 rounded-xl text-white border border-orange-500
            uppercase hidden md:inline-flex'>
              contact Me
            </Button>
          </div>

        </div>
      </div>
    </header>
  </div>;
};

export default Header;
