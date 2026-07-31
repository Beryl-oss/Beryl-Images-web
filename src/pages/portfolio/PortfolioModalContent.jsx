import { LuExternalLink } from "react-icons/lu";

function PortfolioModalContent({ project }) {

  if (!project) return null;

  return (

    <>

      {/* IMAGE */}

      <div
        className="
          flex
          w-full
          items-center
          justify-center
        "
      >

        <img
          loading="lazy"
          src={project.image}
          alt={project.title}
          className="
            max-h-[70vh]
            max-w-[90vw]
            rounded-2xl
            object-contain
          "
        />

      </div>


      {/* TITLE */}

      <h2
        className="
          text-center
          text-3xl
          font-semibold
          text-white
        "
      >
        {project.title}
      </h2>


      {/* TOOLS */}

      {project.tools?.length > 0 && (

        <div
          className="
            flex
            flex-wrap
            justify-center
            gap-2
          "
        >

          {project.tools.map((tool) => (

            <span
              key={tool}
              className="
                rounded-full
                bg-white/10
                px-4
                py-1.5
                text-xs
                font-medium
                text-white
                backdrop-blur-sm
              "
            >
              {tool}
            </span>

          ))}

        </div>

      )}


      {/* INFO */}

      <div
        className="
          flex
          flex-col
          items-center
          gap-5
          text-center
        "
      >

        {project.type && (

          <p
            className="
              text-sm
              text-slate-300
              sm:text-base
            "
          >
            {project.type}
          </p>

        )}


        {project.link && (

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-2
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

            View Project

            <LuExternalLink size={16} />

          </a>

        )}


        <p
          className="
            text-xs
            text-slate-400
            sm:text-sm
          "
        >
          Press <span className="font-medium">ESC</span> or click outside to close.
        </p>

      </div>

    </>

  );

}

export default PortfolioModalContent;