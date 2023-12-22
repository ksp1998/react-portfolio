import About from "./components/About";
import Footer from "./components/Footer";
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
        <Footer />
      </main>
    </>
  );
};

export default App;
