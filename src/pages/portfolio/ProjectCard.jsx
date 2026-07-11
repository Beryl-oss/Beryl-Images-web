import { LuArrowUpRight, LuExternalLink } from "react-icons/lu";

function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Category */}
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/20 px-4 py-1 text-xs font-medium text-white backdrop-blur-xl">
          {project.category}
        </span>

        {/* Hover button */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-5 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <LuExternalLink size={18} />
          </a>
        )}
      </div>


      {/* Content */}
      <div className="space-y-4 p-6">

        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">
            {project.description}
          </p>
        </div>


        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {project.tools?.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[#eff6fb] px-3 py-1 text-xs font-medium text-[#264653]"
            >
              {tool}
            </span>
          ))}
        </div>


        {/* Footer */}
        <div className="flex items-center justify-between border-t border-black/5 pt-4">

          <span className="text-sm backdrop-blur-sm font-medium text-slate-400">
            {project.type}
          </span>

          <button className="flex items-center gap-1 text-sm font-medium text-[#ff6d00] transition hover:gap-2">
            Voir plus
            <LuArrowUpRight size={16} />
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;