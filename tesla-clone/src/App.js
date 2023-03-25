import Accessories from "./components/Accessories";
import Header from "./components/Header";
import Model3 from "./components/Model3";
import Models from "./components/Models";
import Modelx from "./components/Modelx";
import Modely from "./components/Modely";
import Solarpanels from "./components/Solarpanels";
import Solarroof from "./components/Solarroof";

function App() {
  return (
    <div>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <Header />
        <Model3 />
        <Modely />
        <Models />
        <Modelx />
        <Solarpanels />
        <Solarroof />
        <Accessories />
      </div>
    </div>
  );
}

export default App;
