import "./App.css";
import Hero from "./Hero";
import Footer from "./Footer";
import Edu from "./Edu";
import Specs2 from "./Specs2";
import Collaborate from "./Collaborate";

function App() {
  return (
    <div className="App">      
        <div>
          <Hero />
          <Edu />
          <Specs2 />
          <Collaborate />          
          <Footer />
        </div>
    </div>
  );
}

export default App;
