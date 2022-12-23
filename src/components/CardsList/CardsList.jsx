import { CardListItem } from 'components/CardListItem/CardListItem';
import { UsersList } from './CardsList.styled'

export const CardsList = ({ users, UpdateUser, followers, isFollow }) => {
  return (
    <UsersList >
      {users.map(({ id, user, tweets, avatar }, i) => {
        return (
            <CardListItem
            key={id}
            user={user}
            tweets={tweets}
            followers={followers[i]}
            avatar={avatar}
            UpdateUser={UpdateUser}
            isFollow={isFollow[i]}
            />
        )
      })}
    </UsersList>
  );
};
