const users = [
  {
    id: 1,
    name: 'Ivan'
  },

  {
    id: 2,
    name: 'Sergey'
  }
];

const clonedUsers = JSON.parse(JSON.stringify(users));
const clonedUsers2 = [...users];

clonedUsers2[0].name = 'Alex';
clonedUsers[0].name = 'Konstantin';
console.log(users[0].name);