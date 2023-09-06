import * as React from 'react'
import { motion, useCycle } from 'framer-motion'

// Función para MenuToggle
const MenuToggle = ({ toggle }) => <button onClick={toggle}>x</button>

// Función para Navigation
const Navigation = (toggle) => (
  <motion.ul>
    <button onClick={toggle}>LISTA</button>
  </motion.ul>
)

// Función para useDimensions
// la cual nos permite obtener las dimensiones de el elemento que le pasemos
// este va a ser el contenedor de nuestro sidebar
const useDimensions = (ref) => {
  const dimensions = React.useRef({ width: 0, height: 0 })

  React.useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  }, [])

  return dimensions.current
}

// Componente Example
const variables = {
  open: {
    x: 0,
    transition: {
      type: 'linear',
      stiffness: 20,
      restDelta: 2
    }
  },
  closed: {
    x: -300,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = React.useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className='background' variants={variables} />
      <Navigation toggle={toggleOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
