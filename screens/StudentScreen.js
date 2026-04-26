import { useState } from "react";
import { Button, FlatList, View } from "react-native";
import SearchBar from "../components/SearchBar";
import StudentCard from "../components/StudentCard";

export default function StudentsScreen({
  students,
  setStudents
}) {
  const [search, setSearch] = useState('');
  const [sortHigh, setSortHigh] = useState(true);

  const deleteStudent = (id) => {
    const updated = students.filter(s => s.id !== id);
    setStudents(updated);
  };

  let filtered = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.id.toLowerCase().includes(search.toLowerCase()) ||
    student.major.toLowerCase().includes(search.toLowerCase())
  );

  filtered.sort((a, b) =>
    sortHigh
      ? Number(b.gpa) - Number(a.gpa)
      : Number(a.gpa) - Number(b.gpa)
  );

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <Button
        title="Toggle GPA Sort"
        onPress={() => setSortHigh(!sortHigh)}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentCard
            student={item}
            onDelete={deleteStudent}
          />
        )}
      />
    </View>
  );
}