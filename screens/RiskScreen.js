import { FlatList, Text, View } from "react-native";
import StudentCard from "../components/StudentCard";
import { getRisk, hasHold } from "../utilities/calculations";

export default function RiskScreen({ students }) {
  const risky = students.filter(
    s =>
      hasHold(s) ||
      getRisk(s) === 'High'
  );

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10
        }}
      >
        Students Requiring Attention
      </Text>

      <FlatList
        data={risky}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentCard student={item} />
        )}
      />
    </View>
  );
}