import React, { createContext, useContext, useState, useEffect } from "react";
import productsData from "../data/products"; // Main product list
import newArrivalsData from "../data/newArrivals"; // New arrivals list
import oversizedTeeData from "../data/oversized_tee"; // Oversized tee list
import boxTeeData from "../data/box_tee"; // Box tee list

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [oversizedTee, setOversizedTee] = useState([]);
  const [boxTee, setBoxTee] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate API loading delay (optional)
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setTimeout(() => {
        setProducts(productsData);
        setNewArrivals(newArrivalsData);
        setOversizedTee(oversizedTeeData);
        setBoxTee(boxTeeData);
        setLoading(false);
      }, 500);
    };

    loadData();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, newArrivals, oversizedTee, boxTee, loading }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
