import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <iframe
            className="card-img img-fluid"
            src="public/assets/new_arrivals.jpg"
            alt="Card"
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
