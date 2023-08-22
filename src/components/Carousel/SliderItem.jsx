import { motion } from 'framer-motion'
import { Title } from '../Title'
import { Banner } from '../Banner'

export const SliderItem = ({ img, sizes, title, number, description }) => {
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
          src={img}
          srcSet={`${img} 1x, ${img} 2x`}
          sizes='(min-width: 768px) 50vw, 100vw'
          alt={description}
          loading='lazy'
          className='h-full w-full drop-shadow-2xl pointer-events-none object-contain object-bottom'
        />
      </picture>

      <div className='h-full w-1/2 flex gap-12 flex-col justify-center items-center'>
        <Title />
        <Banner />
        {/* <h1 className="font-black text-[7rem] md:text-[20rem]">{number}</h1>
        <h1
          className="font-black uppercase text-[1.61rem] md:text-[2.9rem] lg:text-[3.9rem]"
          style={{
            viewTransitionName: "title",
          }}
        >
          Juan David
          <span className="block text-[2.25rem] md:text-[4rem] lg:text-[5.3rem] text-fourth-600">
            {title}
          </span>
        </h1>

        <h2 className="uppercase block text-xl md:text-2xl lg:text-3xl font-bold mt-7">
          {description}
        </h2> */}
      </div>
    </div>
  )
}
