import { LuX } from "react-icons/lu";


function ServiceModal({ selectedPreview, setSelectedPreview }) {

  if (!selectedPreview) return null;


  return (

    <div
      onClick={() => setSelectedPreview(null)}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-black/80
        p-6
        backdrop-blur-md
      "
    >


      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          flex
          max-h-[90vh]
          w-full
          max-w-5xl
          flex-col
          items-center
          gap-5
          overflow-y-auto
          py-6
          animate-in
          fade-in
          zoom-in
          duration-300
        "
      >



        {/* CLOSE BUTTON */}

        <button
          onClick={() => setSelectedPreview(null)}
          className="
            absolute
            right-2
            top-2
            z-10
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white/10
            text-white
            backdrop-blur-xl
            transition
            duration-300
            hover:scale-110
            hover:bg-white/20
          "
        >

          <LuX size={24}/>

        </button>





        {/* IMAGE */}


        <div
          className="
            flex
            items-center
            justify-center
            rounded-[32px]
            bg-white
            p-4
            shadow-2xl
          "
        >

          <img
            src={selectedPreview.image}
            alt={selectedPreview.title}
            className="
              max-h-[80vh]
              max-w-[90vw]
              rounded-2xl
              object-contain
            "
          />

        </div>





        {/* TITLE */}


        <p
          className="
            text-center
            text-xl
            font-semibold
            text-white
          "
        >
          {selectedPreview.title}
        </p>





        {/* INFO */}


        <div
          className="
            flex
            flex-col
            items-center
            gap-3
            text-center
            text-sm
            text-slate-300
            sm:text-base
          "
        >

          <p>
            Press ESC or the button to close.
          </p>



          <button
            onClick={() => setSelectedPreview(null)}
            className="
              rounded-full
              bg-white
              px-6
              py-2.5
              text-sm
              font-semibold
              text-slate-900
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-slate-100
            "
          >
            Close preview
          </button>


        </div>



      </div>



    </div>

  );
}


export default ServiceModal;