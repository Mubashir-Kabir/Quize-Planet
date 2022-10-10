import "./App.css";
import { Banner } from "./Components/Banner";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
