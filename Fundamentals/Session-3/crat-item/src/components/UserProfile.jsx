import React from 'react'
import PropTypes from 'prop-types'

const UserProfile = ({ username, followers, profilePic }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      width: '220px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <img
        src={profilePic}
        alt="profile"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #ddd'
        }}
      />
      <h3 style={{ margin: '10px 0 4px', color: '#333' }}>@{username}</h3>
      <p style={{ color: 'gray', margin: 0, fontSize: '14px' }}>
        {followers} followers
      </p>
    </div>
  )
}

// Task 3 — Default Props
UserProfile.defaultProps = {
  followers: 0,
  profilePic: 'https://via.placeholder.com/80',
}

// PropTypes validation
UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.number,
  profilePic: PropTypes.string,
}

export default UserProfile