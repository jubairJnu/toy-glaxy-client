import Swal from "sweetalert2";

const AddToy = () => {
  const handleAdd=event=>{
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const email = form.email.value;
    const seller = form.seller.value;
    const price  = form.price.value;
    const available = form.available.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const name = form.name.value;
    const description = form.description.value;
    const newCar={
      photo,name,email,seller,price,available,category,rating,description
    };
    console.log(newCar);
    // ****
    fetch('https://toy-glaxy-server.vercel.app/add',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(newCar)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        form.reset();
      }
    })
  }
  return (
    <div className="my-5">
      <h1 className='text-3xl font-bold text-center'>Add A Toy</h1>

  <form onSubmit={handleAdd} >
<div className="md:flex">
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <label className="input-group">
        <input  type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
  </label>
</div>
  <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
        <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
  </label>
</div>
</div>
<div className="md:flex">
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Seller Name</span>
  </label>
  <label className="input-group">
        <input  type="text" placeholder="Seller Name" name="seller" className="input input-bordered w-full" />
  </label>
</div>
  <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <label className="input-group">
        <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" />
  </label>
</div>
</div>
<div className="md:flex">
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
        <input  type="text" placeholder="Price" name="price" className="input input-bordered w-full" />
  </label>
</div>
  <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Available</span>
  </label>
  <label className="input-group">
        <input type="text" placeholder="Available" name="available" className="input input-bordered w-full" />
  </label>
</div>
</div>
<div className="md:flex">
<div className="form-control md:w-1/2">
<label className="label">
    <span className="label-text">Pick Category</span>
  </label>
  <div className="input-group">
    <select name="category" className="select select-bordered w-full">
      <option disabled selected>Pick category</option>
      <option>Sport</option>
      <option>Police</option>
      <option>Truck</option>
    </select>
    
  </div>
</div>
  <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Rating</span>
  </label>
  <label className="input-group">
        <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
  </label>
</div>
</div>
<div className="form-control md:w-full mb-10">
  <label className="label">
    <span className="label-text">Description</span>
  </label>
  <label className="input-group">
        <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
  </label>
</div>
<input type="submit" value="Add A Toy"  className="btn btn-block btn-info" />
  </form>
    </div>
  );
};

export default AddToy;