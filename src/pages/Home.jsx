import { Link, useLoaderData } from 'react-router-dom';
import Header from '../shared/Header';
import LeftSideBar from '../shared/LeftSideBar';
import Navbar from '../shared/Navbar';
import RightSideBar from '../shared/RightSideBar';
import Marquee from 'react-fast-marquee';
import NewsCard from './NewsCard';

const Home = () => {
  const news = useLoaderData();
  // console.log(news);
  return (
    <div className="max-w-[1140px] mx-auto ">
      <Header></Header>
      <div className="bg-[#F3F3F3] p-4 flex items-center gap-5">
        <button className="py-2.5 px-6 bg-[#D72050] text-white font-medium text-xl ">
          Latest
        </button>

        <Marquee
          className="text-lg font-semibold text-[#403F3F]"
          pauseOnHover={true}
          speed={100}
        >
          <Link className="mr-10" to="/">
            I can be a React component, multiple React components, or just some
            text........
          </Link>
          <Link className="mr-10" to="/">
            I can be a React component, multiple React components, or just some
            text........
          </Link>
          <Link className="mr-10" to="/">
            I can be a React component, multiple React components, or just some
            text........
          </Link>
        </Marquee>
      </div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-16">
        <div>
          <LeftSideBar></LeftSideBar>
        </div>
        {/* News container */}
        <div className="lg:col-span-2 ">
          <h2 className="text-[#403F3F] text-xl font-semibold mb-5">
            Dragon News Home {news?.length}
          </h2>
          {news?.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
