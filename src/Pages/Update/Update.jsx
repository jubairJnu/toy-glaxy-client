import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
  const toys = useLoaderData();
  const {_id, name, price, available, description } = toys;

  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const available = form.available.value;
    const description = form.description.value;
    const updatedToy = {
      price, available, description
    };
    console.log(updatedToy);
    // ****
    fetch(`http://https://toy-glaxy-server.vercel.app/mytoys/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedToy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: 'Success!',
            text: 'Toy Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
      })
  }

  return (
    <div>
      <h1>Update Of {name} </h1>
      <form onSubmit={handleUpdate}>
        <div className="md:flex space-x-3">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input type="text" defaultValue={price} name="price" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available</span>
            </label>
            <label className="input-group">
              <input type="text" defaultValue={available} name="available" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <div className="form-control md:w-full mb-10">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <label className="input-group">
            <input type="text" defaultValue={description} name="description" className="input input-bordered w-full" />
          </label>
        </div>
        <input type="submit" value="Update Toy" className="btn btn-block btn-primary" />
      </form>
    </div>
  );
};

export default Update;