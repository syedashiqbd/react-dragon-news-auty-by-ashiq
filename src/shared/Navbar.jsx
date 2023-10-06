import { Link } from 'react-router-dom';
import defaultAvatar from '../assets/user.png';
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';

const Navbar = ({ bgColor }) => {
  const { user, logOut } = useContext(authContext);

  const navbarStyle = {
    backgroundColor: bgColor || 'transparent',
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log('Sign-out successful.');
      })
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/career">Career</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );
  return (
    <div className="navbar p-0 mt-5 max-w-[1140px] mx-auto" style={navbarStyle}>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg text-[#706F6F]"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-[#706F6F]">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <p>{user?.email}</p>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2.5">
          <div className="w-10 rounded-full">
            <img src={defaultAvatar} />
          </div>
        </label>
        {user ? (
          <button
            onClick={handleSignOut}
            className="py-2.5 px-10 bg-[#403F3F] text-white font-medium text-xl "
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="py-2.5 px-10 bg-[#403F3F] text-white font-medium text-xl ">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
