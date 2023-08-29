import Footer from "./Footer";
import Cartitems from "./cartitems";
import './App.css';
import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // data displayed in the card
  const cartdata = [
    {
      id: "1",
      name: "Fancy Product",
      price: "$40.00-$80.00",
      button: "View Options",
      isclicked: false                     
    },
    {
      id: "2",
      name: "Special Item",
      price: "$20.00 $18.00",
      button: "Add to Cart",
      isclicked: false
    },
    {
      id: "3",
      name: "Sale Item",
      price: "$50.00 $25.00",
      button: "Add to Cart",
      isclicked: false
    },
    { id: "4", name: "Popular Item", price: "$40.00", button: "Add to Cart" , isclicked: false },
    {
      id: "5",
      name: "Sale Item",
      price: "$50.00 $25.00",
      button: "Add to Cart",
      isclicked: false
    },
    {
      id: "6",
      name: "Fancy Product",
      price: "$120.00-$280.00",
      button: "View Options",
      isclicked: false
    },
    {
      id: "7",
      name: "Special Item",
      price: "$20.00 $18.00",
      button: "Add to Cart",
      isclicked: false
    },
    { id: "8", name: "Popular Item", price: "$40.00", button: "Add to Cart" , isclicked:false},
  ];

  //state to measure the number of items in the cart

  const [cartCount , setCartCount] = useState(0);
  const [cartItems , setCartItems] = useState([]);

  // Function to add the data to the cart

  const addToCart = (id) =>{
    setCartCount(cartCount + 1);
    const item = id;
    setCartItems([...cartItems , item])
    console.log(cartItems)
}

// Function to remove from the cart
const removeFromCart = (id) =>{
  setCartCount(cartCount-1);
  const result = cartItems.filter((cartItem) => cartItem !== id);
  setCartItems([result])
}
  
  return (
    <>
      <Navigation cartCount = {cartCount} cartItems = {cartItems}/>
      <Header />
      <Cartitems props={cartdata} addToCart={addToCart} removeFromCart={removeFromCart} cartItems = {cartItems} />
      <Footer /> 
    </>
  );
}

export default App;
