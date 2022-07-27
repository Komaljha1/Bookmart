import Header from "./components/Header";
//when we want to use jsx(<h1>  this is   <h1/>) inside the project then we import react
import React from "react";
//react router dom is for render method and render method having two arguments what should be display and where should be display
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import Category from "./components/Category";

function App() {
  return (
    //instead of writing react fragment there we wrap it by " <>  </> " this is to avoid error while excuting double div
    <React.Fragment>
      <header>
      {/* Singleton Tag or Element */}
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/add" element={<AddBook />} exact/>
          <Route path="/books" element={<Books />} exact/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/books/:id" element={<BookDetail />} exact/>
          <Route path="/category" element={<Category />} exact/>
        </Routes>
      </main>
      <div>
        <Footer />
      </div>
    </React.Fragment>);
}
export default App;




