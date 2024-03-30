import React from "react";

function TravelBlog(props) {
  return (
    <div className="place">
      <h1 className="place-header">{props.placeHeading}</h1>
      <div className="photo-row">
        <img className="photo" src={props.placeImg1} alt="Place 1" />
        <img className="photo" src={props.placeImg2} alt="Place 2" />
        <img className="photo" src={props.placeImg3} alt="Place 3" />
      </div>
      <p className="place-text">{props.placeDescription}</p>
    </div>
  );
}

export default TravelBlog;
