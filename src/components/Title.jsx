export const Title = () => {
  return (
    <div className='text-center'>
      <h1
        className='font-black uppercase text-white text-[1.61rem] md:text-[2.9rem] lg:text-[3.9rem]'
        style={{
          viewTransitionName: 'title'
        }}
      >
        Juan David
        <span className='block text-[2.25rem] md:text-[4rem] lg:text-[5.3rem] text-fourth-500'>
          Poloche
        </span>
      </h1>
    </div>
  )
}
