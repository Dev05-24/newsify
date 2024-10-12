import React from "react";

const Card = (props) => {
  // console.log(data);
  return (
    <div className="card-container">
      {props.data.map((currItem, index) => {
        if (!currItem.urlToImage) {
          return;
        } else {
          return (
            <div className="card">
              <div className="card-img">
              <img src={currItem.urlToImage} /></div>
              <div className="cardContent">
                <a onClick={() => window.open(currItem.url)} className="card-title">{currItem.title.slice(0,25)+"..."}</a>
                <p className="card-desc">{currItem.description.slice(0,110)+"..."}</p>
                <button onClick={() => window.open(currItem.url)}>
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
