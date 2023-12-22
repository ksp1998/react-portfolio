import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const githubEndpoint =
  "https://api.github.com/users/ksp1998/repos?sort=date&per_page=100";
const accessToken =
  "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";

const thumbnails: { [key: number]: object } = {
  726853910: {
    front: "/images/next-medico-login.png",
    back: "/images/next-medico-dashboard.png",
  },
  672590437: {
    front: "/images/react-todo-app-dark.png",
    back: "/images/react-todo-app-light.png",
  },
  416856907: {
    front: "/images/photogram-splash.jpg",
    back: "/images/photogram-home.jpg",
  },
  385034118: {
    front: "/images/react-snake-game.png",
    back: "/images/react-snake-game-playing.png",
  },
  383492913: {
    front: "/images/analog-clock-dark.png",
    back: "/images/analog-clock-light.png",
  },
  378732731: {
    front: "/images/weather-app-nodejs-dark.png",
    back: "/images/weather-app-nodejs-light.png",
  },
};

const Projects = () => {
  const [projects, setProjects] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    (() => {
      fetch(githubEndpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((json) => setProjects(json))
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="section-heading">Projects</h2>
        </div>
        <div className="row">
          {!projects.length && <h1>Fetching...</h1>}
          {projects.length &&
            projects
              .filter((project) =>
                Object.keys(thumbnails).includes(`${project.id}`)
              )
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  thumbnail={thumbnails[Number(project.id)]}
                />
              ))}
        </div>

        <center>
          <a
            className="view-more"
            href="https://github.com/ksp1998?tab=repositories"
            target="_new"
          >
            View More
          </a>
        </center>
      </div>
    </section>
  );
};

export default Projects;
