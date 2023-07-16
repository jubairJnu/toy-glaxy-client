import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toy from "./Toy";


const Toys = () => {
 const [toys, setToys] = useState([]);

 useEffect(()=>{
  fetch(' http://localhost:5000/add')
  .then(res => res.json())
  .then(data=>{
    console.log(data);
    setToys(data);
  })
 },[])

  return (
    <div>
     <h1 className="text-3xl text-center font-bold m-2">All Toys</h1>
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Seller</th>
        <th>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Availble</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {
        toys.map(toy => <Toy
        key={toy._id}
        toy={toy}></Toy>)
      }
      </tbody>
   
  </table>
</div>
    </div>
  );
};

export default Toys;