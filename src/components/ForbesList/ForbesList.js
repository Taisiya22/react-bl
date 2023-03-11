import { ForbesItem } from './ForbesListItem/ForbesListItem';

export const ForbesList = ({ userData }) => {
  return (
    <ul>
      {userData.map(user => (
        <ForbesItem key={user.id} userData={user} />
      ))}
    </ul>
  );
};
