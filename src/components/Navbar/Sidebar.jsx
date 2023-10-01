import { useEffect, useRef } from 'react'

import { Close, Open } from '../Icons/OpenClose'
import { Facebook } from '../Icons/Facebook'
import { Instagram } from '../Icons/Instagram'
import { Whatsapp } from '../Icons/Whatsapp'
import { motion } from 'framer-motion'

import { useDimensions } from '@hooks/useDimensions'
import NavList from './NavList'

const Sidebar = ({
  handleOutsideClick,
  showSidebar,
  setShowSidebar,
  closeSidebar
}) => {
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  useEffect(() => {
    showSidebar && document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [showSidebar])

  return (
    <div className='flex-grow basis-0 md:hidden flex justify-end relative z-40'>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className='cursor-pointer flex bg-third-200/20 rounded w-10'
        aria-label='Abrir menú'
      >
        <Open />
      </button>
      <motion.div
        initial={false}
        animate={showSidebar ? { translateX: '0%' } : { translateX: '100%' }}
        transition={{ duration: showSidebar ? 0 : 0.5 }}
        onClick={handleOutsideClick}
        custom={height}
        ref={containerRef}
        className={`top-0 right-0 w-full flex justify-end fixed h-[100dvh] z-50 ease-in-out`}
      >
        <motion.div
          initial={{ translateX: '100%', backdropBlur: 0, opacity: 0 }}
          animate={{
            translateX: showSidebar ? '0%' : '100%',
            backdropBlur: showSidebar ? 1 : 0,
            opacity: showSidebar ? 1 : 0
          }}
          transition={{ duration: 0 }}
          className={`top-0 right-0 w-full fixed bg-zinc-800/[0.56] backdrop-blur-[2px] h-full ease-in-out`}
        />

        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: showSidebar ? '0%' : '100%' }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
          className={`mobile overflow-auto flex flex-col gap-2 justify-between w-[16.5rem] right-0 h-full p-5 bg-first-700 duration-500`}
        >
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-semibold text-third-200'>Menú</h3>
            <div className='cursor-pointer w-[15%] self-start '>
              <Close
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                color='bg-[hsl(20,100%,44%)]'
              />
            </div>
          </div>
          <NavList closeSidebar={closeSidebar} />
          <div className='flex content-between h-[1.725rem]'>
            <a
              target='_blank'
              href='https://www.facebook.com/profile.php?id=100094611160568'
              className='flex-1 p-0'
              aria-label='Facebook'
            >
              <Facebook />
            </a>
            <a
              target='_blank'
              href='https://www.instagram.com/juanpolocheq/'
              className='flex-1 p-0'
              aria-label='Instagram'
            >
              <Instagram />
            </a>
            <a
              target='_blank'
              href='https://wa.me/573107789368?text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20sobre%20tus%20propuestas%20para%20Usaqu%C3%A9n.%20Estoy%20interesado/a%20en%20apoyar%20iniciativas%20positivas.%20%C2%BFPuedes%20compartir%20m%C3%A1s%20detalles?'
              className='flex-1 p-0'
              aria-label='Whatsapp'
            >
              <Whatsapp />
            </a>
          </div>
        </motion.aside>
      </motion.div>
    </div>
  )
}

export default Sidebar
