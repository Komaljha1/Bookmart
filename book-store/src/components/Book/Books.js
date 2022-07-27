import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:5000/books";
const fetchHandler = async() => {
   return await axios.get(URL).then((res)=> res.data)
}
const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
      fetchHandler().then(data=>setBooks(data.books));
    }, [] );
    console.log(books);
  return (
  <div className="row m-5">
      {books && 
        books.map((book, i)=>(
        <div className="col-4 mb-5"  key={i}>
          <Book book={book} />
        </div>
      ))}
  </div>
  );
};
export default Books;