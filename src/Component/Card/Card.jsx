/* eslint-disable react/prop-types */
 
import { FaDollarSign } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";

const Card = ({ course, onSelectCourse }) => {
  return (
    <div className="">
      <div className="card bg-white">
        <figure className="px-4 pt-4 w-full">
          <img
            style={{ width: "100%" }}
            src={course.image}
            alt={course.courseName}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold">{course.courseName}</h2>
          <p>{course.details}</p>
          <div className="flex justify-between font-medium">
            <div className="price flex gap-1">
              <FaDollarSign className="mt-1" />
              <p>Price : {course.price}</p>
            </div>
            <div className="credit flex gap-1">
              <BiBookOpen className="mt-1" />
              <p>Credit : {course.credit}</p>
            </div>
          </div>
          <div className="card-actions w-full">
            <button
              className="btn btn-primary w-full items-center"
              onClick={() => onSelectCourse(course)}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
