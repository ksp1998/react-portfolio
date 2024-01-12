type Props = {
  skeleton?: boolean;
  project?: { [key: string]: string };
  thumbnail?: { front?: string; back?: string };
  techs?: string;
};

const ProjectCard = ({
  skeleton = false,
  project = {},
  thumbnail,
  techs = "",
}: Props) => {
  return (
    <div className={`col project-card ${skeleton ? "skeleton" : ""}`}>
      <figure className="thumbnail">
        <img className="front" src={thumbnail?.front} alt={project.name} />
        <img className="back" src={thumbnail?.back} alt={project.name} />

        <div className="links">
          {project.homepage && (
            <a href={project.homepage} className="link" target="_new">
              Demo
            </a>
          )}
          {project.html_url && (
            <a href={project.html_url} className="link" target="_new">
              Github
            </a>
          )}
        </div>
      </figure>
      <div className="details">
        <h3 className="title">{project.name?.replaceAll("-", " ")}</h3>
        <p className="description">{project.description}</p>
        <div className="techs">
          {techs &&
            techs.split("|").map((tech, i) => (
              <span key={`${tech}-${i}`} className="language">
                {tech}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
