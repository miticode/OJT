import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import { Image } from 'react-bootstrap';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { getAllOurblog } from '../redux/actions/ourblog.action';
import { useSelector, useDispatch } from 'react-redux';

const OurBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ourblog, loading, error } = useSelector((state) => state.ourblog);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showLabels, setShowLabels] = useState(false);
  const [showArchive, setShowArchive] = useState(false);

  useEffect(() => {
    dispatch(getAllOurblog());
  }, [dispatch]);

  const handleBlogSingle = () => {
    navigate('/blogsingle');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const CourseCard = ({ image, title, category, views, date }) => (
    <div className="flex border p-[10px] rounded-sm shadow-md relative">
      <button className="relative w-[700px] h-full" onClick={handleBlogSingle}>
        <img
          src={image}
          alt={title}
          className="w-[650px] h-[180px] object-cover rounded-sm"
        />
      </button>
      <div className="ml-4 flex flex-col justify-between">
        <div className="flex justify-between items-center mt-2">
          <span className="text-[#686f7a] text-[12px] mb-2">
            {views} views • {date}
          </span>
        </div>
        <div className="mb-5">
          <h2 className="text-[16px] font-medium mt-1 text-black">{title}</h2>
          <p className="text-[#686f7a] font-normal text-[13px] pt-[2px]">{category}</p>
          <button className="mt-10 text-black" onClick={handleBlogSingle}>Read more</button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="relative pt-[70px] p-4 z-40 flex flex-col items-center justify-center">
        <div className="pb-2">
          <div className="flex justify-center z-50 space-x-4 text-black mt-4 relative">
            <h3 className="cursor-pointer" onClick={() => handleNavigate('/about')}>About</h3>
            <h3 className="cursor-pointer" onClick={() => handleNavigate('/blog')}>Blog</h3>
            <h3 className="cursor-pointer" onClick={() => handleNavigate('/company')}>Company</h3>
            <h3 className="cursor-pointer" onClick={() => handleNavigate('/career')}>Careers</h3>
            <h3 className="cursor-pointer" onClick={() => handleNavigate('/press')}>Press</h3>
          </div>
          <div className="relative z-10 text-center text-black pt-9">
            <h1 className="text-2xl font-bold">What others are saying</h1>
          </div>
        </div>
        <img
          className="absolute inset-0 z-0 h-[200px] w-full opacity-15"
          src={require("../assets/title_bg.jpg")}
          alt="Background Image"
        />
      </div>
      <div className="p-8 grid grid-cols-3 gap-8 mt-4">
        <div className="grid grid-cols-1 gap-8 pl-[250px]">
          <div className="flex border p-[10px] rounded-sm shadow-md bg-white relative w-[200px] h-[300px] flex-col items-center">
            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder="Enter keywords..."
                className="border border-gray-300 p-2 rounded-md w-full pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
              >
                <img
                  src={require("../assets/search.png")}
                  width={13}
                  height={13}
                  className="mb-3"
                  alt="Search"
                />
              </button>
              <hr className="my-2 w-full" />
            </div>
            <div>
              <label htmlFor="labelCheckbox" className="text-sm mb-2 text-black flex items-center">
                <span className="mr-20">Labels</span>
                <div>
                  <Checkbox id="labelCheckbox" className="mr-2" checked={showLabels} onChange={(e) => setShowLabels(e.target.checked)} />
                </div>
              </label>
            </div>
            <hr className="my-2 w-full border-gray-300" />
            <div className="">
              <label htmlFor="archiveCheckbox" className="text-sm mb-2 text-black flex items-center">
                <span className="mr-20">Archive</span>
                <div>
                  <Checkbox id="archiveCheckbox" className="mr-2" checked={showArchive} onChange={(e) => setShowArchive(e.target.checked)} />
                </div>
              </label>
            </div>
            <hr className="my-2 w-full border-gray-300" />
            <button className="bg-blue-500 h-6 mb-4 mt-2 w-40 rounded-md flex items-center justify-center">
              <FontAwesomeIcon icon={faTwitter} className="text-white mr-2" />
              <span className="text-white">Follow</span>
            </button>
            <button className="bg-blue-800 h-6 mb-4 w-40 rounded-md flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebook} className="text-white mr-2" />
              <span className="text-white">Follow</span>
            </button>
            <hr className="my-2 w-full border-gray-300" />
            <div className="text-center">
              <p className="text-black inline-block mb-2">Learn more</p>
              <a href="#" className="text-blue-400 hover:underline inline-block ml-2">Cursus Help Center</a>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-6">
          {ourblog && ourblog.length > 0 ? (
            ourblog
              .filter((blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((blog, index) => (
                <CourseCard
                  key={index}
                  image={blog.image}
                  title={blog.title}
                  category={blog.category}
                  views={blog.views}
                  date={blog.date}
                />
              ))
          ) : (
            <div>No blogs found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
