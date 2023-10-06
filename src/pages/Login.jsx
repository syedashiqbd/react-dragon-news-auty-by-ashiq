import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';

const Login = () => {
  const { logIn } = useContext(authContext);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    logIn(email, password)
      .then(() => {
        e.target.reset();

        // navigate after login
        navigate(location?.state ? location.state : '/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#F3F3F3] h-screen grid place-items-center">
      <Navbar></Navbar>

      <div className="w-[752px] h-max mx-auto  bg-white py-[76px] px-[96px]">
        <h2 className="text-center text-4xl font-semibold">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="w-full h-[1px] bg-[#E7E7E7] my-7"></div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Login</button>
          </div>
        </form>
        <p className="text-center">
          Dont’t Have An Account ?{' '}
          <Link className="text-red-600" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
