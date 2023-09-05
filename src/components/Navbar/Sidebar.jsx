import { Close, Open } from '../Icons/OpenClose'
import { Facebook } from '../Icons/Facebook'
import { Instagram } from '../Icons/Instagram'
import { Whatsapp } from '../Icons/Whatsapp'
import { motion } from 'framer-motion'

import NavList from './NavList'

const Sidebar = ({
  handleOutsideClick,
  showSidebar,
  setShowSidebar,
  closeSidebar
}) => {
  return (
    <div className='flex-grow basis-0 md:hidden flex justify-end relative z-40'>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className='cursor-pointer flex bg-second-600 rounded w-10'
      >
        <Open />
      </button>
      <motion.div
        className={`top-0 right-0 w-full flex justify-end fixed h-full z-50 ease-in-out`}
        initial={showSidebar ? { translateX: '0%' } : { translateX: '100%' }}
        animate={showSidebar ? { translateX: '0%' } : { translateX: '100%' }}
        onClick={handleOutsideClick}
        transition={{ duration: showSidebar ? 0 : 0.5 }}
      >
        <motion.div
          className={`top-0 right-0 w-full fixed bg-zinc-800/[0.56] h-full ease-in-out`}
          initial={{ translateX: '100%', backdropBlur: 0, opacity: 0 }}
          animate={{
            translateX: showSidebar ? '0%' : '100%',
            backdropBlur: showSidebar ? 1 : 0,
            opacity: showSidebar ? 1 : 0
          }}
          transition={{ duration: 0 }}
        ></motion.div>

        <motion.aside
          className={`mobile overflow-auto flex flex-col gap-2 justify-between w-[16.5rem] right-0 h-full p-5 bg-first-700 duration-500`}
          initial={{ x: '100%' }}
          animate={{ x: showSidebar ? '0%' : '100%' }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
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
        </motion.aside>
      </motion.div>
    </div>
  )
}

export default Sidebar
