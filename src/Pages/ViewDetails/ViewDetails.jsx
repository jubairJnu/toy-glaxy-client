import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
  const toyDetails = useLoaderData();
 const {name, photo, rating,description, available, seller, email,price} = toyDetails;
console.log(toyDetails);
  return (
    <div>
      <h1>In Details{toyDetails?.name}</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Seller Name: {seller}</p>
    <p>Seller Email: {email}</p>
    <p>Price: ${price}</p>
    <p>Rating: {rating}</p>
    <p>Available: {available}</p>
    <p> {description}</p>
    
  </div>
</div>
    </div>
  );
};

export default ViewDetails;