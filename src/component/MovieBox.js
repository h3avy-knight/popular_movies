import React, { useState } from "react";
import { Modal, show } from "react-bootstrap";
const MovieBox = ({
  title,
  poster_path,
  vote_average,
  relese_date,
  overview,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          className="card-img-top"
        />
        <div className="card-body">
          <button
            type="button"
            class="btn btn-outline-dark"
            onClick={handleShow}
          >
            View More
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                className="card-img-top"
                style={{ height: "400px" }}
              />
              <h3>{title}</h3>
              <h4>ImDb: {vote_average}</h4>
              <h5>Relese Date: {relese_date}</h5>
              <br />
              <h6>OverView</h6>
              <p>{overview}</p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
