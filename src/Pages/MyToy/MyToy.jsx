import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyRow from "./MyToyRow";


const MyToy = () => {
  const [myToys, setMyToys] = useState([]);
  const {user} = useContext(AuthContext);
  const url = `http://localhost:5000/mytoys?email=${user?.email}`

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      setMyToys(data);
      console.log(data);
    })
  },[url])

  return (
    <div>
      <h1>My Toys</h1>
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/*  */}
      {
        myToys.map(mytoy => <MyToyRow
        key={mytoy._id}
        mytoy={mytoy}>

        </MyToyRow>)
      }
      </tbody>
   
  </table>
</div>
    </div>
  );
};

export default MyToy;