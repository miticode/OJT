import React from 'react';
import { PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const CompanyDetails = () => {
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
  }
  const handleCareer =()=>{
    navigate("/career")
  }
  const company = [
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/about/company-1.jpg",
      title: "Punjab, India",
      address: "#1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road, 141001, LDH, Punjab, India",
      phone: "0161-1234567"
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/about/company-2.jpg",
      title: "San Francisco, CA",
      address: "586 Lorem st. 5 floor, America , San Francisco, CA 94107",
      phone: " +1 415-1234567"
    },
    {
      img: "https://gambolthemes.net/html-items/cursus-new-demo/images/about/company-3.jpg",
      title: "São Paulo, Brazil",
      address: "Lorem ipsum 589, Vila Madalena, São Paulo - SP 01443-010",
      phone: " +55-11-1234567"
    }
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
      <div className=' bg-white max-w-full h-auto py-[20px]'>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div>
            <div className="flex flex-col items-center md:items-start md:w-4/5 md:pr-8">
              <h1 className="text-3xl font-bold mb-4 text-center md:text-left text-black">Our Origins</h1>
              <div className="w-12 h-0.5 bg-red-600 mb-4 mx-auto md:mx-0"></div>
              <p className="text-center text-[#686f7a] text-[15px] md:text-left">
                Cursus was founded in 2020 by computer science instructor with a vision to provide anyone, anywhere with access to the world’s best education. Now many instructors put their courses online for anyone to take and taught more learners in a few months than they could over an entire lifetime in the classroom. Today, Cursus has expanded to reach more than 40 million people and 2,300 businesses around the world. On Cursus you can find online courses, instructors, and certificates from Cursus.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              className="py-2"
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/about/company.jpg"
              alt="Our origin"
            />
          </div>
        </div>
      </div>
      <div className="p-4 z-40 flex flex-col items-center h-auto w-full">
        <div className='relative z-10 text-center mb-8'>
          <h1 className='text-3xl font-bold text-black'>Our Offices</h1>
          <h3 className='text-gray-400'>Cursus branches around the world</h3>
          <div className="w-12 h-0.5 bg-red-600 mt-2 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl mt-3">
          {company.map((office, index) => (
            <div key={index} className="flex border p-[10px] rounded-sm shadow-md bg-white relative flex-col h-auto">
              <div className='flex relative flex-col items-center'>
              <img src={office.img} alt={office.title} className="w-[400px] h-[200px] object-cover mb-4 " />
              </div>
              <h3 className="font-bold text-black">{office.title}</h3>
              <p className="text-[#686f7a] text-[15px]">{office.address}</p>
              <p className="text-[#686f7a] text-[15px]"><PhoneOutlined /> {office.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails;
