import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Category = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (index) => {
    setActiveTabIndex(index);
  }

  return (
    <div className='my-10 text-center ' >
      <h1 className='text-3xl font-bold'>Shop by category</h1>


      <div className="container mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center m-4">
            <Tab className={`p-2 rounded-md mr-4 ${tabIndex === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`} >Sport Car</Tab>
            <Tab className={`p-2 rounded-md mr-4 ${tabIndex === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>Police Car</Tab>
            <Tab className={`p-2 rounded-md mr-4 ${tabIndex === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>Truck</Tab>
          </TabList>
          <TabPanel>
           <div className="flex">
           <div className="card w-60 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/sVRRvJM/image.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Hexo Car!</h2>
              <p>Price: $1200</p>
              <p>Rating:4.5</p>
             
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="card w-60 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/rHGwGsr/image.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">sport Car!</h2>
              <p>Price: $1400</p>
              <p>Rating:4.5</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
           </div>
          </TabPanel>

          <TabPanel>
          <div className="flex">
           <div className="card w-60 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/CPLyrBK/image.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Police Car!</h2>
              <p>Price: $1800</p>
              <p>Rating:4.5</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="card w-60 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/BqMp07v/image.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Polic High Car!</h2>
              <p>Price: $1400</p>
              <p>Rating:4.7</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
           </div>
          </TabPanel>

          {/* *** 33333 */}

          <TabPanel> 
          <div className="flex">
           <div className="card w-60 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/Xz6ZJyY/image.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Hexa Truck!</h2>
              <p>Price: $1400</p>
              <p>Rating:4.9</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="card w-60 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/6y1jtcN/image.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Lory Truck!</h2>
              <p>Price: $1400</p>
              <p>Rating:4.5</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
           </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>

  );
};

export default Category;