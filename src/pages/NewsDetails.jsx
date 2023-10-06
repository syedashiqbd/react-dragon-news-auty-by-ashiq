import { useParams } from 'react-router-dom';
import Header from '../shared/Header';
import RightSideBar from '../shared/RightSideBar';
import Navbar from '../shared/Navbar';

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div className="max-w-[1140px] mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 mt-12">
        <div className="col-span-3">
          <h2 className="text-3xl">News Details Page</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
