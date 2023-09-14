import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);

  useEffect(() => {
    fetch('subjectData.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    if (selectCourse.some((selected) => selected.id === course.id)) {
      toast.error('This course is already selected.');
      return;
    }

    const totalCreditHours = selectCourse.reduce(
      (total, selected) => total + selected.credit,
      course.credit
    );

    if (totalCreditHours >= 20) {
      toast.error('No more credit can be taken. Total credit hours reached 20.');
      return;
    }

    setSelectCourse([...selectCourse, course]);
  };

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
        lg:grid-cols-1 w-1/3"
      >
        <Cart selectCourse={selectCourse} />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Home;
