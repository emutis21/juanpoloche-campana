import { motion } from 'framer-motion'

export const SliderItem = ({
  img,
  imgMobile,
  sizes,
  component,
  componentL,
  description
}) => {
  return (
    <div className='cursor-grab w-[98%] mx-auto h-full text-center flex'>
      <picture
        className={`md:w-${sizes} flex flex-1 justify-center pointer-events-none justify-self-end items-end p-0`}
      >
        <motion.img
          transition={{
            ease: 'linear',
            duration: 2,
            x: { duration: 1 }
          }}
          srcSet={`${imgMobile} 480w, ${img} 800w`}
          sizes='(max-width: 768px) 280px'
          src={img}
          alt={description}
          loading='lazy'
          className='h-full w-full z-[-1] drop-shadow-2xl object-contain object-bottom'
        />
      </picture>
      {component && (
        <div
          className={`w-1/2 flex-1 h-full flex pointer-events-none`}
          dangerouslySetInnerHTML={{ __html: component }}
        />
      )}
      {componentL && (
        <div
          className={`w-fit h-full mx-auto grid pointer-events-none place-content-center`}
          dangerouslySetInnerHTML={{ __html: componentL }}
        />
      )}
    </div>
  )
}
