import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side bg-yellow-700">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">
      <li><Link to="myhome"><FaHome></FaHome>  My Home</Link></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;