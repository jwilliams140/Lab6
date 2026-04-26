import { useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { validateStudent } from '../utilities/validation';

export default function FormScreen({ students, setStudents }) {
  const emptyStudent = {
    name: '',
    id: '',
    age: '',
    gpa: '',
    major: '',
    units: '',
    gradYear: '',
    dues: ''
  };

  const [student, setStudent] = useState(emptyStudent);
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setStudent({ ...student, [field]: value });
  };

  const saveStudent = () => {
    const foundErrors = validateStudent(student, students);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) {
      Alert.alert('Validation Error', 'Please fix all fields.');
      return;
    }

    setStudents([...students, student]);
    setStudent(emptyStudent);
    setErrors({});
    Alert.alert('Success', 'Student added.');
  };

  const input = (label, field, keyboard = 'default') => (
    <>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboard}
        value={student[field]}
        onChangeText={(text) => updateField(field, text)}
      />
      {errors[field] && (
        <Text style={styles.error}>{errors[field]}</Text>
      )}
    </>
  );

  return (
    <ScrollView style={styles.container}>
      {input('Name', 'name')}
      {input('Student ID', 'id')}
      {input('Age', 'age', 'numeric')}
      {input('GPA', 'gpa', 'numeric')}
      {input('Major', 'major')}
      {input('Units', 'units', 'numeric')}
      {input('Graduation Year', 'gradYear', 'numeric')}
      {input('Unpaid Dues', 'dues', 'numeric')}

      <Button title="Save Student" onPress={saveStudent} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 6,
    borderRadius: 8
  },
  error: {
    color: 'red',
    marginBottom: 10
  }
});