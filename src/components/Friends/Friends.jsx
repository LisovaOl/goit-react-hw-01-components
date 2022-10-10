export default function FriendList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map(friend => (
          <li>
            <span>{friend.isOnline}</span>
            <img src={friend.avatar} alt={friend.name} />
            <p>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
