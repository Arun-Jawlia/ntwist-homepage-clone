import "./App.css";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import MineToMill from "./components/Section1/MineToMill";
import Sustainablity from "./components/Section2/Sustainability";
import MineralProcessing from "./components/Section3/MineralProcessing";
import OilAndGas from "./components/Section4/OilAndGas";

function App() {
  return (
    <div className="App">
      {/* Home Page  */}
      <Homepage />

      {/* Section 1- Mine to Mill  */}
      <MineToMill />

      {/* Section2 -  Sustainability */}
      <Sustainablity />

      {/* Section 3 - Mineral Processing  */}
      <MineralProcessing />

      {/* Section 4 -  Oil and Gas*/}
      <OilAndGas />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
