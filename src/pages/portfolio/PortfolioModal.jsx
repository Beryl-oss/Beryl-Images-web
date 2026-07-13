import { useEffect } from "react";
import { LuX, LuExternalLink } from "react-icons/lu";


function PortfolioModal({
  selectedProject,
  setSelectedProject,
}) {

  useEffect(() => {

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      setSelectedProject(null);
    }
  };

  window.addEventListener("keydown", handleEscape);

  return () => {
    window.removeEventListener("keydown", handleEscape);
  };

  }, [setSelectedProject]);

  useEffect(() => {
  if (!selectedProject) return;

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "";
  };
  }, [selectedProject]);

  if (!selectedProject) return null;


  return (

    <div
      onClick={() => setSelectedProject(null)}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-6 backdrop-blur-md"
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center gap-6 overflow-y-auto py-6 animate-in fade-in zoom-in duration-300"
      >


        {/* CLOSE BUTTON */}

        <button
          onClick={() => setSelectedProject(null)}
          className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition duration-300 hover:scale-110 hover:bg-white/20"
        >

          <LuX size={24}/>

        </button>




        {/* IMAGE */}

        <div
          className="flex w-full items-center justify-center"
        >

          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="max-h-[70vh] max-w-[90vw] rounded-2xl object-contain"
          />

        </div>






        {/* TITLE */}

        <h2
          className="text-center text-3xl font-semibold text-white"
        >

          {selectedProject.title}

        </h2>




        {/* TOOLS */}

        <div
          className="flex flex-wrap justify-center gap-2"
        >

          {selectedProject.tools?.map((tool) => (

            <span
              key={tool}
              className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-xl"
            >

              {tool}

            </span>

          ))}

        </div>






        {/* INFO */}

        <div
          className="flex flex-col items-center gap-4 text-center text-sm text-slate-300 sm:text-base"
        >

          <p>
            {selectedProject.type}
          </p>




          <div
            className="flex gap-3"
          >


            {selectedProject.link && (

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >

                Voir le projet

                <LuExternalLink size={16}/>

              </a>

            )}






            <div
              className="flex flex-col items-center gap-3 text-center text-sm text-slate-300 sm:text-base"
            >

              <p>
                Press ESC or the button X button to close.
              </p>



            </div>


          </div>


        </div>


      </div>


    </div>

  );

}


export default PortfolioModal;