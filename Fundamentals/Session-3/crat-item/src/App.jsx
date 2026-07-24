// import React from "react";
import PropTypes from "prop-types";

/* ------------------------------------------------------------------ */
/* 1. ProductCard — functional component with productName & price     */
/* ------------------------------------------------------------------ */
function ProductCard({ productName, price }) {
  return (
    <div style={styles.productCard}>
      <h3 style={styles.productName}>{productName}</h3>
      <p style={styles.price}>${price.toFixed(2)}</p>
    </div>
  );
}

/* 4. Prop type validation for ProductCard */
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

/* ------------------------------------------------------------------ */
/* 2 & 3. UserProfile — mini Instagram-style card with defaultProps    */
/* ------------------------------------------------------------------ */
function UserProfile({ username, followers, profilePic }) {
  return (
    <div style={styles.profileCard}>
      <img src={profilePic} alt={username} style={styles.avatar} />
      <div>
        <p style={styles.username}>@{username}</p>
        <p style={styles.followers}>
          {followers.toLocaleString()} followers
        </p>
      </div>
    </div>
  );
}

/* 3. Default props: fall back to 0 followers and a placeholder image */
UserProfile.defaultProps = {
  followers: 0,
  profilePic: "https://via.placeholder.com/80?text=User",
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.number,
  profilePic: PropTypes.string,
};

/* ------------------------------------------------------------------ */
/* Demo — renders both components with a few example inputs           */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>ProductCard</h2>
      <div style={styles.row}>
        <ProductCard productName="Wireless Headphones" price={59.99} />
        <ProductCard productName="Mechanical Keyboard" price={89.5} />
      </div>

      <h2 style={styles.heading}>UserProfile</h2>
      <div style={styles.row}>
        {/* All props supplied */}
        <UserProfile
          username="sara_codes"
          followers={12500}
          profilePic="https://i.pravatar.cc/80?img=5"
        />

        {/* followers & profilePic omitted -> defaultProps kick in */}
        <UserProfile username="new_user_23" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Styles                                                              */
/* ------------------------------------------------------------------ */
const styles = {
  page: {
    fontFamily: "system-ui, sans-serif",
    background: "#f7f7fb",
    padding: "24px",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "16px",
    color: "#555",
    margin: "20px 0 10px",
  },
  row: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },
  productCard: {
    border: "1px solid #e2e2e8",
    borderRadius: "10px",
    padding: "16px 20px",
    background: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    minWidth: "180px",
  },
  productName: {
    margin: "0 0 6px",
    fontSize: "15px",
    color: "#1a1a1a",
  },
  price: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 700,
    color: "#2563eb",
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    border: "1px solid #e2e2e8",
    borderRadius: "12px",
    padding: "12px 16px",
    background: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    minWidth: "220px",
  },
  avatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #f0f0f5",
  },
  username: {
    margin: "0 0 4px",
    fontWeight: 600,
    color: "#1a1a1a",
  },
  followers: {
    margin: 0,
    fontSize: "13px",
    color: "#666",
  },
};