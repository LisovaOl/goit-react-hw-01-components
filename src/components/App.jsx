import UserProfile from './User/User';
import userInfo from '../Data/user.json';
import StatList from './Statistics/StatisticsList';
import dataInfo from '../Data/data.json';
import FriendList from './Friends/FriendsList';
import friends from '../Data/friends.json';

export const App = () => {
  return (
    <div>
      <UserProfile
        name={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />

      <StatList title="Upload stats" stats={dataInfo} />
      <FriendList friends={friends} />
    </div>
  );
};
