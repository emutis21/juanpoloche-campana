import { motion } from "framer-motion";
import { Close } from "./Icons/OpenClose";
import { useEffect } from "react";

const ModalComponent = ({ isOpen, onClose, title, text, img, alt }) => {
  const { paragraph, list } = text;

  const handleCloseModal = () => {
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    isOpen && document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="overflow-y-hidden text-white fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center"
        >
          <div
            className="modal-verlay absolute w-full h-full backdrop-blur-[2px] bg-gray-900/70"
            onClick={handleCloseModal}
          ></div>

          <motion.figure
            className={`w-[90%] md:w-7/12 lg:4/12 py-12 max-h-fit h-2/3 md:h-1/2 px-5 gap-6 md:gap-12 relative
            bg-neon-carrot-600 z-50 rounded-lg overflow-y-auto
            shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col md:flex-row
            items-center justify-between md:items-start`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <button onClick={handleCloseModal} className="w-10 absolute top-2 right-3">
              <Close />
            </button>
            <img
              src={img}
              alt={alt}
              loading="lazy"
              className="rounded-md h-full md:w-1/2 aspect-4/3 object-cover self-center"
            />

            <span className="w-full h-[3px] md:w-[5px] md:h-full bg-pigment-indigo-100 block"></span>

            <figcaption className="flex flex-col gap-5 h-full w-full">
              <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
              <p className="text-lg md:text-xl font-normal">{paragraph}</p>
              {list && Array.isArray(list) && list.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {list.map((itemObj, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-lg md:text-xl font-medium">👏</span>
                      <p className="text-lg md:text-xl">{itemObj.item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </figcaption>
          </motion.figure>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
