
export default function Statistics({title, stats}) {
    return (
      <section>
        <h2>{title}</h2>

        <ul>
          <li>
            <span>{stats.label}</span>
            <span>{stats.percentage}</span>
          </li>
          <li>
            <span>{stats.label}</span>
            <span>{stats.percentage}</span>
          </li>
          <li>
            <span>{stats.label}</span>
            <span>{stats.percentage}</span>
          </li>
          <li>
            <span>{stats.label}</span>
            <span>{stats.percentage}</span>
          </li>
        </ul>
      </section>
    );
}