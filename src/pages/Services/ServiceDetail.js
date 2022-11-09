import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";
import { AiFillStar } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ServiceDetail = () => {
  useTitle("Details");
  const { name, img, description, ratings, _id, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState({});

  const handleAddReview = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    const review = {
      name: user?.displayName,
      img: user?.photoURL,
      message: message,
      serviceName: name,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceName=${name}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [name, setReviews]);

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
        <p>you have {reviews.length}</p>
      </div>
      <div className="text-center border-2 bg-slate-200">
        <p className="font-bold text-2xl">Add Your Review</p>
        <form onSubmit={handleAddReview}>
          <textarea
            className=" border-4 bg-slate-100"
            name="message"
            cols="50"
            rows="5"
            placeholder="Write Your Review"
            required
          ></textarea>
          <br />
          {user?.uid ? (
            <>
              <input className="btn" type="submit" value="Add Review" />
            </>
          ) : (
            <>
              <p>
                Please{" "}
                <Link className="text-blue-600" to="/login">
                  Login
                </Link>{" "}
                to add a review
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ServiceDetail;
