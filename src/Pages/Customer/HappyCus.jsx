import React from 'react';

const HappyCus = ({customer}) => {
  const {img}=customer;
  return (
  
  <div className="card  h-auto bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
    </div>
  );
};

export default HappyCus;