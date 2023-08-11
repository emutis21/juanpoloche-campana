import { Title } from "../Title"

export const SliderItem = ({img, title, number, description}) => {
  return (
    <div className="container cursor-grab h-full text-center flex align-center justify-center">
      <picture className="w-1/3 h-3/4 self-end p-0 flex items-end justify-center aspect-square">
        <img src={img} alt={title} loading="lazy" className="h-full w-full drop-shadow-2xl pointer-events-none object-cover object-top" />
      </picture>

      <div className="h-full w-1/2 flex flex-col justify-center">
      <Title />
        {/* <h1 className="font-black text-[7rem] md:text-[20rem]">{number}</h1>
        <h1
          className="font-black uppercase text-[1.61rem] md:text-[2.9rem] lg:text-[3.9rem]"
          style={{
            viewTransitionName: "title",
          }}
        >
          Juan David
          <span className="block text-[2.25rem] md:text-[4rem] lg:text-[5.3rem] text-neon-carrot-600">
            {title}
          </span>
        </h1>

        <h2 className="uppercase block text-xl md:text-2xl lg:text-3xl font-bold mt-7">
          {description}
        </h2> */}
      </div>

      
    </div>
  )
}
