import UserProfile from './User/User';
import userInfo from '../Data/user.json';
import Statistics from './Statistics/Statistics';
import dataInfo from '../Data/data.json';
import FriendList from './Friends/Friends';
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
      
      <Statistics title="Upload stats" stats={dataInfo} />
      <FriendList  friends={friends} />
    </div>
  );
};
console.log(dataInfo);
