import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <div>
      <span>{friends.isOnline}</span>
      <img src={friends.avatar} alt={friends.name} width="50" />
      <p>{friends.name}</p>
    </div>
  );
}

FriendList.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  
};