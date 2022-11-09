import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";
import { AiFillStar } from "react-icons/ai";

const ServiceDetail = () => {
  useTitle("Details");
  const { name, img, description, ratings, _id, price } = useLoaderData();
  return (
    <div>
      <div className="text-center mb-10 rounded-2xl border-4 bg-slate-300 p-5">
        <h1 className="text-5xl font-bold mb-4">{name}</h1>
        <img
          className="flex mb-5 justify-center w-full rounded-2xl"
          src={img}
          alt=""
        />
        <p>{description}</p>
        <div className="flex font-bold justify-around mt-5 bg-slate-200 p-3 rounded-xl">
          <p>Price: ${price}</p>
          <p className="flex items-center">
            Ratings: {ratings}{" "}
            <AiFillStar className="text-yellow-500 ml-2"></AiFillStar>
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center font-bold mb-4">
          Reviews on this service
        </h1>
      </div>
    </div>
  );
};

export default ServiceDetail;
