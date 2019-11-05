import AsyncStorage from '@react-native-community/async-storage';

export const writeAndReadFromLdb = async (ldbKey, data) => {
  const existingArrayLDB = await AsyncStorage.getItem(ldbKey);
  console.log('before setting any data', existingArrayLDB);
  let array = [];
  if (!existingArrayLDB) {
    array.push(data);
  }
  if (!!existingArrayLDB) {
    array = JSON.parse(existingArrayLDB);
    array.push(data);
  }
  console.log('setting data inside ldb');
  await AsyncStorage.setItem(ldbKey, JSON.stringify(array));
  console.log('set data successfully');
  const arrayInsideAS = await AsyncStorage.getItem(ldbKey);
  console.log(arrayInsideAS, 'data read from ldb');
  return arrayInsideAS;
}

export const readFromLdb = async (ldbKey) => {
  const existingArrayLDB = await AsyncStorage.getItem(ldbKey);
  return JSON.parse(existingArrayLDB);
}

export const removeFromLdb = async (ldbKey, data) => {
  //getting data from async storage
  const existingLDBData = await AsyncStorage.getItem(ldbKey);
  const existingArrayLDB = JSON.parse(existingLDBData);

  const removeItemIndex = existingArrayLDB.findIndex(val => val.id === data.id);
  existingArrayLDB.splice(removeItemIndex, 1);
  await AsyncStorage.setItem(ldbKey, JSON.stringify(existingArrayLDB));
  return existingArrayLDB;
}
