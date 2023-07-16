import React from 'react';


const Gallery = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold my-9 '>Gallery</h1>
      <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img className='h-44' src="https://i.ibb.co/fn63nsc/1.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-44' src="https://i.ibb.co/R9yJhwC/2.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-44' src="https://i.ibb.co/SBxYkfv/3.jpg" alt="Pizza" />
  </div> 
 
  <div className="carousel-item">
    <img  className='h-44' src="https://i.ibb.co/rQtnS2L/5.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img  className='h-44' src="https://i.ibb.co/7CdBdMg/sandy-millar-nu-S2-GDp-CDo-I-unsplash.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img  className='h-44' src="https://i.ibb.co/WPWXWxP/mohit-suthar-0u-ZMa-Y-Ho4-unsplash.jpg" alt="Pizza" />
  </div> 
  
</div>
    </div>
  );
};

export default Gallery;