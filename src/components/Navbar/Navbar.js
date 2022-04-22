import "./Navbar.css";
import { BsFillHouseDoorFill } from "react-icons/bs/";
// import { IoPaperPlaneOutline } from "react-icons/io";
import { CgAddR } from "react-icons/cg";
import { AiOutlineCompass } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";


const Nav = () => {
return (
    <div className="nav">
          <div className="house">
              <BsFillHouseDoorFill />
              </div>
              {/* <div className="plane">
              <IoPaperPlaneOutline />
              </div> */}
              <div className="add">
              <CgAddR />
              </div>
              <div className="compass">
              <AiOutlineCompass />
              </div>
              <div className="heart">
              <FiHeart />
              </div>
    </div>
  )
};
 
export default Nav;
