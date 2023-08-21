import { useState } from 'react'
import { cards } from '../data/cards'

import ModalComponent from './Modal'
import Button from './Button'
import { motion } from 'framer-motion'

function CardGrid() {
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (title) => {
    setSelectedCard(cards.find((card) => card.title === title))
  }

  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  const buttonClasses =
    'modal-open self-end bg-first-800 hover:border-first-500 text-sm md:text-md text-white font-semibold py-2 px-4 rounded-md'

  return (
    <div
      className='box flex flex-col md:flex-row flex-wrap md:flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-4
      justify-center gap-6 lg:gap-8 xl:gap-12'
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
          className='max-w-lg min-h-full mx-auto flex-1 py-6 px-4 bg-third-50 text-black [&>img]:hover:brightness-110 rounded-lg
          overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between'
        >
          <img
            src={card.img}
            alt={card.alt}
            loading='lazy'
            onClick={() => handleCardClick(card.title)}
            className='rounded-md mb-3 aspect-[4/3] object-cover cursor-pointer hover:brightness-110 transition-all duration-300'
          />
          <figcaption className='flex flex-col justify-between gap-5 h-full'>
            <h2 className='text-2xl font-semibold text-second-700'>{card.title}</h2>
            <p className='text-lg font-medium text-first-900'>{card.text.description}</p>

            <div className='flex w-full flex-col self-end gap-2 h-fit bottom-0'>
              <span className='w-full h-[1px] bg-first-100'></span>

              <Button onClick={() => handleCardClick(card.title)} title='Leer más' classes={buttonClasses} />
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
          alt={selectedCard.alt}
          text={selectedCard.text}
        />
      )}
    </div>
  )
}

export default CardGrid
