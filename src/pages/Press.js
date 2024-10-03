import React from "react";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

const Press = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/about");
  };
  const handleCompany = () => {
    navigate ("/company") 
  };
  const handleOurBlog = () => {
    navigate ("/blog") 
  };
  const handlePress = () => {
    navigate ("/press") 
  };
  const handleCareer =()=>{
    navigate("/career")
  }
  const pressinfo = [
    {
      date: "March 10, 2020",
      title: "Press News Title",
      content:
        "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...",
    },
    {
      date: "March 10, 2020",
      title: "Press News Title",
      content:
        "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...",
    },
    {
      date: "March 10, 2020",
      title: "Press News Title",
      content:
        "Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...",
    },
  ];
  return (
    <div>
      <div className="relative pt-[70px] p-4 z-40 flex flex-col items-center justify-center">
        <div className="pb-2">
          <div className="flex justify-center z-50 space-x-4 text-black mt-4 relative">
            <h3 className=" cursor-pointer"  onClick={handleAbout}>About</h3>
            <h3 className="" onClick={handleOurBlog}>Blog</h3>
            <h3 className="" onClick={handleCompany}>Company</h3>
            <h3 className="" onClick={handleCareer}>Careers</h3>
            <h3 className=""onClick={handlePress} >Press</h3>
          </div>
          <div className="relative z-10 text-center text-black pt-9">
            <h1 className="text-2xl font-bold ">What others are saying</h1>
          </div>
        </div>
        <img
          className="absolute inset-0 z-0 h-[200px] w-full opacity-15"
          src={require("../assets/title_bg.jpg")}
          alt="Background Image"
        />
      </div>
      <div className="p-8 grid grid-cols-3 gap-8 mt-4">
        <div className="grid grid-cols-3 gap-8 pl-[250px]">
          <div className="flex border p-[10px] rounded-sm shadow-md bg-white relative w-[200px] h-[170px] flex-col items-center">
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
              <a href="#" className="text-blue-400 hover:underline inline-block ml-2">
                Cursus Help Center
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-6">
          <h1 className="text-black text-2xl">Cursus in the News</h1>
          <div className="flex items-center">
            <p className="text-[#686f7a] text-[12px]">
              For media interviews and inquiries, please send an email to
            </p>
            <a href="#" className="text-blue-400 hover:underline inline-block ml-1 text-[12px] mb-3">
              press@cursus.com
            </a>
          </div>
          <div className="space-y-6">
            {pressinfo.map((info, index) => (
              <div key={index} className="border p-[10px] rounded-sm shadow-md">
                <div className="p-4">
                  <p className="text-sm text-gray-500">{info.date}</p>
                  <h2 className="text-lg font-semibold text-black">
                    {info.title}
                  </h2>
                  <p className="text-gray-700">{info.content}</p>
                  <button className="text-[13px] text-black">Read more</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="text-black hover:underline inline-block ml-1 text-[16px] mb-3">
              See More News
            </a>
          </div>
          <h1 className="text-black text-2xl">Press Releases</h1>
          <p className="text-[#686f7a] text-[12px]">For Release from Cursus</p>
          <div className="space-y-6">
            {pressinfo.map((info, index) => (
              <div key={index} className="border p-[10px] rounded-sm shadow-md">
                <div className="p-4">
                  <p className="text-sm text-gray-500">{info.date}</p>
                  <h2 className="text-lg font-semibold text-black">
                    {info.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="text-black hover:underline inline-block ml-1 text-[16px] mb-3">
              See More Press Releases
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
