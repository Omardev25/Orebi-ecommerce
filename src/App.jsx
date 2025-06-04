import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Verify from './pages/Verify';
import Error from './pages/Error';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/verify" element={<Verify />}></Route>
      <Route path="/*" element={<Error />}></Route>
     
      

 
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default App