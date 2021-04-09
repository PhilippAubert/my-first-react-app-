import "./App.css";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import Posts from "./components/Posts.js";
import Nav from "./components/Nav.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <Header />
          <Nav />
        </header>
        <main className="Main">
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <footer className="Footer">My Footer</footer>
      </div>
    </Router>
  );
}
