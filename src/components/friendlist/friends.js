import React from 'react';
import PropTypes from 'prop-types';
import './friends.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className="friend-item">
        <span
          className="friend-status"
          style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        ></span>
        <img
          className="friend-avatar"
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className="friend-name">{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
