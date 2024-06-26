import React from 'react';
import PropTypes from 'prop-types';
import './profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="profile-description">
      <img src={avatar} alt="User avatar" className="profile-avatar" />
      <p className="profile-name">{username}</p>
      <p className="profile-tag">@{tag}</p>
      <p className="profile-location">{location}</p>
    </div>

    <ul className="profile-stats">
      <li>
        <span className="profile-label">Followers</span>
        <span className="profile-quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="profile-label">Views</span>
        <span className="profile-quantity">{stats.views}</span>
      </li>
      <li>
        <span className="profile-label">Likes</span>
        <span className="profile-quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
