import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";


const MyToy = () => {
  const [myToys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://toy-glaxy-server.vercel.app/mytoys?email=${user?.email}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMyToys(data);
        console.log(data);
      })
  }, [url])

  // delete handler
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://https://toy-glaxy-server.vercel.app/mytoys/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = myToys.filter(mytoy => mytoy._id !== id)
              setMyToys(remaining)
            }

          })
        console.log('deleted')
      }
    })
  }

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
                mytoy={mytoy}
                handleDelete={handleDelete}>

              </MyToyRow>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyToy;