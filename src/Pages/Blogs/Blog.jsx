import { useState } from "react";
import {FaHeart, FaRegHeart } from "react-icons/fa";

const Blog = ({blog}) => {
  const { question, answer}=blog;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  return (
  
      <div className="card w-96 bg-primary text-primary-content mx-auto">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{question}</h2>
    <p className="text-justify">{answer}</p>
    <div
        className="mt-4 cursor-pointer"
        onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        onClick={handleFavoriteToggle}
      >
       
      {isFavorite ? <FaHeart/> : <FaRegHeart />}
       
      </div>
  </div>
</div>
    
  );
};

export default Blog;