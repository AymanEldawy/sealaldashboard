"use client";
import { cartList } from "@/data/dummyData";
import { createContext, useState, useEffect } from "react";

export const GlobalOptions = createContext();

export const GlobalOptionsProvider = ({ children }) => {
  const [cart, setCart] = useState();

  useEffect(() => {
    setCart(cartList)
  }, []);

  const addToCart = (item) => {
    setCart(prev => [...prev, {
      ...item
    }])
  }
  const removeFromCart = (id) => {
    setCart(prev => prev?.filter(item => item?.id !== id))
  }

  console.log(cart)

  return (
    <GlobalOptions.Provider value={{ cart, addToCart, removeFromCart, cartLength: cart?.length }}>
      {children}
    </GlobalOptions.Provider>
  );
};
