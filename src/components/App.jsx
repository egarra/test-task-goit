import { useState, useEffect } from 'react';
import { Container } from './Container/Container'
import { CardsList } from './CardsList/CardsList';
import users from '../data/data'

export const App = () => {
  const [followers, setFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem("followers")) ?? users.map(user => user.followers)
  });
  const [isFollow, setIsfollow] = useState(() => {
    return JSON.parse(localStorage.getItem("isFollow")) ?? users.map(user => user.isFollowedByYou)
  })
  
const UpdateUser = (name) => {
  const index = users.findIndex(user => user.user === name)

  const newFollowers = [...followers];
  const newIsfollow = [...isFollow];

  if (!isFollow[index]) {
    newFollowers[index] = followers[index] + 1
    newIsfollow[index] = true
  } else {
    newFollowers[index] = followers[index] - 1
    newIsfollow[index] = false
  }
  
  setFollowers(newFollowers)
  setIsfollow(newIsfollow)
}

useEffect(() => {
  window.localStorage.setItem("followers", JSON.stringify(followers));
  window.localStorage.setItem("isFollow", JSON.stringify(isFollow));
}, [followers, isFollow]); 

  return (
    <Container>
      <CardsList users={users} followers={followers} UpdateUser={UpdateUser} isFollow={isFollow}/>
    </Container>
  );

}
