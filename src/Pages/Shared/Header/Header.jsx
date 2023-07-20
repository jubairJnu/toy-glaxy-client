import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="drop-shadow-lg">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li>
              <Link to="/alltoys">All Toys</Link>
               
              </li>
              <li><Link to="blog">Blog</Link></li>
            </ul>
          </div>

          <Link className="flex items-center" to="/">
            <img className="w-20 h-auto" src={logo} alt="" />
            <h2>Toy Glaxy</h2>
          </Link>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li tabIndex={0}>
             <Link to ="/alltoys">All Toys</Link>
            </li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
        {user?.email ? (
            <>
              <Link className="mr-10" to="/add">
                Add Toy
              </Link>
              <Link className="mr-10" to="/mytoy">
                My Toy
              </Link>
              <button onClick={handleLogOut}>Logout</button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;