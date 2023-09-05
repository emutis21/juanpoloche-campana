import '../../styles/Navigation.scss'

import { motion } from 'framer-motion'

import Navbar from './Navbar'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.01 }}
      className='w-full sticky top-0 md:bg-first-900/80 md:backdrop-blur-sm z-40'
    >
      <Navbar />
      <div className='w-full bg-first-900/90 backdrop-blur-sm h-[4rem] relative top-0 left-0 z-[-1] block md:hidden'></div>
    </motion.header>
  )
}

export default Header
