import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([])
    
    useEffect(() =>{
      fetch('./booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h2 className='text-4xl my-8 font-bold text-center'>Books:{books.length}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    books.map(book =><Book book={book} key={book.id}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;