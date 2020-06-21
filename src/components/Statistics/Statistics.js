import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.scss';
import { randomColorGenerator } from '../helper/helper';

const Statistics = ({ title, stats }) => (
  <section className="Statistics">
    {title && <h2 className="Statistics__title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className="stat-list__item"
          style={{ backgroundColor: randomColorGenerator() }}
        >
          <span className="stat-list__label">{label}</span>
          <span className="stat-list__percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
