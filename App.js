import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import FormScreen from "./screens/FormScreen";
import RiskScreen from "./screens/RiskScreen";
import StudentsScreen from "./screens/StudentsScreen";
import { loadStudents, saveStudents } from "./utilities/storage";

const Tab = createBottomTabNavigator();

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await loadStudents();
      if (data) setStudents(data);
    }
    getData();
  }, []);

  useEffect(() => {
    saveStudents(students);
  }, [students]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Students">
          {props => (
            <StudentsScreen
              {...props}
              students={students}
              setStudents={setStudents}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Add/Edit">
          {props => (
            <FormScreen
              {...props}
              students={students}
              setStudents={setStudents}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Analytics">
          {props => <AnalyticsScreen {...props} students={students} />}
        </Tab.Screen>

        <Tab.Screen name="Risk">
          {props => <RiskScreen {...props} students={students} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

