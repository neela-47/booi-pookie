import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getWishList } from '../utilities/handleRead';
import Book from '../Home/Book';

const ReadList = () => {
    const allBooks = useLoaderData();
    const[readList, setReadList] = useState([]);
    const[wishList, setWishList] = useState([]);
    useEffect(() =>{
        const storedRead = getStoredReadList();
        const storedReadInt = storedRead.map(id => parseInt(id));
        const readBookList= allBooks.filter(book => storedReadInt.includes(book.bookId));
        setReadList(readBookList);
    },[]);

    useEffect(() =>{
       const storedWishList = getWishList();
       const storedWishListInt = storedWishList.map(id => parseInt(id));
       const wishBookList = allBooks.filter(book=> storedWishListInt.includes(book.bookId));
       setWishList(wishBookList);
    },[])

    return (
        
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Books I Read: {readList.length}</h2>
     <div className='mb-5'> {
        readList.map(book => <Book key={book.bookId} book={book}></Book>)
      }</div>
    </TabPanel>
    <TabPanel>
      <h2>My Wish List: {wishList.length}</h2>
      <div className='mb-5'> {
        wishList.map(book => <Book key={book.bookId} book={book}></Book>)
      }</div>
    </TabPanel>
  </Tabs> 
        
    );
};

export default ReadList;