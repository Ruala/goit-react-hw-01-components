import React from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="Profile">
    <div className="Profile__description">
      <img
        className="Profile__avatar"
        src={avatar}
        alt="user avatar"
        width="128"
      />
      <p className="Profile__name">{name}</p>
      <p className="Profile__tag">@{tag}</p>
      <p className="Profile__location">{location}</p>
    </div>

    <ul className="Profile__stats">
      <li className="Profile__item">
        <span className="Profile__label">Followers</span>
        <span className="Profile__quantity">{stats.followers}</span>
      </li>
      <li className="Profile__item">
        <span className="Profile__label">Views</span>
        <span className="Profile__quantity">{stats.views}</span>
      </li>
      <li className="Profile__item">
        <span className="Profile__label">Likes</span>
        <span className="Profile__quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
