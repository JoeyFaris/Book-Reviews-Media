import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/LogIn";
import Signup from "./components/Signup";
import BooksContainer from "./components/BooksContainer";
import BookCard from "./components/BookCard";

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
          <Route path="/login"><Login/></Route>
          <Route path='/signup'><Signup/></Route>
          <Route path="/">
            <Navbar/>
            <BookCard/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;