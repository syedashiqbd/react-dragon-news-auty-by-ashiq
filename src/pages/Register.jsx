import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(authContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password');
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-[#F3F3F3] h-[981px] grid place-items-center">
      <Navbar></Navbar>
      <div className="w-[752px] h-max mx-auto  bg-white py-[76px] px-[96px]">
        <h2 className="text-center text-4xl font-semibold">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="w-full h-[1px] bg-[#E7E7E7] my-7"></div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <div className="mt-4">
              <input type="checkbox" name="" id="" className="mr-2" />
              <span>Accept Term & Conditions</span>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Register</button>
          </div>
        </form>
        <p className="text-center">
          Already Have An Account ?{' '}
          <Link className="text-red-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
