import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);  

  useEffect(() => {
    fetch('subjectData.json')  
      .then(res => res.json())
      .then(data => setCourses(data));  
  }, []);

  return (

    <div className="p-4 mx-auto flex gap-6">
      <div
        className="grid 
    md:grid-cols-2
    lg:grid-cols-3
    w-2/3
    gap-6
    "
      >
        {courses.map((course) => (
          <Card key={course.id} course={course} />  
        ))}
      </div>

      <div
        className="grid 
    md:grid-cols-1
    lg:grid-cols-1  w-1/3"
      >
        <Cart />
      </div>
    </div>
  );
};

export default Home;
