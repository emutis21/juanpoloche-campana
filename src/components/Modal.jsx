import { motion } from 'framer-motion'
import { Close } from './Icons/OpenClose'
import { useEffect } from 'react'

const ModalComponent = ({
  isOpen,
  onClose,
  title,
  text,
  img,
  imgMobile,
  alt
}) => {
  const { paragraph, list } = text

  const handleCloseModal = () => {
    onClose()
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        handleCloseModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    isOpen && document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div className='overflow-y-hidden fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center'>
          <div
            className='modal-verlay absolute w-full h-full backdrop-blur-[2px] bg-black/30'
            onClick={handleCloseModal}
          ></div>

          <motion.figure
            className={`w-11/12 sm:w-7/12 md:w-10/12 lg:w-9/12 pt-3 pb-12 max-h-fit h-[75%] md:max-h-[75%] md:h-fit gap-1 md:gap-3 z-50 bg-white
            rounded-lg text-first-800 shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <button
              onClick={handleCloseModal}
              className='sticky top-0 w-full flex justify-end [&>svg]:w-8 md:[&>svg]:w-10 pl-5 pr-[22px] md:px-5'
            >
              <Close />
            </button>
            <div className='overflow-y-auto flex flex-col items-center justify-between gap-2 md:flex-row relative md:items-start px-5'>
              <picture className='md:w-[45%] w-full h-full md:sticky md:top-0 self-center'>
                <img
                  srcSet={`${imgMobile} 480w, ${img} 800w`}
                  sizes='(max-width: 768px) 280px'
                  src={img}
                  alt={alt}
                  loading='lazy'
                  className='img rounded-md aspect-[1/1] max-h-[300px] w-full h-full object-cover self-center'
                />
              </picture>

              <span className='w-full h-[3px] md:w-[5px] md:h-full bg-first-100 block'></span>

              <figcaption className='flex flex-col gap-5 h-full w-full md:w-[55%]'>
                <h2
                  className='text-3xl md:text-4xl font-bold text-[hsl(280,100%,35%)]'
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h2>
                <p
                  className='text-lg font-normal'
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
                {list && Array.isArray(list) && list.length > 0 && (
                  <ul className='flex flex-col gap-5'>
                    {list.map((itemObj, index) => (
                      <li key={index} className='flex w-full gap-2'>
                        <span className='text-lg md:text-lg font-medium'>
                          🧡
                        </span>
                        <p
                          className='text-lg md:text-lg'
                          dangerouslySetInnerHTML={{ __html: itemObj.item }}
                        ></p>
                      </li>
                    ))}
                  </ul>
                )}
              </figcaption>
            </div>
          </motion.figure>
        </div>
      )}
    </>
  )
}

export default ModalComponent
