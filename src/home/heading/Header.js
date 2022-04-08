import { Link } from "react-router-dom";
import "./heading.css";
import logos from "./p2.webp";
const Header = () => {
  return (
    <>
      <div className="heading">
        <div className="logos">
        <img src={logos} alt=""/>
        </div>

        <div className="category">
        <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/mission">Our Mission</Link> </li>
        <li> <Link to="/pages">Pages</Link> </li>
        <li> <Link to="/support">support</Link> </li>
        

        </ul>
        </div>
        <div className="login">
        <button className="contri"><i class="fa-solid fa-circle-dollar-to-slot"></i> Contribute</button>
        <Link to="signin"> <button className="signin"><i class="fa-solid fa-right-to-bracket"></i> SignIn</button></Link>
       
        </div>
      </div>
    </>
  );
};

export default Header;
