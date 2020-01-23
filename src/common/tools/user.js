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

export const login = async user => {
  try {
    const result = await getUser(user);
    await AsyncStorage.setItem('@loggedUser', result);
    return true;
  } catch (err) {
    return false;
  }
};

export const logout = async () => {
  try {
    const result = AsyncStorage.removeItem('@loggedUser');
    return result;
  } catch (err) {
    return false;
  }
};

export const getLoggedUser = async () => {
  try {
    const result = AsyncStorage.getItem('@loggedUser');
    return result;
  } catch (err) {
    return false;
  }
};
