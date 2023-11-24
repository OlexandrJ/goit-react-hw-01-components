import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friends-item">
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className="friends-avatar" src={avatar} alt="User avatar" width="48" />
      <p className="friends-name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;