function ServiceMobileGallery({
  previews,
  setSelectedPreview,
  setShowGallery
}) {


  return (

    <div
      onClick={() => setShowGallery(false)}
      className="
        fixed
        inset-0
        z-50
        flex
        items-end
        justify-center
        bg-black/60
        p-4
        backdrop-blur-sm
        sm:hidden
      "
    >


      <div
        onClick={(e)=>e.stopPropagation()}
        className="
          w-full
          max-w-xl
          rounded-t-[32px]
          bg-white
          p-5
          shadow-2xl
        "
      >



        {/* HEADER */}

        <h3
          className="
            mb-5
            text-center
            text-xl
            font-semibold
            text-slate-900
          "
        >
          Projects
        </h3>





        {/* PROJECT LIST */}


        <div className="flex flex-col gap-3">


          {previews.map((preview)=>(


            <button
              key={preview.title}

              onClick={()=>{
                setSelectedPreview(preview);
                setShowGallery(false);
              }}

              className="
                flex
                w-full
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                p-3
                text-left
                shadow-sm
                transition
                duration-200
                hover:bg-slate-150
                hover:border-slate-300
                hover:translate-y-[-3px]
                hover:scale-103
                hover:shadow-xl
              "
            >



              <div
                className="
                  h-16
                  w-16
                  flex-shrink-0
                  overflow-hidden
                  rounded-xl
                  bg-slate-100
                "
              >

                <img
                  src={preview.image}
                  alt={preview.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

              </div>





              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  {preview.title}
                </p>


                <p
                  className="
                    text-xs
                    text-slate-500
                  "
                >
                  View project preview
                </p>


              </div>




            </button>


          ))}


        </div>





        {/* CLOSE */}


        <div className="mt-5 flex justify-center">


          <button

            onClick={()=>setShowGallery(false)}

            className="
              rounded-full
              bg-slate-100
              px-5
              py-2.5
              text-sm
              font-semibold
              text-slate-900
              transition
              hover:bg-slate-200
            "
          >
            Close
          </button>


        </div>



      </div>



    </div>


  );

}


export default ServiceMobileGallery;