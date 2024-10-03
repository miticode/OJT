import React from 'react';
import { faMobileScreen, faUser, faCertificate, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

const About = () => {
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
  const handleCareer =()=> {
    navigate("/career")
  }
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
      <div className="p-4 z-40 flex flex-col items-center h-auto w-full">
        <div className='relative z-10 text-center mb-8'>
          <h1 className='text-3xl font-bold text-black'>Our Features</h1>
          <h3 className='text-gray-400'>On Cursus, you have access to:</h3>
          <div className="w-12 h-0.5 bg-red-600 mt-2 mx-auto"></div>
        </div>
        <div className="flex justify-around w-full">
          <div className="flex flex-col items-center text-center max-w-xs">
            <FontAwesomeIcon icon={faMobileScreen} className="text-black text-4xl mb-2" />
            <span className="text-black font-semibold">Mobile Learning</span>
            <p className="text-gray-400 mt-2">Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <FontAwesomeIcon icon={faUser} className="text-black text-4xl mb-2" />
            <span className="text-black font-semibold">Academic & Technical Support</span>
            <p className="text-gray-400 mt-2">Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <FontAwesomeIcon icon={faCertificate} className="text-black text-4xl mb-2" />
            <span className="text-black font-semibold">Sharable Certificates</span>
            <p className="text-gray-400 mt-2">Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <FontAwesomeIcon icon={faGlobe} className="text-black text-4xl mb-2" />
            <span className="text-black font-semibold">An Inclusive Experience</span>
            <p className="text-gray-400 mt-2">Quisque nec volutpat sem. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
      </div>
      <div className=' bg-white max-w-full h-auto'>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="flex flex-col items-center md:items-start md:w-1/2 md:pr-8">
            <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Our Story</h1>
            <div className="w-12 h-0.5 bg-red-600 mb-4 mx-auto md:mx-0"></div>
            <p className="text-center text-gray-600 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vel dolor id ultrices. Proin a magna at mi pretium pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis augue. Nam vitae purus placerat, hendrerit nisl id, finibus magna. Etiam pharetra gravida ornare. Donec sagittis, ipsum in egestas egestas, dui lorem sollicitudin justo, ut ullamcorper velit neque eu velit. Ut et fringilla elit. Mauris augue augue, auctor a blandit ac, convallis eget neque. Curabitur in ante ante. Nullam laoreet tempus erat at ornare. In nisl nisi, dapibus eget facilisis sit amet, commodo quis nibh.
            </p>
          </div>
          <div className="flex-shrink-0 md:w-1/2">
            <img
              className="p-2"
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/about/stroy_img.png"
              alt="Our Story"
            />
          </div>
        </div>
      </div>
      <div className="max-w-full h-[220px]">
        <div className="relative z-10 text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Our Global Reach</h1>
          <h3 className="text-gray-400">
            Cursus is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.
          </h3>
          <div className="w-12 h-0.5 bg-red-600 mt-2 mx-auto"></div>
        </div>
        <div className="p-4 z-40 flex flex-wrap justify-center items-center h-auto w-full">
          <div className="flex flex-col items-center text-center max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/6">
            <h1 className="text-black text-4xl mb-2">25K</h1>
            <span className="text-gray-400 font-semibold">Instructors</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/6">
            <h1 className="text-black text-4xl mb-2">95K</h1>
            <span className="text-gray-400 font-semibold">Courses</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/6">
            <h1 className="text-black text-4xl mb-2">40M</h1>
            <span className="text-gray-400 font-semibold">Course enrollments</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/6">
            <h1 className="text-black text-4xl mb-2">50+</h1>
            <span className="text-gray-400 font-semibold">Languages</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/6">
            <h1 className="text-black text-4xl mb-2">595+</h1>
            <span className="text-gray-400 font-semibold">Membership Partners</span>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs w-full md:w-1/2 lg:w-1/3 xl:w-1/6">
            <h1 className="text-black text-4xl mb-2">295</h1>
            <span className="text-gray-400 font-semibold">Countries</span>
          </div>
        </div>
      </div>
      <div className=' bg-white max-w-full h-auto'>
        <div className="relative z-10 text-center mb-8">
            <h1 className="text-3xl font-bold text-black">Meet Our Team</h1>
            <h3 className="text-gray-400">
            Cursus is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.
            </h3>
            <div className="w-12 h-0.5 bg-red-600 mt-2 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="flex flex-col items-center md:items-start md:w-1/2 md:pr-8">
            <p className="text-center text-gray-600 md:text-left">
            Morbi eget elit eget turpis varius mollis eget vel massa. Donec porttitor, sapien eget commodo vulputate, erat felis aliquam dolor, non condimentum libero dolor vel ipsum. Sed porttitor nisi eget nulla ullamcorper eleifend. Fusce tristique sapien nisi, vel feugiat neque luctus sit amet. Quisque consequat quis turpis in mattis. Maecenas eget mollis nisl. Cras porta dapibus est, quis malesuada ex iaculis at. Vestibulum egestas tortor in urna tempor, in fermentum lectus bibendum. In leo leo, bibendum at pharetra at, tincidunt in nulla. In vel malesuada nulla, sed tincidunt neque. Phasellus at massa vel sem aliquet sodales non in magna. Ut tempus ipsum sagittis neque cursus euismod. Vivamus luctus elementum tortor, ac aliquet dolor vehicula et.
            </p>
            <button className="mt-10 bg-red-500 text-white px-10 py-1.5 hover:bg-red-600 transition duration-300">Join Our Team</button>
          </div>
          <div className="flex-shrink-0 md:w-1/2">
            <img
              className="p-2"
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/about/team.jpg"
              alt="Team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
