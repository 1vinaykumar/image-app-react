import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImageDetail from "./pages/ImageDetail";
import AddImage from "./pages/AddImage";
import MainNav from "./components/MainNav";
import { createContext, useContext, useState } from "react";

const stateContext = createContext({
  images: [],
});

export const useAppState = () => useContext(stateContext);

function App() {
  const state = useState({
    images: [],
  });
  return (
    <stateContext.Provider value={state}>
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/show/:id" component={ImageDetail} />
          <Route exact path="/new" component={AddImage} />
        </Switch>
      </Router>
    </stateContext.Provider>
  );
}

export default App;
