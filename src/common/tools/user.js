import AsyncStorage from '@react-native-community/async-storage';

export const register = async user => {
  try {
    await AsyncStorage.setItem(`@${user.password}${user.email}`, JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
};
