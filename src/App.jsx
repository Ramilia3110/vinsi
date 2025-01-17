import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee /Marquee";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Marquee />
      <div className="container">
        <Header />
        <Hero />
        <Projects />
      </div>
    </>
  );
}

export default App;
