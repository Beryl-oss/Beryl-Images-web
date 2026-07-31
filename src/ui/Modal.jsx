import { useEffect } from "react";
import { LuX } from "react-icons/lu";

import useModalAnimation from "../hooks/useModalAnimation";


function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-5xl",
}) {


  const modalRef = useModalAnimation(isOpen);


  useEffect(() => {

    if (!isOpen) return;


    const handleEscape = (event) => {

      if (event.key === "Escape") {
        onClose();
      }

    };


    window.addEventListener(
      "keydown",
      handleEscape
    );


    document.body.style.overflow = "hidden";


    return () => {

      window.removeEventListener(
        "keydown",
        handleEscape
      );


      document.body.style.overflow = "";

    };


  }, [isOpen, onClose]);



  if (!isOpen) return null;



  return (

    <div

      onClick={onClose}

      className="
        fixed
        inset-0
        z-[100]
        flex
        min-h-screen
        items-center
        justify-center

        overflow-y-auto

        bg-slate-950/75

        px-4
        py-8

        sm:px-6

        transition-opacity
        duration-300
      "

    >


      {/* Ambient Glow */}

      <div

        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]

        "

      />



      {/* Modal Container */}

      <div

        ref={modalRef}

        onClick={(e)=>e.stopPropagation()}


        className={`
          relative

          flex
          w-full
          ${maxWidth}

          max-h-[calc(100vh-4rem)]

          flex-col
          items-center

          gap-6

          overflow-y-auto


          rounded-3xl

          border
          border-white/10


          bg-[#0f172a]


          p-5

          shadow-[0_40px_120px_rgba(0,0,0,0.55)]



          sm:p-8

        `}

      >



        {/* Close Button */}

        <button

          onClick={onClose}

          aria-label="Close modal"


          className="
            absolute

            right-4
            top-4


            flex

            h-10
            w-10


            items-center
            justify-center


            rounded-full


            border
            border-white/10


            bg-white/5


            text-white


            transition-all
            duration-300


            hover:scale-110

            hover:bg-white/15


            sm:right-5
            sm:top-5

          "

        >

          <LuX size={22}/>


        </button>



        {children}



      </div>



    </div>

  );

}


export default Modal;