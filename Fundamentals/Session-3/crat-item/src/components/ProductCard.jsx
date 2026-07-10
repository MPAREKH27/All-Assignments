import React from 'react'
import PropTypes from 'prop-types'   // ← this line causes 500 if package not installed

const productCard = ({ productName, price }) => {
  return (
    <div>
      <h3>{productName}</h3>
      <p>₹{price.toLocaleString()}</p>
    </div>
  )
}

productCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default productCard