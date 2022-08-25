import * as React from 'react';
import tailwindConfig from './tailwind.config';
import {useEffect, useState} from 'react'


function BookCard({book}) {
    const {id, title, description, amazon_url, img_url} = book

    function handleDelete() {
        fetch(`/books/${id}`, { method: 'DELETE' })
        .then(() => console.log('Delete Successful'));


    }


  return (
   
    
 <div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={book.img_url} alt="" />
    
    <div class="p-6 flex flex-col justify-start">
    <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Comments and reviews for members only
      </p>
      <h5 class="text-gray-900 text-xl font-medium mb-2">{book.title}</h5>
      <h5 class="text-gray-900 text-l font-medium mb-2">By: {book.author}</h5>
      <p class="text-gray-700 text-base mb-4">
        {book.description}
      </p>
     
      <div class="flex items-center justify-content ">
      <a href={book.amazon_url}>
         <button onClick={book.amazon_url}>
       <img class="w-10 h-10 rounded-full mr-4" src="https://s3-symbol-logo.tradingview.com/amazon--600.png" alt="Amazon Link"/>
       </button>
       </a>
       
       <div class="text-sm ">
       <p class="text-gray-600 text-xs">Recently added by</p>
         <p class="text-gray-900 leading-none">{book.name}</p>
         
      </div>
      <div class="text-white"> vsacdasdc</div>
      <button class="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={handleDelete}
      >Delete
  <i class="fas fa-heart"></i>
</button>

      
      </div>
      
    </div>
  </div>
</div> 
  );
}

export default BookCard
