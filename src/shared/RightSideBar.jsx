import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../assets/qZone1.png';
import qZone2 from '../assets/qZone2.png';
import qZone3 from '../assets/qZone3.png';

const RightSideBar = () => {
  return (
    <>
      {/* Login with part */}
      <div>
        <h2 className="text-[#403F3F] text-xl font-semibold">Login With</h2>
        <div>
          <button className="w-full border py-1 rounded mt-5 flex items-center justify-center gap-1 text-blue-700">
            <FcGoogle></FcGoogle>Login with Google
          </button>
          <button className="w-full border py-1 rounded mt-3 flex items-center justify-center gap-1">
            <BsGithub></BsGithub>Login with Github
          </button>
        </div>
      </div>
      {/* Find Us On part */}
      <div className="mt-8">
        <h2 className="text-[#403F3F] text-xl font-semibold">Find Us On</h2>
        <div>
          <button className="w-full border p-4 rounded-t mt-5 flex items-center gap-1 text-[#706F6F] font-medium">
            <span className="w-8 h-8 bg-[#F3F3F3] rounded-full flex items-center justify-center mr-3 text-blue-600">
              <FaFacebookF></FaFacebookF>
            </span>
            Facebook
          </button>
          <button className="w-full border-x p-4 flex items-center gap-1 text-[#706F6F] font-medium">
            <span className="w-8 h-8 bg-[#F3F3F3] rounded-full flex items-center justify-center mr-3 text-blue-500">
              <FaTwitter></FaTwitter>
            </span>
            Twitter
          </button>
          <button className="w-full border rounded-b p-4 flex items-center gap-1 text-[#706F6F] font-medium">
            <span className="w-8 h-8 bg-[#F3F3F3] rounded-full flex items-center justify-center mr-3">
              <FaInstagram></FaInstagram>
            </span>
            Instagram
          </button>
        </div>
      </div>

      {/* Q-Zone */}
      <div className="bg-[#F3F3F3] my-5 p-4">
        <h2 className="text-[#403F3F] text-xl font-semibold">Q-Zone</h2>
        <img src={qZone2} />
        <img src={qZone1} />
        <img src={qZone3} />
      </div>
    </>
  );
};

export default RightSideBar;
