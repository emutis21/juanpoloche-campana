import '@styles/Navigation.scss'

import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='w-full sticky top-0 md:bg-first-900/80 md:backdrop-blur-sm z-40'>
      <Navbar />
      <div className='w-full bg-first-900/90 backdrop-blur-sm h-[4rem] relative top-0 left-0 z-[-1] block md:hidden'></div>
    </header>
  )
}

export default Header
