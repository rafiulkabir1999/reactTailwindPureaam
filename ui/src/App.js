import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Product from './components/product'
import Checkout from './components/checkout';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Routes,} from 'react-router-dom'
import Products from './components/products';
import Cart from "./components/checkout";
import Hero from './components/Hero';
import Footer from './components/Footer';
import Review from './components/review/review';
import About from './components/About'
import Order from "./components/order/Order"
import Signup from './components/user/signun'
import Login from './components/user/Login'
import Cartitem from './components/cart/cart'
import PDetails from './components/Product/details';
import Profil from './components/profile/profile'
import NotFound from './404/404';
import Dashboard from './components/admin/dashboard';
import Profile from './components/user/profile'
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './userAuth';



function App() {
  return (
 
      <div className="App ">
      
        <Nav/>
       <Routes>
         
          <Route path='/' element={<Hero/>}/>
          <Route path ='/about' element={<About/>}/>
         
          <Route path="/order" element={<Order/>}/>
         
          <Route path="/productdetails/:id" element={<PDetails/>}/>
         
          
          <Route path="/login" element={<Login/>}/>
          <Route path='/signup' element={<Signup/> }/>
          <Route path='cetegory/:item' element={<Products/> }/>

         <Route  element={<ProtectedRoute/>}>

            <Route path='/profile' element={<Profile/>} />
             <Route path='/cart' element={<Cartitem/>}/> 
             <Route path ='/review' element={<Review/>}/>

          </Route>


          <Route path="*" element={<NotFound/>} />
          
        </Routes>
        <Footer/>
        <ToastContainer/>
       </div>
       
    
  );
}

export default App;
