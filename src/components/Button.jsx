const Button = ({ title, onClick, classes }) => {
  return (
    <button
      className={`relative active:translate-y-[1px] active:translate-x-[1px] transition-transform inline-flex items-center justify-center gap-3 button group ${classes}`}
      onClick={onClick}
    >
      {title}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
        ></path>
      </svg>
    </button>
  )
}

export default Button
