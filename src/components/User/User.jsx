export default function UserProfile({
  userName,
  userTag,
  userAvatar,
  userLocation,
  userFollowers,
  userViews,
  userLikes,
}) {
  return (
    <div>
      <div>
        <img src={userAvatar} alt={userTag} width="100px" />
        <p>{userName}</p>
        <p>@{userTag}</p>
        <p>{userLocation}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{userFollowers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{userViews}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{userLikes}</span>
        </li>
      </ul>
    </div>
  );
}
