import React from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.scss';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = `Friend-list__status ${
    isOnline ? 'Friend-list__status_online' : 'Friend-list__status_offline'
  }`;

  return (
    <li className="Friend-list__item">
      <span className={status} />
      <img
        className="Friend-list__avatar"
        src={avatar}
        alt="friend avatar"
        width="48"
      />
      <p className="Friend-list__name">{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
