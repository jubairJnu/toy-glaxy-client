import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const MyToyRow = ({mytoy, handleDelete}) => {
  const { _id, name, seller, price, available, category } = mytoy;
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
        
        <div className="flex items-center">
        <Link className="text-orange-500" to={`/details/${_id}`}>
            <FaPencilAlt/>
          </Link>
          <button onClick={()=>handleDelete(_id)} className="ml-4 text-red-500" ><FaTrashAlt/> </button>
        </div>
                 
      </td>
    </tr>

  );
};

export default MyToyRow;