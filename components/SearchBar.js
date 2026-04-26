import { StyleSheet, TextInput } from "react-native";

export default function SearchBar({
  value,
  onChangeText
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search by name, ID, or major"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1
  }
});