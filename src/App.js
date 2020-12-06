import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
