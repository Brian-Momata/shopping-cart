import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from 'react';
import App from "./App";
import Shop from "./Shop";

const Router = () => {
  const [productsData, setProductData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCart = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Server Error.');

        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const router = createBrowserRouter([
    { 
      path: "/",
      element: < App products={productsData} cart={selectedItems} addToCart={addToCart} />
    },
    { 
      path: "/shop",
      element: < Shop products={productsData} cart={selectedItems} addToCart={addToCart} />
    },
  ]);

  return < RouterProvider router={router} />;
}

export default Router;