type Props = {
  skeleton?: boolean;
  project?: { [key: string]: string };
  thumbnail?: { front?: string; back?: string };
};

const ProjectCard = ({ skeleton = false, project = {}, thumbnail }: Props) => {
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
        {project.language && (
          <span className="language">#{project.language}</span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
