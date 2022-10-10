export default function FriendList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <li>
            <span>{friend.isOnline}</span>
            <img src={friend.avatar} alt={friend.name} width="50" />
            <p>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
