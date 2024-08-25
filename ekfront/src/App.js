import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Homepage";
import TractorPage from "./pages/TractorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plow from "./pages/Plow";
import SaloMachine from "./pages/SaloMachine";
import WeedRemover from "./pages/WeedRemover";
import Sprayer from "./pages/Sprayer";
import LawnMower from "./pages/LawnMower";
import SmartWeather from "./aipages/SmartWeather";
import SoilTest from "./aipages/SoilTest";
import CropD from "./aipages/CropD";
import Login from "./pages/login";
import AddTools from "./pages/AddTools";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tractor" element={<TractorPage />} />
        <Route path="/plow" element={<Plow />} />
        <Route path="/salo-machine" element={<SaloMachine />} />
        <Route path="/weeder" element={<WeedRemover />} />
        <Route path="/sprayer" element={<Sprayer />} />
        <Route path="/lawn-mower" element={<LawnMower />} />
        <Route path="/weatherforecaster" element={<SmartWeather />} />
        <Route path="/soil-test" element={<SoilTest />} />
        <Route path="/crop-disease-test" element={<CropD />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-tools" element={<AddTools />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
