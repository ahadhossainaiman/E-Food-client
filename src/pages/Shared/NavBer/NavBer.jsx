import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import useCart from "../../../hook/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  console.log(user?.email);
  const navOptions = (
    <>
      <li className="my-auto">
        <Link to="/">Home</Link>
      </li>
      <li className="my-auto">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="my-auto">
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaShoppingCart />
            <div className="badge badge-secondary">{cart?.length || 0}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <p className="bg-orange-500 my-auto">{user?.email}</p>
          </li>
          <li>
            {" "}
            <button
              onClick={handleLogOut}
              className="btn btn-ghost pt-4 mx-5 my-auto bg-red-500"
            >
              LogOut
            </button>
          </li>

          <img
            className="w-10 h-10 rounded-full my-auto"
            src={user?.photoURL}
            alt=""
          />
        </>
      ) : (
        <>
          <li className="my-auto">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-5 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">E-Food</a>
        </div>
        <div className="navbar-center hidden lg:flex mr-10 align-middle">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
