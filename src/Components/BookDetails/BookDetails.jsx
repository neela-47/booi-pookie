import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addStoreReadList, addWishList } from '../utilities/handleRead';

const BookDetails = () => {
    const {bookId} = useParams();

    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId ===id);
    const {image, bookName, author, category, tags, yearOfPublishing,totalPages,review, rating, publisher} = book
    
    const handleRead= (id) => {
        addStoreReadList(id);
    }
    const handleWishList = (id) =>{
     addWishList(id);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col gap-11 lg:flex-row">
          <img 
            src={image}
            className="max-w-sm rounded-lg shadow-2xl ml-7 " />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6  ">
             By : {author}
            </p> <div className='border-b-2'></div>
            <p className='my-3'>
                {category}
            </p><div className='border-b-2'></div>
            <p>Review: {review}</p>
            <div className='flex gap-12 my-4'>
            <h4 className='font-bold'>Tag</h4>
            <div className='flex  '>
              {
                tags.map((tag, idx) =><div key={idx} className='ml-8 text-green-600'>#{tag}</div>)
              }
            </div>
            </div>
            <div className='border-b-2'></div>
            <div className='p-4'>
                <tbody className='p-4' >
                    <tr><th></th> <th></th></tr>
                    <tr>
                        <td>No of Pages:</td>
                        <td>{totalPages}</td>
                    </tr>
                    <tr>
                        <td>Publisher:</td>
                        <td>{publisher}</td>
                    </tr>
                    <tr>
                        <td>Year of Publishing:</td>
                        <td>{yearOfPublishing}</td>
                    </tr>
                    <tr>
                        <td>Ratings:</td>
                        <td>{rating}</td>
                    </tr>
                </tbody>
            </div>
           <div className='space-x-10'>
           <button onClick={()=>handleRead(bookId)} className="btn btn-active">Read</button>
           <button onClick={()=>handleWishList(bookId)} className="btn btn-active btn-accent">WishList</button>
           </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;