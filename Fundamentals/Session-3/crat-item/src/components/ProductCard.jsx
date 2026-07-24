import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ productName, price }) => {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: "16px", 
      borderRadius: "8px", 
      margin: "10px", 
      width: "200px" 
    }}>
      <h3>{productName}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

// ✅ Prop type validation
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
