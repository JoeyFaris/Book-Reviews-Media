import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function BookCard({book}) {

    console.log(book.img_url)

  return (
//     <div class="max-w-sm w-full lg:max-w-full lg:flex">
//   <div class="h-48 lg:h-auto lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
//       <img src={book.img_url}/>
//   </div>
//   <div class="border-r border-b border-l border-gray-50 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//     <div class="mb-8">
//       <p class="text-sm text-gray-600 flex items-center">
//         <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//           <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
//         </svg>
//         Reviews available for members only
//       </p>
//       <div class="text-gray-900 font-bold text-xl mb-1">{book.title}</div>
//       <p class="text-gray-700 text-base">{book.description}</p>
//     </div>
//     <div class="flex items-center">
//     {/* <form action="https://google.com">
//     <input type="submit" value="Go to Google" />
//         </form> */}
//         <a href={book.amazon_url}>
//         <button onClick={book.amazon_url}>
//       <img class="w-10 h-10 rounded-full mr-4" src="https://s3-symbol-logo.tradingview.com/amazon--600.png" alt="Amazon Link"/>
//       </button>
//       </a>

//       <div class="text-sm">
//         <p class="text-gray-900 leading-none">{book.author}</p>
//         <p class="text-gray-600">Recently added</p>
//       </div>
//     </div>
//   </div>
// </div>

<div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={book.img_url} alt="" />
    <div class="p-6 flex flex-col justify-start">
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
         <p class="text-gray-900 leading-none">{book.author}</p>
      <p class="text-gray-600 text-xs">Recently added</p>
      </div>
      </div>
      
    </div>
  </div>
</div>
  );
}

export default BookCard
