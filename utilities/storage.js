import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'STUDENT_RECORDS';

export const saveStudents = async (students) => {
  try {
    const jsonValue = JSON.stringify(students);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.log('Error saving students:', error);
  }
};

export const loadStudents = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log('Error loading students:', error);
    return [];
  }
};

export const clearStudents = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.log('Error clearing students:', error);
  }
};
