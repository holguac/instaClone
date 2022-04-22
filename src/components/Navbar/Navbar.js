import "./Navbar.css";
import logo from "../../images/logo.png";
// import profilePic from "../../images/picprofile.jpeg";
import { BsFillHouseDoorFill } from "react-icons/bs/";
import { FiSend } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { AiOutlineCompass } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";


const Nav = () => {
return (
    <div className="nav">
      <img src={logo} alt="instagram logo" />
      <div className="search">
        <input placeholder="Search" />
      </div>
          <div className="icons">
            <a href="/">
            <BsFillHouseDoorFill style={{ color: "black", fontSize: "25px" }} />
            </a>
            <a href="/">
            <FiSend style={{ color: "black", fontSize: "25px" }} />
            </a>
            <a href="/">
            <CgAddR style={{ color: "black", fontSize: "25px" }} />
            </a>
            <a href="/">
            <AiOutlineCompass style={{ color: "black", fontSize: "25px" }} />
            </a>
            <a href="/">
            <FiHeart style={{ color: "black", fontSize: "25px" }} />
            </a>
              </div>
              {/* <img className="pic" src={profilePic } alt="profile pic" /> */}
    </div>
  )
};
 
export default Nav;
