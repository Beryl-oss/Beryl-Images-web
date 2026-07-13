import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);


function ProjectGrid({
  projects,
  setSelectedProject,
}) {

  console.log("Projects reçus dans Grid :", projects);


  const gridRef = useRef(null);



  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(".project-card", 

        {
  opacity: 0,
  y: 50,
},
{
  opacity: 1,
  y: 0,

      });


    }, gridRef);



    return () => ctx.revert();


  }, []);


  
  return (

    <div
      ref={gridRef}
      className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >

      {projects.map((project) => (

        <ProjectCard
          key={project.id}
          project={project}
          setSelectedProject={setSelectedProject}
        />

      ))}


    </div>

  );

}


export default ProjectGrid;