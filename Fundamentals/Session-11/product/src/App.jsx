// import React, {useState, useEffect} from 'react'
// import "./App.css"; 
// import axios, { Axios } from "axios";
// const App = () =>  {

//   const [product,setProducts] = useState([]);
//   const [visibleCount,setVisibleCount] = useState (20);
//   const [error,setError] = useState("");


//    useEffect(()=> {
//     const fetchProducts = async () => {
//     try {
//        const res = await axios.get("https://fakestoreapi.com/products");
//        setProducts(res.data);
//     } catch (err) {
//       setError("Failed to load data");
//     }
//    };
//   fetchProducts();
  
//    }, []);

//    const showmore = ()=>{
//     setVisibleCount((prev) =>prev + 20);
//    };

//    const visibleProducts = product.slice(0, visibleCount);
//    console.log(visibleProducts);

//       return(
//         <div className= "main">
//           <h1 className="shop-title">React Shop</h1>
//           { error && <p>{error} </p>}
//           <div className='product-container'></div>
//           {visibleProducts.map((product)=>(
//             <div key={product.id} className='product-card'>
//               <img src={product.image} alt="" />
//               <h3>{product.title}</h3>
//               <p className="category">{product.category}</p>
//               <p className="price">{product.price}</p>
//             </div>
//           ))}
//           </div>

//           {visibleCount < products.length && (
//           <button onClick={showMore} className="show-more-btn">
//            Show More
//         </button>
//       )}  
//     </div>
//   );
// };

// export default App


import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from "axios";

const App = () => {
  const [product, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        setError("Failed to load data");
      }
    };
    fetchProducts();
  }, []);

  const showmore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  const visibleProducts = product.slice(0, visibleCount);

  return (
    <div className="main">
      <h1 className="shop-title">React Shop</h1>
      {error && <p>{error}</p>}
      <div className='product-container'>
        {visibleProducts.map((product) => (
          <div key={product.id} className='product-card'>
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p className="category">{product.category}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
      {visibleCount < product.length && (
        <button onClick={showmore} className="show-more-btn">
          Show More
        </button>
      )}
    </div>
  );
};

export default App;