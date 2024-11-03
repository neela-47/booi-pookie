import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId, image, bookName, author, tags, category, rating} = book
    return (
    
        <div className="card bg-base-100 w-96 shadow-xl p-6 ">
        <figure className='bg-gray-300 p-8 rounded-2xl '>
          <img
          className='h-[166px]'
            src={image}
            alt={bookName} />
        </figure>
        <div className="card-body">
         <div className='flex justify-between'>
             {
            tags.map((tag, idx) =><button key={tag.id} className="btn btn-xs text-green-600">{tag}</button>)
          }
         </div>
          <p className='font-bold text-2xl'>{bookName}</p>
          <p>By : {author} </p>
          <div className="border-2 border-dashed"></div>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline p-4">{category}</div>
            <div className='flex gap-2 items-center'>
              <p className='text-[24px]'>{rating}</p>
             <div className="rating rating-md">
             <input type="radio" name="rating-9" className="mask mask-star-2" />
            </div>
            </div>
            <Link to={`/books/${bookId}`}><button className='btn btn-active'>See More</button></Link>
          </div>
        </div>
      </div>
     
    );
};

export default Book;