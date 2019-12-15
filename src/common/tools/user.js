import AsyncStorage from '@react-native-community/async-storage';

export const register = async user => {
  try {
    await AsyncStorage.setItem(`@${user.password}${user.email}`, JSON.stringify(user));
    return true;
  } catch (err) {
    return false;
  }
};

export const getUser = user => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(`@${user.password}${user.email}`, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
