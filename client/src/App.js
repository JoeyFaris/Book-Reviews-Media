import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/LogIn";
import Signup from "./components/Signup";
import BooksContainer from "./components/BooksContainer";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState(false)
  const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login"><Login updateUser={updateUser}/></Route>
          <Route path='/signup'><Signup updateUser={updateUser}/></Route>
          <Route path="/">
            <Navbar/>
            <BooksContainer books={books}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;