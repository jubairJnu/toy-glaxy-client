import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from '../../assets/logo.jpg'
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-orange-400 mt-12 text-zinc-700">
    <div className="items-center grid-flow-col">
     <img className="w-12 rounded-md" src={logo} alt="" />
      <p>Copyright © ToyGlaxy - All right reserved</p>
    </div> 
    <div className="grid-flow-col gap-4 md:place-self-center text-lg md:justify-self-end">
      <a> <FaFacebook/>
      </a> 
      <a><FaYoutube/></a>
    </div>
  </footer>
  );
};

export default Footer;