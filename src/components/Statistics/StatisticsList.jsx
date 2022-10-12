import PropTypes from 'prop-types';
import StatItem from './StatisticsItem';
import css from './StatisticsList.module.css';

export default function StatList({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <StatItem stats={stat} />
        ))}
      </ul>
    </section>
  );
}
