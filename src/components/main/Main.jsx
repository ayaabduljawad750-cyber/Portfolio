import { useMemo, useState } from "react";
import CardProject from "../cardProject/CardProject";
import "./main.css";
import { projects } from "./projects";
import { AnimatePresence  } from "motion/react"

export default function Main() {
  const [category, setCategory] = useState("all");
  function handleCategories(c) {
    setCategory(c);
  }

  const displayedProjects = useMemo(() => {
    if (category === "all") {
      return projects;
    }
    return projects.filter((project) => {
      return project.categories.includes(category);
    });
  }, [category]);

  const renderProjects = displayedProjects.map((project) => {
    return <CardProject key={project.id} project={project} />;
  });
  return (
    <main className="main-content">
      <div className="left-section">
        <button
          className={category === "all" ? "active" : null}
          onClick={() => handleCategories("all")}
        >
          All projects
        </button>
        <button
          className={category === "css" ? "active" : null}
          onClick={() => handleCategories("css")}
        >
          HTML and CSS
        </button>
        <button
          className={category === "js" ? "active" : null}
          onClick={() => handleCategories("js")}
        >
          Javascript
        </button>
        <button
          className={category === "react" ? "active" : null}
          onClick={() => handleCategories("react")}
        >
          React and MUI
        </button>
        <button
          className={category === "node" ? "active" : null}
          onClick={() => handleCategories("node")}
        >
          Node and Express
        </button>
      </div>
      <div className="right-section">
        <AnimatePresence >
        {renderProjects}
        </AnimatePresence>
        </div>
    </main>
  );
}


