import { Link } from "react-router-dom";
import userLogo from "../assets/user.png"

const Navber = () => {
  return (
    <div className="flex justify-between mt-6 items-center">
      <div></div>
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/career"}>Career</Link>
      </div>
      <div className="flex gap-3">
        <img src={userLogo} alt="" />
        <button className="bg-[#d72050] py-2 px-3 font-bold text-white rounded-lg">Login</button>
      </div>
    </div>
  );
};

export default Navber;