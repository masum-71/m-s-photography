import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/UseTitle";
import Myreview from "../Myreview/Myreview";
import swal from "sweetalert";

const MyReviews = () => {
  useTitle("my reviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://photograpy-server-black.vercel.app/myreviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete this review?");
    if (proceed) {
      fetch(`https://photograpy-server-black.vercel.app/reviews/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            swal({
              title: "Deleted successfully!",
              icon: "success",
            });
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <div>
      {reviews.length === 0 ? (
        <div className="w-full h-screen text-2xl text-red-500 flex justify-center items-center">
          <h1>No reviews were added</h1>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Myreview
              key={review._id}
              review={review}
              handleDelete={handleDelete}
            ></Myreview>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
