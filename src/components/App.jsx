import UserProfile from './User/User';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <UserProfile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ,
      <Statistics
        title={data.lable}
        stats={data.percentage} />,
    </div>
  );
};
