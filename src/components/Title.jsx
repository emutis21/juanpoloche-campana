export const Title = () => {
  return (
    <div className='text-center scale-75 w-fit h-fit md:scale-100 lg:scale-125 xl:scale-150'>
      <h1
        className='font-bold uppercase font-sans text-white text-4xl/[1.7rem]'
        style={{
          viewTransitionName: 'title'
        }}
      >
        Juan David
        <span className='block text-second-500 font-sans font-black font text-5xl'>
          Poloche
        </span>
      </h1>
    </div>
  )
}
