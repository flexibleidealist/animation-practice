import { Route } from "react-router-dom"
import Home from "./screens/Home/Home.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
