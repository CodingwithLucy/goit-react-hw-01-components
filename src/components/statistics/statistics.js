import React from 'react';
import PropTypes from 'prop-types';
import './statistics.css';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <div>
      {title && <h2 className="stat-title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="stat-item">
            <span className="stat-label">{label}</span>
            <span className="stat-percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
