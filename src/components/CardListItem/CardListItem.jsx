import {
  UserCard,
  UserAvatar,
  Btn,
  Text,
  UserAvatarWrapper,
  UserDiv,
  ListInfo,
  BtnFollowed,
  LogoImg
} from './CardListItem.styled';
import Logo from '../../Logo.png'
export const CardListItem = ({
  user,
  tweets,
  followers,
  avatar,
  UpdateUser,
  isFollow
}) => {
    
  return (
    
    <UserCard>
    <LogoImg src={Logo} alt='logo'/>
      <UserAvatarWrapper>
        <UserAvatar src={avatar} alt={user} />
      </UserAvatarWrapper>
      <UserDiv></UserDiv>
      <ListInfo>
        <Text>{user}</Text>
        <Text>{tweets} tweets</Text>
        <Text>{followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} followers</Text>
      </ListInfo>
      {!isFollow ?<Btn
        onClick={() => UpdateUser(user)}
      >
        Follow
      </Btn> : <BtnFollowed
        onClick={() => UpdateUser(user)}
      >
        Following
      </BtnFollowed> }
      
    </UserCard>
  );
};
