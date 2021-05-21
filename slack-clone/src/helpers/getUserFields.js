const keys = ["displayName", "email", "uid", "photoURL"];

export default function getUserFields(user) {
  const userCopy = {};
  keys.forEach(key => (userCopy[key] = user[key]));
  return userCopy;
}
