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

// StatList.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({

//     })
//   ),
// };

//export default function Statistics({ title, stats }) {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <ul>
//         {stats.map(stat => (
//           <li key = {stat.id}>
//             <span>{stat.label}</span>
//             <span>{stat.percentage}%</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
