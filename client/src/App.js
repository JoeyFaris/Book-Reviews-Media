import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/LogIn";
import Signup from "./components/Signup";
import BooksContainer from "./components/BooksContainer";
import AddBook from "./components/AddBook";


export default function App() {
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState(false)
  const setUser = (user) => setCurrentUser(user)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);
  


 


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login"><Login setuser={setUser}/></Route>
          <Route path='/signup'><Signup setuser={setUser}/></Route>
          <Route path='/addbook'><AddBook /></Route>
          <Route path="/">
            <Navbar/>
            <BooksContainer books={books}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

