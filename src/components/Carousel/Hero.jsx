import Slider from './Slider'

export default function Hero() {
  return (
    <section
      className='aspect-video w-full h-[30vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh] bg-center bg-cover bg-no-repeat md:bg-fixed'
      style={{
        backgroundImage: `url(/imgs/usaquen.webp)`
      }}
      aria-label='Imagen de fondo de Usaquén'
      id='inicio'
    >
      <div className='bg-second-950/40 backdrop-blur-[2px] md:backdrop-blur-[4px] lg:backdrop-blur-[6px] w-full h-full'>
        <Slider />
      </div>
    </section>
  )
}
