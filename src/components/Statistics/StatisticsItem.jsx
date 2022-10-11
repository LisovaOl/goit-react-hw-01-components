import PropTypes from 'prop-types';
import css from './StatisticsList.module.css'


export default function StatItem({ stats }) {
  return (
    <div className={css.stat_block}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.percentage}%</span>
    </div>
  );
}
StatItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
// export default function Statistics({ title, stats }) {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <ul>
//         {stats.map(stat => (
//           <li key={stat.id}>
//             <span>{stat.label}</span>
//             <span>{stat.percentage}%</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
