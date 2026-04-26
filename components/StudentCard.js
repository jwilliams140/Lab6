import { Button, StyleSheet, Text, View } from "react-native";
import { getRisk, getStanding, hasHold } from "../utilities/calculations";

export default function StudentCard({
  student,
  onDelete,
  onEdit
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{student.name}</Text>
      <Text>ID: {student.id}</Text>
      <Text>Major: {student.major}</Text>
      <Text>GPA: {student.gpa}</Text>
      <Text>Standing: {getStanding(student.gpa)}</Text>
      <Text>Hold: {hasHold(student) ? 'Yes' : 'No'}</Text>
      <Text>Risk: {getRisk(student)}</Text>

      {onEdit && (
        <Button title="Edit" onPress={() => onEdit(student)} />
      )}

      {onDelete && (
        <Button
          title="Delete"
          color="red"
          onPress={() => onDelete(student.id)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});