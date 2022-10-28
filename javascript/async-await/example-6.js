const fetchUser = () => {
  return new Promise((resolve, reject) => {
    // 50/50 chance of error/success
    if (!Math.floor(Math.random() * 2)) {
      setTimeout(resolve, 3000, { data: { name: 'Steve', admin: !0 } });
    } else {
      setTimeout(reject, 3000, new Error('Lost connection!'));
    }
  });
};

const login = (user = {}) => {
  if (user.admin) {
    console.log(`Successfully logged in!\nWelcome back ${user.name}.`);
  } else {
    console.error('Failed to log in, please try again.');
  }
};

const useAdmin = async () => {
  let userData;
  try {
    ({ data: userData } = await fetchUser());
    console.log({ userData });
  } catch (err) {
    console.error(err);
    console.log({ userData });
  }
  login(userData);
};

console.log('Program starting..');

useAdmin();

console.log('Program complete!');
