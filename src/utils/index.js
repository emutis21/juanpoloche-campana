const sections = document.querySelectorAll('section[id]')
const navbarHeight = document.querySelector('.navbar').offsetHeight

document.documentElement.style.setProperty(
  '--scroll-padding-top',
  `${navbarHeight - 1}px`
)

function scrollActive() {
  const scrollY = window.pageYOffset
  const currentPath = window.location.pathname

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
    const link = document.querySelector(`ul a[href="/#${sectionId}"]`)

    if (currentPath === '/propuestas' && sectionId === 'propuestas') {
      link.classList.add('active-link')
    } else if (
      currentPath === '/' &&
      scrollY >= sectionTop &&
      scrollY < sectionTop + offsetHeight
    ) {
      link.classList.add('active-link')
    } else {
      link.classList.remove('active-link')
    }
  })
}

window.addEventListener('load', scrollActive)
window.addEventListener('scroll', scrollActive)

