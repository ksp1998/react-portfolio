const skills = [
  { name: "JavaScript", percent: 90 },
  { name: "ReactJs", percent: 80 },
  { name: "TypeScript", percent: 75 },
  { name: "SASS", percent: 85 },
  { name: "PHP", percent: 90 },
  { name: "MongoDB", percent: 60 },
  //   { name: "Java", percent: 60 },
  //   { name: "Firebase", percent: 70 },
  //   { name: "MySQL", percent: 95 },
  { name: "WordPress", percent: 70 },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="profile">
              <img
                src="https://avatars.githubusercontent.com/u/36969418"
                alt="Kiran Suthar Profile"
              />
            </div>

            <ul className="skills">
              {skills.map((skill, i) => (
                <li className="skill-item" key={i}>
                  <div className="skill-data">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div
                    className="progress"
                    style={{ width: `${skill.percent}%` }}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h3 className="title">About Me</h3>
            <div className="info">
              <p>
                A software engineer with a passion for turning concepts into
                tangible outcomes through coding. I am enthusiastic about
                utilizing JavaScript and it's libraries to craft exceptional
                user experiences.
              </p>
              <p>
                Bringing two years of expertise in crafting web applications,
                harnessing the latest front-end and back-end technologies for
                optimal results.
              </p>
              <p>
                Enthusiastic developer driven to create interactive websites
                using ReactJS, JavaScript, HTML5, and SASS. Possessing robust
                collaboration skills and a demonstrated track record in web
                application development, with proficiency in WordPress and
                MySQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
