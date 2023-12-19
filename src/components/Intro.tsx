import TypedText from "./TypedText";

const Intro = () => {
  const name = "Kiran Suthar";

  return (
    <section id="intro" className="">
      <div className="stars">
        {Array.from(Array(500)).map(() => {
          const style = {
            left: Math.floor(Math.random() * window.innerWidth),
            top: Math.floor(Math.random() * 2 * window.innerHeight),
            animationDuration: `${Math.floor(Math.random() * 60) + 60}s`,
          };
          const key = `${style.left}${style.top}`;
          return (
            <span
              key={key}
              className={`star size-${(style.top % 3) + 1}`}
              style={style}
            />
          );
        })}
      </div>

      <div className="container">
        <h1 className="intro-title">Hello, I am {name}</h1>
        <h2 className="intro-subtitle">
          <TypedText />
        </h2>

        <a className="btn" href="#about" role="button">
          Projects
        </a>
      </div>
    </section>
  );
};

export default Intro;
