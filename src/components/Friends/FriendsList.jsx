import FriendsListItem from './FriendsListItem'
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul >
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendsListItem friends={friend}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),),
}