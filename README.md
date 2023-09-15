# Course Registration


<b>here are three key features of the project:</b>
<ol>  
<li> Course Selection & Credit Limit: Users can choose courses, and the app tracks their total credit hours, preventing them from exceeding a limit.</li>

<li>Shopping Cart: A cart displays selected courses with their credit hours for users to review.</li>

<li> User Notifications: The app uses react-toastify to provide clear notifications for actions like selecting duplicate courses or exceeding credit limits, improving the user experience.</li>

</ol>
<br/>
 In my project I have used useState and useEffect as State, their managed is given below:
<hr/>
useState:
In my code, useState is used to manage courses and selectCourse state variables.
courses stores course data fetched from 'subjectData.json'.
selectCourse stores the selected courses.
<br/>
useEffect:
In my code, useEffect fetches course data from 'subjectData.json' when the component mounts (empty dependency array).
It ensures data is loaded when the component is first rendered.