window.addEventListener('load', () => {
  const imagesToPreload = [
    '/imgs/slider/bg-1.webp',
    '/imgs/slider/bg-1-mobile.webp',
    '/imgs/slider/bg-2.webp',
    '/imgs/slider/bg-2-mobile.webp',
    '/imgs/slider/bg-3-jennifer.webp',
    '/imgs/slider/bg-3-jennifer-mobile.webp',
    '/imgs/slider/bg-4.webp',
    '/imgs/slider/bg-4-mobile.webp',
    '/imgs/votaciones-juan.webp',
    '/imgs/votaciones-liliana.webp',
    '/imgs/logo-liliana.webp',
    '/imgs/logo-jennifer-pedraza.png',
    '/imgs/primero-la-gente.webp',
    '/imgs/vamosxmas.webp'
  ]

  imagesToPreload.forEach((imageUrl) => {
    const image = new Image()
    image.src = imageUrl
  })
})
