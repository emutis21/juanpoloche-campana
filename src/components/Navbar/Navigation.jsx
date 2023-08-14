import { useState } from "react";
import { Close, Open } from "../Icons/OpenClose";

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOutsideClick = (event) => {
    if (showSidebar && !event.target.closest(".flex.flex-col")) {
      setShowSidebar(false)
    }
  };

    const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className="flex-grow basis-0 flex justify-end">
      <Open showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`top-0 right-0 w-full flex justify-end fixed bg-zinc-800/[0.16] h-full z-40 ease-in-out ${
          showSidebar ? "translate-x-0 duration-0" : "translate-x-full duration-300"
        }`}
        onClick={handleOutsideClick}
      >
        <aside className={`overflow-auto flex flex-col z-40 gap-5 justify-between w-[16.5rem] right-0 h-full p-5 bg-[hsl(14,84%,45%)] duration-500 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Menú</h3>
            <div className="cursor-pointer w-[15%] self-start">
              <Close showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </div>
          </div>
          <div className="text-2xl h-full py-5 font-semibold text-white border-t-4 border-b-4 border-fourth-900">
            <ul className="flex flex-col text-md [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:w-full [&>li>a]:py-2" id="landing-header">
              <li>
                <a 
                  className="active:bg-first-950 active:text-first-200 transition-all active:px-2"
                  href="/#mi-trayectoria"
                  onClick={closeSidebar}
                >
                  Mi Trayectoria
                </a>
              </li>
              <li>
                <a 
                  className="active:bg-first-950 active:text-first-200 transition-all active:px-2"
                  href="/#propuestas"
                  onClick={closeSidebar}
                >
                  Propuestas
                </a>
              </li>
              <li>
                <a 
                  className="active:bg-first-950 active:text-first-200 transition-all active:px-2"
                  href="/#mi-equipo-de-trabajo"
                  onClick={closeSidebar}
                >
                  Mi Equipo
                </a>
              </li>
              <li>
                <a 
                  className="active:bg-first-950 active:text-first-200 transition-all active:px-2"
                  href="/#contacto"
                  onClick={closeSidebar}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <a href="/" className="text-xl font-black text-first-200 uppercase">
            Juan Poloche
          </a>
        </aside>
      </div>
    </div>
  );
};

export default Navigation;
