import { motion } from 'framer-motion'
import { Title } from '../Title'
import { Banner } from '../Banner'

export const SliderItem = ({ img, imgMobile, sizes, title, number, description }) => {
  return (
    <div className='cursor-grab w-[98%] mx-auto h-full text-center flex align-center justify-center'>
      <picture
        className={`md:w-${sizes} flex justify-center justify-self-end items-end p-0`}
      >
        <motion.img
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 }
          }}
          srcset={[`${imgMobile} 480w`, `${img} 800w`]}
          sizes='(max-width: 768px) 280px'
          src={img}
          alt={description}
          loading='lazy'
          className='h-full w-full drop-shadow-2xl pointer-events-none object-contain object-bottom'
        />
      </picture>

      <div className='h-full w-1/2 flex gap-12 flex-col justify-center items-center'>
        <Title />
        <Banner />
      </div>
    </div>
  )
}
