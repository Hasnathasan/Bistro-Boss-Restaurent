import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import "./DashBoard.css";

const DashBoard = () => {
  const isAdmin = true;
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-circle drawer-button lg:hidden rotate-90 absolute top-2 left-3"
        >
          |||
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-yellow-700">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 space-y-1">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="myhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="mycart">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhomed">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhomee">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhomew">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhometr">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhomefd">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="allusers">All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="myhome">
                  <FaHome></FaHome> My Home
                </NavLink>
              </li>
              <li>
                <NavLink to="mycart">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhomed">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhomee">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhomew">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhometr">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhomefd">Sidebar Item 2</NavLink>
              </li>
              <li>
                <NavLink to="myhomesd">Sidebar Item 2</NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salads">Order</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
