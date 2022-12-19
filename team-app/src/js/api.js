const users = [
  "iswarya15",
  "nitishnivedan",
  "smriti-porwal",
  "shaksham08",
  "ap221882",
  "akshaymarch7",
];

export const getUserInfo = () =>
  Promise.all(
    users.map(async (userName) => {
      return (await fetch(`https://api.github.com/users/${userName}`)).json();
    })
  );
