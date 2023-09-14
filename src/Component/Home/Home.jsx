import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectCourse,setSelectCourse] = useState([]); 

  useEffect(() => {
    fetch('subjectData.json')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
 
    if (selectCourse.some((selected) => selected.id === course.id)) {
      window.alert("This course is already selected.");
      return;
    }
  
    const totalCreditHours = selectCourse.reduce(
      (total, selected) => total + selected.credit,
      course.credit
    );
  
    if (totalCreditHours > 20) {
      window.alert("No more credit can be taken. Total credit hours reached 20.");
      return;
    }
  
    setSelectCourse([...selectCourse, course]);
  }
  
  
  
  return (
    <div className="p-4 mx-auto flex gap-6">
      <div
        className="grid 
        md:grid-cols-2
        lg:grid-cols-3
        w-2/3
        gap-6"
      >
        {courses.map((course) => (
          <Card
            key={course.id}
            course={course}
            onSelectCourse={handleSelectCourse}  
          />
        ))}
      </div>

      <div
        className="grid 
        md:grid-cols-1
        lg:grid-cols-1  w-1/3"
      >
        <Cart 
        selectCourse={selectCourse}
        />
      </div>
    </div>
  );
};

export default Home;
