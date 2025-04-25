import Header from "./components/Header/Header";
import Marquee from "./components/Marquee /Marquee";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      {/* <Marquee /> */}
      <div className="container">
        <Header />

        <Portfolio />
        {/* <Projects /> */}
      </div>
    </>
  );
}

export default App;
