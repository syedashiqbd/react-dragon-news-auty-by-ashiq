import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-[#403F3F] text-xl font-semibold mb-5">
        All Category
      </h2>
      <nav>
        {categories?.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="block p-4 pl-10 text-xl font-medium text-[#9F9F9F] "
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default LeftSideBar;
