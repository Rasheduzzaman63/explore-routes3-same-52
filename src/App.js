import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Main from './Layout/Main';
import Products from './components/Products/Products';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
      {path: '/', element: <Main></Main>, children:[
      {path:'/', element:<Home></Home>},
      {path:'/home', element:<Home></Home>},
      {path: '/about', element: <About></About>},
      {path: 'products',
        loader: async() => {
          return fetch('https://jsonplaceholder.typicode.com/posts');
        },
      element: <Products></Products>},
      {path:'/products/:productsId',
      loader:async({params})=>{
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.productsId}`)
      },
        element:<PostDetails></PostDetails>
    },



      {path: 'friends',
      loader: async() => {
        return fetch('https://jsonplaceholder.typicode.com/users');
      },
      element: <Friends></Friends>},
      {path:'/friend/:friendId',
      loader: async({params})=> {
        // console.log(params)
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element: <FriendDetails></FriendDetails>},
      {path: '*', element: <div><h4>Error 404 / this page is out of route</h4></div>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
