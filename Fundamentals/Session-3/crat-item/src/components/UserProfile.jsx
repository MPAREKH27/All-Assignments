import React from "react";

const UserProfile = ({ username, followers, profilePic }) => {
  return (
    <div style={{ 
      border: "1px solid #ddd", 
      borderRadius: "10px", 
      padding: "20px", 
      textAlign: "center", 
      width: "250px", 
      margin: "10px" 
    }}>
      <img 
        src={profilePic} 
        alt={`${username}'s profile`} 
        style={{ width: "80px", height: "80px", borderRadius: "50%" }} 
      />
      <h3>{username}</h3>
      <p>{followers} Followers</p>
    </div>
  );
};

// ✅ Default props
UserProfile.defaultProps = {
  followers: 0,
  profilePic: "https://via.placeholder.com/80", // fallback image
};

export default UserProfile;
