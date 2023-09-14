 
import { FaDollarSign } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";

const Card = () => {
  return (
    <div className="">
      <div className="card bg-white">
        <figure className="px-4 pt-4 w-full">
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/0G8Vx2G/Rectangle-2.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold">Introduction to Algorithms</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex justify-between font-medium">
            <div className="price flex gap-1">
              <FaDollarSign />
              <p>Price : 15000</p>
            </div>
            <div className="credit flex gap-1">
              <BiBookOpen />
              <p>Credit : 1hr</p>
            </div>
          </div>
          <div className="card-actions w-full">
            <button className="btn btn-primary w-full items-center">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
