export const getUserInfo = (users) =>
  Promise.all(
    users.map(async (userName) => {
      return (await fetch(`https://api.github.com/users/${userName}`)).json();
    })
  );
