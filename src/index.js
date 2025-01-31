import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import App from './App';
import About from './components/About'
import NotFound from './components/NotFound'
import User,{userDetailsLoader} from './components/User'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/user/:id',
        element:<User/>,
        loader:userDetailsLoader,
      },
      {
        path:'*',
        element:<NotFound/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
