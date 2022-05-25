import React from "react"

const StarRating = ({rating,handleRating}) => {
  const stars = (n) => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= n) {
        star.push(
          <span
            key={i}
            onClick={() => handleRating(i)}
            style={{ color: "#FFD700", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else
        star.push(
          <span
            key={i}
            onClick={() => handleRating(i)}
            style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
    }
    return star;
  };
  return (
    <div>
      {stars(rating)}
    </div>
  );
  }
  StarRating.defaultProps = {
    rate: 1,
    handleRating: () => {},
  };
export default StarRating