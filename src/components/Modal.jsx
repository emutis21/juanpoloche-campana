import { motion } from 'framer-motion'
import { Close } from './Icons/OpenClose'
import { useEffect } from 'react'

const ModalComponent = ({ isOpen, onClose, title, text, img, alt }) => {
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
        <div className='overflow-y-hidden text-white fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center'>
          <div
            className='modal-verlay absolute w-full h-full backdrop-blur-[2px] bg-black/30'
            onClick={handleCloseModal}
          ></div>

          <motion.figure
            className={`w-11/12 sm:w-7/12 md:w-10/12 lg:w-8/12 py-12 max-h-fit h-[75%] md:max-h-[75%] md:h-fit px-5 gap-6 md:gap-12 relative bg-first-900
            rounded-lg overflow-y-auto shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col md:flex-row
            items-center justify-between md:items-start`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <button
              onClick={handleCloseModal}
              className='w-8 top-2 md:w-10 absolute md:top-1 right-3'
            >
              <Close />
            </button>
            <img
              src={img}
              alt={alt}
              loading='lazy'
              className='rounded-md md:sticky md:top-0 h-full w-full md:w-1/2 aspect-[4/3] object-cover self-center'
            />

            <span className='w-full h-[3px] md:w-[5px] md:h-full bg-first-100 block'></span>

            <figcaption className='flex flex-col gap-5 h-full w-full'>
              <h2
                className='text-3xl md:text-4xl font-bold text-second-500'
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
              <p
                className='text-lg font-normal'
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></p>
              {list && Array.isArray(list) && list.length > 0 && (
                <ul className='flex flex-col gap-5 pb-8 md:pb-0'>
                  {list.map((itemObj, index) => (
                    <li key={index} className='flex w-full gap-2'>
                      <span className='text-lg md:text-lg font-medium'>💜</span>
                      <p
                        className='text-lg md:text-lg'
                        dangerouslySetInnerHTML={{ __html: itemObj.item }}
                      ></p>
                    </li>
                  ))}
                </ul>
              )}
            </figcaption>
          </motion.figure>
        </div>
      )}
    </>
  )
}

export default ModalComponent
