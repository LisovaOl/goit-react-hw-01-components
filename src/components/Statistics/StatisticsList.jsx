import PropTypes from 'prop-types';
import StatItem from './StatisticsItem';

export default function StatList({ title, stats }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <StatItem stats={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

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
