/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Cart = ({ selectCourse }) => {
  const totalCreditHours = selectCourse.reduce(
    (total, course) => total + course.credit,
    0
  );

  const remainingCreditHours = 20 - totalCreditHours;
  const remainingCreditHoursDisplay = remainingCreditHours < 0 ? 0 : remainingCreditHours;

  const totalPrice = selectCourse.reduce(
    (total, course) => total + course.price,
    0
  );

  
 

  return (
    <div>
      <div className="card bg-white">
        <div className="card-body">
          <h2 className="text-xl text-primary font-semibold py-6 border-b-2">
            Credit Hour Remaining: {remainingCreditHoursDisplay} hr
          </h2>
          <h3 className="font-bold  lg:text-xl">Selected Courses</h3>
          <ul className="list-decimal p-4">
            {selectCourse.map((course) => (
              <li key={course.id}>{course.courseName}</li>
            ))}
          </ul>
          <p className="font-semibold py-6 border-b-2 border-t-2">
            Total Credit Hour: {totalCreditHours} hr
          </p>
          <p className="py-6 font-bold">Total Price: {totalPrice} USD</p>

       
   
        </div>
      </div>
    </div>
  );
};

export default Cart;
