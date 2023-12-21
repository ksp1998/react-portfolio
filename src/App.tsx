import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects />
        <About />
      </main>
    </>
  );
};

export default App;
