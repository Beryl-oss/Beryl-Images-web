import ProjectCard from "./ProjectCard";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function ProjectGrid({
  projects,
  setSelectedProject,
}) {

  const gridRef = useRef(null);


  useLayoutEffect(() => {

  const ctx = gsap.context(() => {

    const cards = gsap.utils.toArray(
      gridRef.current.querySelectorAll(".project-card")
    );


    gsap.killTweensOf(cards);


    gsap.set(cards, {
      opacity: 0,
      y: 80,
      scale: 0.95,
    });


    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,

      duration: 0.9,

      stagger:{
        each:0.08,
        from:"start"
      },

      ease: "power3.out",

      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
        toggleActions: "play none none",
      },

    });


  }, gridRef);


  return () => ctx.revert();
  }, []);



  return (

    <div
      ref={gridRef}
      className="
        mt-16
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
      "
    >

      {projects.map((project) => (

        <ProjectCard
          key={`${project.category}-${project.id}`}
          project={project}
          setSelectedProject={setSelectedProject}
        />

      ))}


    </div>

  );

}


export default ProjectGrid;