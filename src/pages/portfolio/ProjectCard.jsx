function ProjectCard({ project }) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-lg
      "
    >

      <div
        className="
          aspect-[4/3]
          overflow-hidden
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-110
          "
        />
      </div>


      <div
        className="
          p-6
        "
      >
        <p className="
          text-sm
          text-orange-500
        ">
          {project.category}
        </p>

        <h3 className="
          mt-2
          text-2xl
          font-bold
        ">
          {project.title}
        </h3>

        <p className="
          mt-3
          text-gray-600
        ">
          {project.description}
        </p>
      </div>

    </article>
  );
}

export default ProjectCard;