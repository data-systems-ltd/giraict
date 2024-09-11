import React from 'react';
import { MdOutlineStarOutline } from "react-icons/md";

interface StarRatingProps {
  review: number;
  onReviewChange: (review: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ review, onReviewChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex">
      {stars.map(star => (
        <MdOutlineStarOutline
          key={star}
          onClick={() => onReviewChange(star)}
          className={`cursor-pointer text-xl ${
            star <= review ? 'text-gray-300' : 'text-yellow-600'
          } transition-colors duration-300`}
        />
      ))}
    </div>
  );
};

export default StarRating;