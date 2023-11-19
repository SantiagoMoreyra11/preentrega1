import React, { useEffect, useState } from "react";
import Items from "../Components/Items/Items";
import axios from "axios";
import { useParams } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => console.log(error));
  }, []);


  

  return <Items products={products} />;
};

export default Category;
