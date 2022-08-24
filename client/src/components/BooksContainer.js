import React from "react";
import BookCard from "./BookCard";


function BooksContainer({books}) {
    console.log(books)

    // const renderBooks = books.map((book) => {
    //     return (
    //         <BookCard
    //         key={book.id}
    //         title={book.title}
    //         author={book.author}
    //         book={book}
    //         />
    //     )
    // })
    
    return (
        <div className="bg-indigo-600 Z-998 h-screen w-full mt-30">HELLOOOOO</div>
    )
}

export default BooksContainer