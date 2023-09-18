import { useState } from 'react'
import { cards } from '../data/cards'
import { motion } from 'framer-motion'

import ModalComponent from './Modal'
import Button from './Button'

function CardGrid() {
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (title) => {
    setSelectedCard(cards.find((card) => card.title === title))
  }

  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  const buttonClasses =
    'modal-open self-end bg-second-500 text-first-900 hover:border-first-500 text-sm md:text-md font-semibold py-2 px-4 rounded-md'

  return (
    <div
      className='box flex flex-col md:flex-row flex-wrap md:flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-4
      justify-center gap-6 lg:gap-8'
    >
      {cards.map((card) => (
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.1
            }
          }}
          viewport={{ once: true, amount: 0.1 }}
          key={card.id}
          className='max-w-lg min-h-full mx-auto flex-1 py-6 px-4 bg-white text-black [&>img]:hover:brightness-110 rounded-lg
          overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between'
        >
          <img
            srcSet={`${card.imgMobile} 480w, ${card.img} 800w`}
            sizes='(max-width: 768px) 280px'
            src={card.img}
            alt={card.alt}
            loading='lazy'
            onClick={() => handleCardClick(card.title)}
            className='img rounded-md mb-3 aspect-[4/3] object-cover cursor-pointer hover:brightness-110 transition-all duration-300'
          />
          <figcaption className='flex flex-col justify-between p-0 h-full'>
            <div>
              <h2 className='text-2xl pb-2 md:pb-5 font-semibold text-[hsl(280,100%,35%)]'>
                {card.title}
              </h2>
              <p className='text-lg font-medium text-first-900'>
                {card.text.description}
              </p>
            </div>

            <div className='flex w-full flex-col self-end gap-2 h-fit bottom-0'>
              <span className='w-full h-[1px] bg-first-100 my-2'></span>

              <Button
                onClick={() => handleCardClick(card.title)}
                title='Leer más'
                classes={buttonClasses}
              />
            </div>
          </figcaption>
        </motion.figure>
      ))}

      {selectedCard && (
        <ModalComponent
          isOpen={true}
          onClose={handleCloseModal}
          title={selectedCard.title}
          description={selectedCard.text}
          list={selectedCard.text.list}
          img={selectedCard.img}
          imgMobile={selectedCard.imgMobile}
          alt={selectedCard.alt}
          text={selectedCard.text}
        />
      )}
    </div>
  )
}

export default CardGrid
