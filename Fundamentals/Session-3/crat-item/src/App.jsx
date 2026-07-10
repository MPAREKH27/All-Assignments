// 

import React from 'react'
import ProductCard from './components/ProductCard'
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <div style={{ padding: '30px' }}>

      <h2 style={{ marginBottom: '16px' }}>Task 1 & 4 — ProductCard</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <ProductCard productName="Laptop" price={250000} />
        <ProductCard productName="iPhone 17 Pro" price={122900} />
        <ProductCard productName="iPhone 16 Pro" price={96999} />
      </div>

      <h2 style={{ marginBottom: '16px' }}>Task 2 & 3 — UserProfile</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

        {/* All props passed */}
        <UserProfile
          username="dev_rohan"
          followers={4820}
          profilePic="https://i.pravatar.cc/80?img=3"
        />

        {/* No followers & profilePic → defaultProps used */}
        <UserProfile username="unknown_user" />

      </div>
    </div>
  )
}

export default App