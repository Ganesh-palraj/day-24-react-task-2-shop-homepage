import Footer from "./Footer";
import Cartitems from "./cartitems";
import './App.css';
import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const cartdata = [
    {
      id: "1",
      name: "Fancy Product",
      price: "$40.00-$80.00",
      button: "View Options",
    },
    {
      id: "2",
      name: "Special Item",
      price: "$20.00 $18.00",
      button: "Add to Cart",
    },
    {
      id: "3",
      name: "Sale Item",
      price: "$50.00 $25.00",
      button: "Add to Cart",
    },
    { id: "4", name: "Popular Item", price: "$40.00", button: "Add to Cart" },
    {
      id: "5",
      name: "Sale Item",
      price: "$50.00 $25.00",
      button: "Add to Cart",
    },
    {
      id: "6",
      name: "Fancy Product",
      price: "$120.00-$280.00",
      button: "View Options",
    },
    {
      id: "7",
      name: "Special Item",
      price: "$20.00 $18.00",
      button: "Add to Cart",
    },
    { id: "8", name: "Popular Item", price: "$40.00", button: "Add to Cart" },
  ];
  return (
    <>
      <Navigation />
      <Header />
      <Cartitems props={cartdata} />
      <Footer /> 
    </>
  );
}

export default App;
