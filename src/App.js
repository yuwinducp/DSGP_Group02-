import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CropRecommender from "./components/CropRecommender";
import FertilizerRecommender from "./components/FertilizerRecommender";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    
      <div class="overlay">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/crop" component={CropRecommender} />

          <Route exact path="/fertilizer" component={FertilizerRecommender} />

          <Route exact path="/sign" component={SignIn} />

          <Route exact path="/whatwedo" component={WhatWeDo} />

          <Route exact path="/aboutus" component={AboutUs} />
          
        </Switch>
        <Footer />
      </Router>
      </div>
    
  );
}

export default App;
