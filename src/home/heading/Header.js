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
        <li> <Link to="/" className="link"><li>Home</li></Link> </li>
        <li> <Link to="/about" className="link"><li>About</li></Link> </li>
        <li> <Link to="/mission" className="link"><li>Mission</li></Link> </li>
        <li> <Link to="/pages" className="link"><li>Pages</li></Link> </li>
        <li> <Link to="/support" className="link"><li>support</li></Link> </li>
        

        </ul>
        </div>
        <div className="login">
       
        <Link to="contribute"> <button className="contri"><i class="fa-solid fa-circle-dollar-to-slot"></i>Contribute</button></Link>
        <Link to="signin"> <button className="signin"><i class="fa-solid fa-right-to-bracket"></i> SignIn</button> </Link>
       
        </div>
      </div>
    </>
  );
};

export default Header;
