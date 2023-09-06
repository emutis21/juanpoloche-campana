import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { bg } from '@data/bg'
import { Arrow } from '../Icons/Arrow'
import { SliderItem } from './SliderItem'

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

const swipeConfidenceThreshold = 10000

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const autoplayTimer = useRef(null)

  const duration = 19000

  const getNextIndex = () => {
    return activeIndex === bg.length - 1 ? 0 : activeIndex + 1
  }

  const startAutoplay = () => {
    autoplayTimer.current = setTimeout(() => {
      const nextIndex = getNextIndex()
      setActiveIndex(nextIndex)
    }, duration)
  }

  const stopAutoplay = () => {
    clearTimeout(autoplayTimer.current)
  }

  useEffect(() => {
    startAutoplay()

    return () => {
      stopAutoplay()
    }
  }, [])

  useEffect(() => {
    stopAutoplay()
    startAutoplay()
  }, [activeIndex])

  const bgIndex = wrap(0, bg.length, activeIndex)
  const { title, description, img, imgMobile, number, sizes } = bg[bgIndex]

  const paginate = (newDirection) => {
    setActiveIndex((prevIndex) => wrap(0, bg.length, prevIndex + newDirection))
  }

  return (
    <div className='relative w-[93%] md:w-[80%] mx-auto h-full flex justify-center items-center overflow-hidden'>
      <AnimatePresence initial={false} custom={activeIndex}>
        <motion.div
          key={activeIndex}
          custom={activeIndex}
          variants={variants}
          className='absolute w-full h-full'
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <SliderItem
            title={title}
            sizes={sizes}
            description={description}
            img={img}
            imgMobile={imgMobile}
            number={number}
          />
        </motion.div>
      </AnimatePresence>

      <div
        className='absolute w-5 md:w-7 top-1/2 right-1 transform z-50 -translate-y-1/2 text-3xl cursor-pointer'
        onClick={() => paginate(1)}
      >
        <Arrow />
      </div>

      <div
        className='absolute w-5 md:w-7 top-1/2 left-1 rotate-180 transform z-50 -translate-y-1/2 text-3xl cursor-pointer'
        onClick={() => paginate(-1)}
      >
        <Arrow />
      </div>
    </div>
  )
}
