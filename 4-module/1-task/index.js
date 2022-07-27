function makeFriendsList(friends) {
  let friendsList = document.createElement('ul');
  let nameFriendsList = friends.map( user => `<li>${user.firstName} ${user.lastName}</li>`).join('\n');

  friendsList.innerHTML = nameFriendsList;

  return friendsList;
}
