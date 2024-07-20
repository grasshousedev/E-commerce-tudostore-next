// you are returning empty stars with half stars, make empty stars
import { IoStar, IoStarHalf } from 'react-icons/io5';

export const getRatingStars = (rating: number): React.ReactNode[] => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<IoStar key={i} />);
    } else if (i === Math.floor(rating) && rating % 1 > 0) {
      stars.push(<IoStarHalf key={i} />);
    } else {
      stars.push(<IoStar key={i} color="gray" />);
    }
  }

  return stars;
};
