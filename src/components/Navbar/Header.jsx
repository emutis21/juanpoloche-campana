import '../../styles/Navigation.scss'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    if (latest > prev && latest > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        block: { y: 0 },
        none: { y: '-100%' }
      }}
      animate={hidden ? 'none' : 'block'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className='w-full block sticky top-0 md:bg-first-900/80 md:backdrop-blur-sm z-40'
    >
      <Navbar />
      <div className='w-full bg-first-900/90 backdrop-blur-sm h-[4rem] relative top-0 left-0 z-[-1] block md:hidden'></div>
    </motion.header>
  )
}

export default Header
