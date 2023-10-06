/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const { _id, author, image_url, title, details } = news;
  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-7">
      <div className="p-6">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-5">
          {title}
        </h4>

        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={image_url} />
        </div>
        <div className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{' '}
              <Link to={`/news/${_id}`} className="text-red-500">
                Read More ...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
