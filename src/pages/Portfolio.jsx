import { useState } from "react";
import { projects } from "./Portfolio/data";
import PortfolioHeader from "./Portfolio/PortfolioHeader";
import PortfolioFilters from "./Portfolio/PortfolioFilters";
import ProjectGrid from "./Portfolio/ProjectGrid";
import PortfolioModal from "./Portfolio/PortfolioModal";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

    console.log(filteredProjects);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen overflow-hidden bg-[#f5f9fb] px-6 py-24 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[120px]" />

        <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-orange-300/15 blur-[120px]" />

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/70 blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,70,83,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(38,70,83,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-40" />

      </div>

      <div className="relative mx-auto max-w-7xl">

        <PortfolioHeader />

        <PortfolioFilters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <ProjectGrid projects={filteredProjects} setSelectedProject={setSelectedProject} />

        <PortfolioModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      </div>

    </section>
      );
    }

export default Portfolio;