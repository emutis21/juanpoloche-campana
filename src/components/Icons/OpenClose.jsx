export const Open = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icons-social-media'
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M4 6h16'></path>
      <path d='M7 12h13'></path>
      <path d='M10 18h10'></path>
    </svg>
  )
}

export const Close = ({ showSidebar, setShowSidebar, color }) => {
  return (
    <svg
      className={`icon icon-tabler icon-tabler-x cursor-pointer w-full rounded-xl ${color}`}
      width='100%'
      height='100%'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      onClick={showSidebar ? () => setShowSidebar(!showSidebar) : null}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M18 6l-12 12'></path>
      <path d='M6 6l12 12'></path>
    </svg>
  )
}
