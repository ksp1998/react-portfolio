import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Stars from "./Stars";
import { FaArrowCircleRight } from "react-icons/fa";

const githubEndpoint =
  "https://api.github.com/users/ksp1998/repos?sort=date&per_page=100";
const accessToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

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
          {!projects.length && (
            <>
              <ProjectCard project={{ language: " " }} skeleton={true} />
              <ProjectCard project={{ language: " " }} skeleton={true} />
              <ProjectCard project={{ language: " " }} skeleton={true} />
            </>
            // <div className="loading">
            //   <span>Fetching Projects</span>
            //   <FaSpinner />
            // </div>
          )}

          {projects.length > 0 &&
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
            className="btn view-more"
            href="https://github.com/ksp1998?tab=repositories"
            target="_new"
          >
            <Stars count={10} style={{ zIndex: 1 }} width={165} />
            <span>View More</span>
            <FaArrowCircleRight />
          </a>
        </center>
      </div>
    </section>
  );
};

export default Projects;
