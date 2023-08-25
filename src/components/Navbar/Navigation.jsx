import { useEffect, useState } from 'react'
import { Close, Open } from '../Icons/OpenClose'
import { Facebook } from '../Icons/Facebook'
import { Instagram } from '../Icons/Instagram'
import { Whatsapp } from '../Icons/Whatsapp'

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const handleOutsideClick = (event) => {
    if (showSidebar && !event.target.closest('.flex.flex-col')) {
      setShowSidebar(false)
    }
  }

  const closeSidebar = () => {
    setShowSidebar(false)
  }

  useEffect(() => {
    showSidebar && document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [showSidebar])

  const sections = document.querySelectorAll('section[id]')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 126
        const sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='flex-grow basis-0 flex justify-end'>
      <Open showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`top-0 right-0 w-full flex justify-end fixed h-full z-40 ease-in-out ${
          showSidebar
            ? 'translate-x-0 duration-0'
            : 'translate-x-full duration-500'
        }`}
        onClick={handleOutsideClick}
      >
        <div
          className={`top-0 right-0 w-full fixed bg-zinc-800/[0.56] backdrop-blur-[1px] h-full ease-in-out ${
            showSidebar
              ? 'translate-x-0 duration-0'
              : 'translate-x-full duration-0 backdrop-blur-0 bg-transparent'
          }`}
        ></div>
        <aside
          className={`overflow-auto flex flex-col z-40 gap-2 justify-between w-[16.5rem] right-0 h-full p-5 bg-first-700 duration-500 ${
            showSidebar ? 'translate-x-0 ' : 'translate-x-full'
          }`}
        >
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-semibold text-second-500'>Menú</h3>
            <div className='cursor-pointer w-[15%] self-start '>
              <Close
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                color='bg-[hsl(20,100%,44%)]'
              />
            </div>
          </div>
          <div className='text-xl h-full py-5 text-white border-t-4 border-b-4 border-first-800'>
            <ul className='flex flex-col text-md [&>li>a]:font-normal [&>li>a]:inline-block [&>li>a]:w-full [&>li>a]:py-2'>
              <li>
                <a
                  className={`${
                    activeLink === 'inicio' ? 'active-link' : ''
                  } active:bg-first-950 active:text-first-200 transition-all active:px-2`}
                  href='/#inicio'
                  onClick={closeSidebar}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className={`${
                    activeLink === 'mi-trayectoria' ? 'active-link' : ''
                  } active:bg-first-950 active:text-first-200 transition-all active:px-2`}
                  href='/#mi-trayectoria'
                  onClick={closeSidebar}
                >
                  Mi Trayectoria
                </a>
              </li>
              <li>
                <a
                  className={`${
                    activeLink === 'propuestas' ? 'active-link' : ''
                  } active:bg-first-950 active:text-first-200 transition-all active:px-2`}
                  href='/#propuestas'
                  onClick={closeSidebar}
                >
                  Propuestas
                </a>
              </li>
              <li>
                <a
                  className={`${
                    activeLink === 'mi-equipo-de-trabajo' ? 'active-link' : ''
                  } active:bg-first-950 active:text-first-200 transition-all active:px-2`}
                  href='/#mi-equipo-de-trabajo'
                  onClick={closeSidebar}
                >
                  Mi Equipo
                </a>
              </li>
              <li>
                <a
                  className={`${
                    activeLink === 'contacto' ? 'active-link' : ''
                  } active:bg-first-950 active:text-first-200 transition-all active:px-2`}
                  href='/#contacto'
                  onClick={closeSidebar}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className='flex content-between h-[1.725rem]'>
            <a
              href='https://www.facebook.com/profile.php?id=100094611160568'
              className='flex-1 p-0'
              aria-label='Facebook'
            >
              <Facebook />
            </a>
            <a
              href='https://www.instagram.com/juanpolocheq/'
              className='flex-1 p-0'
              aria-label='Instagram'
            >
              <Instagram />
            </a>
            <a href='#' className='flex-1 p-0' aria-label='Whatsapp'>
              <Whatsapp />
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Navigation
