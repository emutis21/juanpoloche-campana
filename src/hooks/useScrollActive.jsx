import { useEffect } from 'react'

function useScrollActive() {
  const handleScrollActive = () => {
    const scrollY = window.scrollY
    const sections = document.querySelectorAll('section[id]')
    const navbarHeight = document.querySelector('.navbar').offsetHeight

    document.documentElement.style.setProperty(
      '--scroll-padding-top',
      `${navbarHeight - 1}px`
    )

    sections.forEach((current) => {
      const { offsetHeight, offsetTop } = current
      const sectionTop =
        offsetTop -
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--scroll-padding-top'
          )
        ) -
        1
      const sectionId = current.getAttribute('id')
      const link = document.querySelector(
        `.navLinks ul li a[href="/#${sectionId}"]`
      )

      if (scrollY >= sectionTop && scrollY < sectionTop + offsetHeight) {
        link.classList.add('active-link')
      } else {
        link.classList.remove('active-link')
      }
    })

    const activeLink =
      document.querySelector('.active-link') ||
      document.querySelector('ul li.active-link a')
    if (activeLink) {
      activeLink.classList.add('active-link')
    }
  }

  useEffect(() => {
    handleScrollActive()

    window.addEventListener('load', handleScrollActive)
    window.addEventListener('scroll', handleScrollActive)

    return () => {
      window.removeEventListener('load', handleScrollActive)
      window.removeEventListener('scroll', handleScrollActive)
    }
  }, [])
}

export default useScrollActive
