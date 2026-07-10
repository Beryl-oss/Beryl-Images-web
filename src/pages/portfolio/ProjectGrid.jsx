import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

    </div>
  );
}

export default ProjectGrid;