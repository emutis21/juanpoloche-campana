import useScrollActive from '../../hooks/useScrollActive.jsx'

function NavList({ activeLink, closeSidebar }) {
  useScrollActive()
  const navItems = [
    { label: 'Inicio', href: '/#inicio', key: 'inicio' },
    {
      label: 'Mi Trayectoria',
      href: '/#mi-trayectoria',
      key: 'mi-trayectoria'
    },
    { label: 'Propuestas', href: '/#propuestas', key: 'propuestas' },
    {
      label: 'Mi Equipo',
      href: '/#mi-equipo-de-trabajo',
      key: 'mi-equipo-de-trabajo'
    },
    { label: 'Contacto', href: '/#contacto', key: 'contacto' }
  ]

  return (
    <div
      className='navLinks w-full h-full md:w-fit md:h-fit py-5 md:p-0 border-t-4
      md:border-t-0 border-b-4 md:border-b-0 border-first-800 md:border-transparent'
    >
      <ul
        className='flex flex-col md:flex-row text-xl font-normal
        md:items-center md:[&>li>a]:font-semibold md:[&>li>a]:inline-block md:[&>li>a]:uppercase md:[&>li>a]:px-4 md:[&>li>a]:text-[0.8rem]
      '
      >
        {navItems.map((item) => (
          <li key={item.key} className='w-full flex md:w-fit'>
            <a
              className={`${activeLink === item.key ? 'active-link' : ''} ${
                activeLink !== item.key ? 'md:active:bg-transparent' : ''
              } active:bg-first-900 w-full py-2 transition-all active:px-2 md:active:px-[0.9rem] md:py-[0.2rem]`}
              href={item.href}
              onClick={closeSidebar}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavList
