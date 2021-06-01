import React from "react";
import Navbar from "./Navbar";
import Notesapp from "./Notesapp";
import Todo from "./Todo";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col p-0">
              <Route path="/BigNote" exact component={Home} />
              <Route path="/notes" exact component={Notesapp} />
              <Route path="/todo" component={Todo} />
            </div>
          </div>
        </div>
        <Route path="/BigNote" exact component={Footer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
