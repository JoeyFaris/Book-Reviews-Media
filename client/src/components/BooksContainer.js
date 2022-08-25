import * as React from 'react';
import BookCard from './BookCard';
import { Grid } from '@mui/material';


function BooksContainer({books}) {

console.log(books)
    
   const renderBooks = books.map((book) => {
        return (
            <BookCard
            key={book.id}
            title={book.title}
            book={book}
            />
        )
    })
  

    
    return (
      <div className="mt-3 grid grid-cols-3 gap-4 bg-indigo-500 md:absolute md-20 w-250 mt-30 ml-50">
         {renderBooks}
         </div>
         
  );
        
}

export default BooksContainer