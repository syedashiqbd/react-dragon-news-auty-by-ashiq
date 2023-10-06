import moment from 'moment/moment';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="mt-12  ">
      <img className="mx-auto mb-5" src={logo} />
      <p className="text-[#706F6F] text-lg text-center">
        Journalism Without Fear or Favour
      </p>
      <p className="text-[#706F6F] text-xl font-medium text-center mt-3 mb-7">
        <span className="text-[#403F3F]">{moment().format('dddd, ')}</span>
        {moment().format('MMMM Do, YYYY')}
      </p>
    </div>
  );
};

export default Header;
