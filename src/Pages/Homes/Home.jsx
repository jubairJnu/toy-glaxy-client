import React from 'react';
import Category from '../category/category';
import banner from '../../assets/Banner_Mesa de trabajo 1.png'
import Gallery from '../Gallery/Gallery';

const Home = () => {
  return (
    <div>
      <div>
        <img className='w-full p-10 rounded-lg' src={banner} alt="" />
      </div>
      <Gallery></Gallery>

      <Category></Category>
    </div>
  );
};

export default Home;