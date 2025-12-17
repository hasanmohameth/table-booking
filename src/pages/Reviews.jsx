import React, { useState } from "react";

const sampleReviews = [
  { id: 1, name: "Alice", rating: 5, comment: "Amazing experience!" },
  { id: 2, name: "Bob", rating: 4, comment: "Great food and service." },
  { id: 3, name: "Charlie", rating: 5, comment: "Absolutely luxurious!" },
];

const Reviews = () => {
  const [stars, setStars] = useState(1);
  const [userName, setUserName] = useState("");
  const [option, setOption] = useState("");

  const increase = (e) => {
    e.preventDefault();
    if (stars < 5) setStars(stars + 1);
  };

  const decrease = (e) => {
    e.preventDefault();
    if (stars > 1) setStars(stars - 1);
  };

  const [reviews, setReviews] = useState(sampleReviews);

  const addReview = (e) => {
    e.preventDefault();
    if (!userName || !option) return;

    const newReview = {
      id: Date.now(),
      name: userName,
      rating: stars,
      comment: option,
    };

    setReviews([...reviews, newReview]);
    setUserName("");
    setOption("");
    setStars(1);
  };

  const [showAddComment, setShowAddCommment] = useState(false);

  return (
    <div className="h-screen p-8 mx-auto text-gray-900  dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500 dark:text-gray-100 bg-slate-100">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="border p-4 rounded shadow hover:shadow-lg transition max-w-xs "
          >
            <p className="font-bold">{r.name}</p>
            <p>{"⭐".repeat(r.rating)}</p>
            <p className="text-gray-400">{r.comment}</p>

          </div>
        ))}
      </div>
      <h4
        className=" flex justify-center mt-3 p-2 max-w-32 max-h-52 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
        onClick={() => setShowAddCommment(!showAddComment)}
      >
        {showAddComment ? (
          <h4 >Close </h4>
        ) : (
          "Add comment"
        )}
      </h4>
      {showAddComment && (
        <form
          className="m-5 flex flex-col max-w-52 border-2 border-solid justify-center p-4 rounded-lg"
          onSubmit={addReview}
        >
          <input
            placeholder="Your name"
            className="m-3 p-1 border rounded  dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500 dark:text-gray-100"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="Your review"
            className="m-3 p-1 border rounded  dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50 transition-colors duration-500 dark:text-gray-100"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          />

          <div className="flex justify-center items-center m-1">
            <button
              onClick={decrease}
              className=" border-2 w-6 h-6 flex justify-center items-center hover:bg-red-400 transition-all duration-300"
            >
              -
            </button>
            <span className="mx-2">{"⭐".repeat(stars)}</span>
            <button
              onClick={increase}
              className="border-2 w-6 h-6 flex justify-center items-center hover:bg-sky-400 transition-all duration-300"
            >
              +
            </button>
          </div>

          <button
            type="submit"
            className="mt-3 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default Reviews;
