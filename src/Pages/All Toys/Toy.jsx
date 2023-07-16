import { Link } from "react-router-dom";


const Toy = ({toy}) => {
  const {_id, name,seller,price,available,category } = toy;
  return (
    <tr>
       <td> {seller}</td>
        <td>
         {name}
          </td>
        <td>
         {category}
          </td>
        <td>
        {price}
          </td>
        <td>
        {available}
          </td>
        <td>
        <Link to="/details">
                <button className="btn btn-xs">View Details</button>
                </Link>
          </td>
      </tr>
  );
};

export default Toy;