import PropTypes from 'prop-types';
import css from './StatisticsList.module.css';

export default function StatItem({ stats }) {
  return (
    <li
      key={stats.id}
      className={css.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}%</span>
    </li>
  );
}
StatItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
    id: PropTypes.string.isRequired,
  }),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
