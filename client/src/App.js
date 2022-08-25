import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/LogIn";
import Signup from "./components/Signup";
import BooksContainer from "./components/BooksContainer";
import AddBook from "./components/AddBook";


function App() {
  const [books, setBooks] = useState([]);
//Grabbing initial data
  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }, []);

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json()
  //       .then((user) => {
  //         // console.log(user)
  //         setUser(user)
  //       });
  //     }
  //   });
  // }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path='/signup'><Signup  /></Route>
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

export default App;