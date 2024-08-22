import React from 'react';

interface StarRatingProps {
  review: number;
  onReviewChange: (review: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ review, onReviewChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map(star => (
        <span
          key={star}
          onClick={() => onReviewChange(star)}
          style={{
            cursor: 'pointer',
            color: star <= review ? '#FFD700' : '#ccc', // Highlight stars based on rating
            fontSize: '24px',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
