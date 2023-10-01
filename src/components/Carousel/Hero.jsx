import Slider from './Slider'

export default function Hero() {
  return (
    <section
      className='hero aspect-video w-full h-[35vh] sm:h-[60vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh] bg-center bg-cover md:bg-fixed bg-no-repeat'
      aria-label='Imagen de fondo de Usaquén'
      id='inicio'
    >
      <div className='bg-gradient-to-b from-first-100/10 via-[hsl(280,95%,56%)]/20 to-[hsl(280,95%,26%)]/80 backdrop-blur-[1px] md:backdrop-blur-[3px] w-full h-full'>
        <Slider />
      </div>
    </section>
  )
}
