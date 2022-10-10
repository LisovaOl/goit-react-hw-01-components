import FriendsListItem from './FriendsListItem'

export default function FriendList({ friends }) {
  return (
    <div>
      <ul >
        {friends.map(friend => (
          <li >
            <FriendsListItem friends={friend}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

