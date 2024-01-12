/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../main.css";
import Navbar from "./Navbar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer,";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import { CartContext, CartProvider } from "../context/CartContext";
import Carrito from "./Carrito";
import Checkout from "./Checkout";

export const App =() => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
