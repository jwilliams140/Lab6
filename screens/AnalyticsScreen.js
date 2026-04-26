import { ScrollView, Text } from "react-native";
import { getStanding, hasHold } from "../utilities/calculations";

export default function AnalyticsScreen({ students }) {
  const total = students.length;

  const avgGpa =
    total === 0
      ? 0
      : (
          students.reduce(
            (sum, s) => sum + Number(s.gpa),
            0
          ) / total
        ).toFixed(2);

  const topStudent =
    total === 0
      ? 'None'
      : students.reduce((best, current) =>
          Number(current.gpa) > Number(best.gpa)
            ? current
            : best
        ).name;

  const honors = students.filter(
    s => getStanding(s.gpa) === 'Honors'
  ).length;

  const probation = students.filter(
    s => getStanding(s.gpa) === 'Probation'
  ).length;

  const holds = students.filter(hasHold).length;

  const majors = {};
  students.forEach(s => {
    majors[s.major] = (majors[s.major] || 0) + 1;
  });

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text>Total Students: {total}</Text>
      <Text>Average GPA: {avgGpa}</Text>
      <Text>Top Student: {topStudent}</Text>
      <Text>Honors Students: {honors}</Text>
      <Text>Probation Students: {probation}</Text>
      <Text>Students with Holds: {holds}</Text>

      <Text style={{ marginTop: 15, fontWeight: 'bold' }}>
        Students by Major
      </Text>

      {Object.keys(majors).map((major) => (
        <Text key={major}>
          {major}: {majors[major]}
        </Text>
      ))}
    </ScrollView>
  );
}