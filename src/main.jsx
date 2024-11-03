import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routes from './Components/Routes/Routes';
import Home from './Components/Home/Home';
import BookDetails from './Components/BookDetails/BookDetails';
import ReadList from './Components/ListedBooks/ReadList';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path: '/books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
       path: "/",
       element: <Home></Home>
      },
      {
        path: '/readList',
        element: <ReadList></ReadList>,
        loader: () =>fetch('booksData.json')
      },
      
      
     ],
    
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
