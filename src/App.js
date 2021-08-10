import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Banner from "./components/Banner";
import bannerImg from './img/5.jpg';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
    <Router>
      <div className="App">
        <Banner url={bannerImg}/>
        <Navbar />
        <div className="Container">
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/location" component={Location} />
            <Route path="/" component={About} />
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
