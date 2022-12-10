import React from "react";

const FeaturedArticle = () => {
  return (
    <div className="featured-article d-flex justify-content-center align-items-center">
    <div className="card mb-3 w-75">
      <div className="row">
        <div className="col-md-8">
          <img
            src="/assets/park.jpg"
            alt="aa"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-4">
          <div className="card-body d-flex flex-column">
            <div className="d-flex justify-content-between">
              <small className="text-muted">Kategori</small>
              <small className="text-muted">23 Feb 2002</small>
            </div>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex mt-auto">
              <img
                src="/assets/park.jpg"
                className="rounded-circle img-thumbnail"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                }}
                alt="profile"
              />
              <div className="mx-3 my-auto">
                <p className="fw-bold p-0 m-0">author</p>
                <small>job</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FeaturedArticle;
