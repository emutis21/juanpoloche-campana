import Slider from './Slider'

export default function Hero() {
  return (
    <article
      className='aspect-video w-full h-[30vh] md:h-[55vh] lg:h-[70vh] xl:h-[80vh] shadow-lg bg-center bg-cover bg-no-repeat md:bg-fixed'
      style={{
        backgroundImage: `url(/imgs/usaquen.webp)`
      }}
      aria-label='Imagen de fondo de Usaquén'
    >
      <div className='bg-second-950/50 backdrop-blur-[1px] md:backdrop-blur-[6px] w-full h-full'>
        <Slider />
      </div>
    </article>
  )
}
