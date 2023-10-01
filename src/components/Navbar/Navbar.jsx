import { useState } from 'react'
import { Whatsapp } from '../Icons/Whatsapp'
import NavList from './NavList.jsx'
import Sidebar from './Sidebar.jsx'

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleOutsideClick = (event) => {
    if (showSidebar && !event.target.closest('.flex.flex-col')) {
      setShowSidebar(false)
    }
  }

  const closeSidebar = () => {
    setShowSidebar(false)
  }

  return (
    <nav className='navbar w-full py-3 px-5 md:px-0 md:w-[90%] md:max-w-[95%] mx-auto flex justify-between h-[4rem] md:h-[3.5rem] absolute md:relative'>
      <div className='flex-grow basis-0 h-full flex'>
        <a
          href='/#inicio'
          className='flex gap-3 w-fit h-full hover:scale-x-[1.01] transition-all duration-75'
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
        <a
          target='_blank'
          href='https://wa.me/573107789368?text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20sobre%20tus%20propuestas%20para%20Usaqu%C3%A9n.%20Estoy%20interesado/a%20en%20apoyar%20iniciativas%20positivas.%20%C2%BFPuedes%20compartir%20m%C3%A1s%20detalles?'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
          className='text-[0.8rem] text-first-950 flex gap-2 px-3 py-1 items-center font-semibold bg-second-200 border-4 border-second-500 rounded-md hover:rounded-md hover:bg-second-500 transition-all hover:text-white w-24'
        >
          Únete
          <Whatsapp />
        </a>
      </div>
      <Sidebar
        handleOutsideClick={handleOutsideClick}
        closeSidebar={closeSidebar}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </nav>
  )
}

export default Navbar
