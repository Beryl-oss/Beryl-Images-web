import { useState } from "react";
import { projects } from "./Portfolio/data";
import PortfolioHeader from "./Portfolio/PortfolioHeader";
import PortfolioFilters from "./Portfolio/PortfolioFilters";
import ProjectGrid from "./Portfolio/ProjectGrid";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section id="portfolio" className="min-h-screen bg-[linear-gradient(180deg,_#f5f9fb_0%,_#eef5f7_100%)] px-6 py-24 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <PortfolioHeader />

        <PortfolioFilters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <ProjectGrid projects={filteredProjects} />

      </div>

    </section>
  );
}

export default Portfolio;