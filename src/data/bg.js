export const bg = [
  {
    id: 1,
    description: 'Candidato a edil Usaquén',
    img: '/imgs/slider/bg-1.webp',
    imgMobile: '/imgs/slider/bg-1-mobile.webp',
    sizes: '1/2 pt-8 md:pt-20',
    component: `
      <div class='w-[90%] h-full grid grid-rows-3 place-content-center px-10 md:px-0 mx-auto pt-12 md:pt-20'>
        <picture
          class='img w-fit h-fit grid place-items-center self-center mx-auto'
        >
          <img
            src='/imgs/test-3.webp'
            alt='Logo Juan Poloche'
            loading='lazy'
            class='img w-10/12 md:w-[311px] h-auto object-contain self-center bg-white rounded-md'
          />
        </picture>
        <div class='grid px-3 py-1 pb-2 rounded-md gap-0 place-content-center bg-white border-[3px] self-center mx-auto md:border-4 border-first-800/70 w-12/12 md:w-9/12 h-fit'>
          <h1 class='text-[0.8rem]/3 font-[1000] w-fit mx-auto py-1 md:py-2 sm:text-base/4 md:text-xl/5 lg:text-2xl/6 uppercase text-[#3d0f83] rounded-lg'>
            Candidato a Edil en Usaquén
          </h1>
          <picture class='w-fit'>
            <img src='/imgs/votaciones-juan.webp' alt='Marque así por Juan Poloche' class='w-9/12 mx-auto' />
          </picture>
        </div>
        <span class='flex p-2 rounded-md mx-auto bg-first-950/50 backdrop-blur-lg h-fit pr-3 md:pr-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='w-5 md:w-12 rotate-[270deg] text-third-200 self-center'
            width='100%'
            height='100%'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13'></path>
            <path d='M17 16l4 -4l-4 -4'></path>
          </svg>
          <h2 class='text-[.65rem]/4 font-[600] py-1 md:py-2 whitespace-nowrap sm:text-base/4 md:text-xl/5 lg:text-2xl/7 uppercase text-[#fff]'>
            Vote así a la Jal de <strong class='font-[1000] block'>Usaquén</strong>
          </h2>
        </span>
      </div>
    `
  },
  {
    id: 2,
    description: 'Candidato a edil Usaquén2',
    img: '/imgs/slider/bg-2.webp',
    imgMobile: '/imgs/slider/bg-2-mobile.webp',
    sizes: 'full md:pt-32',
    component: `
      <div class='w-full h-full grid grid-rows-3 place-content-center md:px-0 mx-auto pt-32 gap-10 md:gap-0 md:pt-28'>
        <a
          href='https://www.instagram.com/lilianacastanedam/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram Liliana Castañeda'
          class='img w-fit h-fit grid place-items-center self-center mx-auto pointer-events-auto'
        >
          <img
            src='/imgs/logo-liliana.webp'
            alt='Logo Liliana Castañeda'
            loading='lazy'
            class='img w-9/12 md:w-[311px] h-auto object-contain self-center rounded-md'
          />
        </a>
        <picture class='w-10/12 grid self-center mx-auto rounded-md gap-3 place-content-center bg-white border-[3px] md:border-4 border-first-800/70 md:w-10/12 h-fit'>
          <img src='/imgs/votaciones-liliana.webp' alt='Marque así por Liliana Castañeda' class='w-full' />
        </picture>
        <div class='absolute top-0 left-0 md:static w-full pt-5 text-[.9rem]/4 font-[600] py-1 md:py-2 self-center sm:text-base/4 md:text-xl/5 lg:text-2xl/7 uppercase text-[#fff]'>
          <h1 class='whitespace-nowrap flex flex-col gap-1 md:gap-2 bg-first-950/50 backdrop-blur-lg w-fit mx-auto p-2 rounded-md'>
            Con nuestra fórmula
            <img
              src='/imgs/vamosxmas.webp'
              alt='Logo Juan Poloche'
              loading='lazy'
              class='block w-28 md:w-40 h-auto object-contain self-center rounded-md mx-auto'
            />
          </h1>
        </div>
      </div>
    `
  },
  {
    id: 3,
    description: 'Candidat',
    img: '/imgs/slider/bg-3-jennifer.webp',
    imgMobile: '/imgs/slider/bg-3-jennifer-mobile.webp',
    sizes: 'full pt-10 px-7',
    componentL: `
      <div class='w-full h-full absolute top-0 left-0 grid grid-cols-2'>
        <div class='md:w-full h-full grid grid-cols-1 grid-rows-3'>
          <picture class='w-fit h-full row-start-1 pl-5 md:pl-10'>
            <img src='/imgs/como-votar-1.webp' alt='Cómo votar dignidad y compromiso' class='w-16 md:w-36 object-cover' />
          </picture>
          <a
            href='https://www.instagram.com/jenniferpedrazas/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram Jennifer Pedraza'
            class='w-1/2 h-fit mx-auto pointer-events-auto items-end col-span-1 row-start-3'
          >
            <img
              src='/imgs/logo-jennifer-pedraza.png'
              alt='Logo Jennifer'
              loading='lazy'
              class='img h-auto object-contain self-center rounded-lg bg-first-700/80 py-[2px] px-[1px] md:py-4 md:px-2 backdrop-blur-3xl'
            />
          </a>
        </div>
        <div class='h-full w-full grid grid-cols-1 grid-rows-3'>
          <picture class='w-full flex justify-end items-start h-full row-start-1 pr-5 md:pr-10'>
            <img src='/imgs/como-votar-2.webp' alt='Cómo votar por el 83' class='w-16 md:w-36 object-cover' />
          </picture>
          <picture class='col-span-2 col-start-1 row-start-3'>
            <img src='/imgs/primero-la-gente.webp' alt='Primero la gente' class='w-3/4 md:w-1/2 mx-auto' />
          </picture>
        </div>
      </div>
    `
  }
]
