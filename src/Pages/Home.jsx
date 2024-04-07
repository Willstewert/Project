import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProdcuts();
  }, []);
  const getProdcuts = async () => {
    await axios.get("http://localhost:5000/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  return (
    <div>
      {products.map((items, i) => (
        <div className="" key={i}>
          {items.name}
        </div>
      ))}
    </div>
  );
};

export default Home;
