import UserProfile from './User/User';
import user from '../user.json';

export const App = () => {
  return (
    <div>
      <UserProfile
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userAvatar={user.avatar}
        userFollowers={user.stats.followers}
        userViews={user.stats.views}
        userLikes={user.stats.likes}
      />
      ,
    </div>
  );
};
