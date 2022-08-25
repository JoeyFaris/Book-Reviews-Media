import * as React from 'react';
import BookCard from './BookCard';
import { Grid } from '@mui/material';



function BooksContainer({books}) {

    
   const renderBooks = books.map((book) => {

        return (
            <BookCard
            key={book.id}
            title={book.title}
            name={book.name}
            book={book}
            
            />
        )
    })
  


    
    return (
        <div class="py-6 bg-indigo-500 bg-auto">
      <div className="grid grid-cols-3 gap-8 bg-indigo-500 md:absolute md-20 w-250 mt-30 ml-50">
          
         {renderBooks}
         
         </div>
         </div>
         
  );
        
}

export default BooksContainer