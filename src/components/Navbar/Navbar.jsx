import { Whatsapp } from '../Icons/Whatsapp.jsx'
import NavList from './NavList.jsx'
import NavigationList from './Sidebar.jsx'

function Navbar() {

  return (
    <nav className='navbar w-full py-3 px-5 md:px-0 md:w-[90%] md:max-w-[95%] mx-auto flex justify-between h-[4rem] md:h-[3.5rem] absolute md:relative'>
      <div className='flex-grow basis-0 h-full flex'>
        <a
          href='/#inicio'
          className='flex gap-3 w-full h-full hover:scale-x-[1.01] transition-all duration-75'
        >
          <img
            src='/imgs/test-3.webp'
            alt='Logo Juan Poloche'
            loading='lazy'
            className='w-[10rem] h-[2.5rem] md:h-[2rem] object-contain bg-white rounded-md'
          />
        </a>
      </div>
      <NavList />
      <div className='hidden justify-end flex-grow basis-0 md:flex'>
        <button className='text-[0.8rem] flex gap-2 px-4 py-1 items-center font-medium bg-transparent border border-[hsl(25,97%,49%)] rounded-md hover:font-semibold hover:rounded-md hover:bg-[hsl(25,97%,49%)] transition-all duration-300'>
          Únete
          <Whatsapp />
        </button>
      </div>
      <NavigationList />
    </nav>
  )
}

export default Navbar
