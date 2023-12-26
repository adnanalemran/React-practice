# Course Registration App
Welcome to the Course Registration App! This application provides a seamless experience for users to register for courses, manage their selected courses, and receive notifications for various actions. Below are the key features of the project:

## Key Features
1. Course Selection & Credit Limit
Users can easily choose courses, and the app dynamically tracks their total credit hours. The system prevents users from exceeding a predefined credit limit, ensuring a smooth registration process.

2. Shopping Cart
A user-friendly shopping cart interface displays the selected courses along with their respective credit hours. This feature allows users to review their choices before finalizing their course registration.

3. User Notifications
The application enhances user experience by implementing react-toastify to provide clear and intuitive notifications. Users receive instant feedback for actions such as selecting duplicate courses or exceeding credit limits.

## State Management
useState
The useState hook is employed in the code to manage two essential state variables:

courses: This variable stores course data fetched from 'subjectData.json'. It serves as the source of available courses for users to choose from.

selectCourse: Responsible for storing the selected courses made by the user. It allows the application to keep track of the courses chosen during the registration process.

useEffect
The useEffect hook is utilized to fetch course data from 'subjectData.json' when the component mounts. The empty dependency array ensures that the data is loaded only once when the component is initially rendered. This approach enhances the efficiency of the application by ensuring that the necessary data is available when needed.
