import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";

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
}
