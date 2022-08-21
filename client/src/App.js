import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <Navbar/>
              <>
                <div className="bg-indigo-600 w-full h-screen"></div>
              </>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;