import { FaArrowCircleRight } from "react-icons/fa";
import Stars from "./Stars";
import TypedText from "./TypedText";

const Intro = () => {
  const name = "Kiran Suthar";

  return (
    <section id="intro" className="stars-wrapper">
      <Stars count={250} />

      <div className="container">
        <h1 className="intro-title">
          Hello, I am <span>{name}</span>
        </h1>
        <h2 className="intro-subtitle">
          <TypedText />
        </h2>

        <a className="btn" href="#projects" role="button">
          <span>Projects</span>
          <FaArrowCircleRight />
        </a>
      </div>
    </section>
  );
};

export default Intro;
