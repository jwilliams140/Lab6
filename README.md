# Lab6

A summary of what the application is:
This application is designed to provide analytics on students and monitor which students are at risk based on their unpaid dues.

The main features included in the application:
- Add new students to records
- Allows student records to be viewed
- Edits existing student records
- Allows deletion of student records

Instructions on how to install dependencies:
Run these commands in your terminal after making sure you have all required files to run this application:
npm install
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install react-native-screens
npm install react-native-safe-area-context
npm install react-native-reanimated
npm install @react-native-async-storage/async-storage

Instructions on how to run or deploy the project:
Download all files from this repository and follow the instructions on how to install the application with it's dependencies.

Instructions on how to use the application:
To start the app, enter the command npx expo start into the terminal. Once the application is started, the home screen will be empty because no students are in the records. Enter the students into the records and go to each tab to observe the analytics of the students. The first tab Students shows the current students in the system and allows you to delete them. The Add/Edit tab allows you to add new students to the system. The analytics tab will show the current numbers based on total students, GPA, Students with holds, etc. The last tab will show students who are at risk because of unpaid details.


Any required packages or setup steps:
You will need the following to run the application:
- Expo
- React Native
- React Navigation
- Bottom Tabs Navigation
- AsyncStorage
- React Native Screens
- React Native Safe Area Context
- React Native Reanimated

A brief explanation of how your application handles logic consistently across views and workflows:
The file validaiton.js contains the logic for creating or editing students. The file calculations.js contains the logic for handling academic standing, enrollment load, registration hold, and risk level. The screens files import the same utility functions, allowing all logic to be used on different tabs without creating conflicts with the code.
