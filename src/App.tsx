import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
      </main>
    </>
  );
};

export default App;
