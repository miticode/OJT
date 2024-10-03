import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CertificationCenter = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home');
  };

  const handleAddCertificates2 = () => {
    navigate("/certificationfillform");
  };

  const [certificateNumber, setCertificateNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [category, setCategory] = useState('');
  const [showDevelopmentButtons, setShowDevelopmentButtons] = useState(false);
  const [showFinanceButtons, setShowFinanceButtons] = useState(false);
  const [showDesignButtons, setShowDesignButtons] = useState(false);
  const [showMarketingButtons, setShowMarketingButtons] = useState(false);
  const [showTeachingButtons, setShowTeachingButtons] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFindCertificate = () => {
    if (!/^\d+$/.test(certificateNumber)) {
      setErrorMessage('Certificate number must be numeric.');
      return;
    }
    setErrorMessage('');
    console.log('Certificate Number:', certificateNumber);
    console.log('Full Name:', fullName);
    console.log('Category:', category);
  };

  const handleDevelopmentClick = () => {
    setShowDevelopmentButtons(!showDevelopmentButtons);
    setShowFinanceButtons(false);
    setShowDesignButtons(false);
    setShowMarketingButtons(false);
    setShowTeachingButtons(false);
  };

  const handleFinanceClick = () => {
    setShowFinanceButtons(!showFinanceButtons);
    setShowDevelopmentButtons(false);
    setShowDesignButtons(false);
    setShowMarketingButtons(false);
    setShowTeachingButtons(false);
  };

  const handleDesignClick = () => {
    setShowDesignButtons(!showDesignButtons);
    setShowDevelopmentButtons(false);
    setShowFinanceButtons(false);
    setShowMarketingButtons(false);
    setShowTeachingButtons(false);
  };

  const handleMarketingClick = () => {
    setShowMarketingButtons(!showMarketingButtons);
    setShowDevelopmentButtons(false);
    setShowFinanceButtons(false);
    setShowDesignButtons(false);
    setShowTeachingButtons(false);
  };

  const handleTeachingClick = () => {
    setShowTeachingButtons(!showTeachingButtons);
    setShowDevelopmentButtons(false);
    setShowFinanceButtons(false);
    setShowDesignButtons(false);
    setShowMarketingButtons(false);
  };

  const handleCertificateNumberChange = (e) => {
    if (/^\d*$/.test(e.target.value)) {
      setCertificateNumber(e.target.value);
    }
  };

  return (
    <div className="">
      <div className="p-4 z-50 flex items-center justify-between bg-white h-[60px] w-full fixed top-0 left-0">
        <button
          onClick={handleBackClick}
          className="bg-white text-black border border-black py-1.5 px-4 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 text-base"
        >
          Back to Cursus
        </button>
        <button onClick={handleBackClick} className="ml-22">
          <img
            className="w-[120px] h-[30px]"
            src={require("../assets/logo.png")}
            alt="hehe"
          />
        </button>
        <img
          className="w-[40px] h-[40px] rounded-full border border-gray-300 ml-8"
          src='https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg'
          alt="Cursus"
        />
      </div>

      <div className="pt-[60px] p-4 z-40 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl font-bold mt-3">Certification center</h1>
          <h3 className="text-white text-lg mt-4">For Students and Instructors</h3>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <img
              className="w-32 h-32"
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo1.svg"
              alt="Logo 1"
            />
            <img
              className="w-16 h-16"
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/plus.svg"
              alt="Plus"
            />
            <img
              className="w-32 h-32"
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/certicon.svg"
              alt="Cert Icon"
            />
          </div>
          <button className="mt-10 bg-red-500 text-white px-14 py-2 hover:bg-red-600 transition duration-300 " onClick={handleAddCertificates2}>Start Certification</button>
        </div>
            <img
              className="absolute inset-0 z-0 h-full w-full object-cover object-center filter blur-[2px] brightness-50"
              src={require("../assets/center_bg.jpg")}
              alt="Background Image"
            />
      </div>

      <div className="p-4 z-40 bg-white h-[150px] w-full flex flex-col items-center justify-center">
        <h1 className="text-black text-xl font-bold flex items-center justify-center mt-3">Find Certificate</h1>
        <div className="flex items-center space-x-4 mt-4">
          <input
            type="text"
            placeholder="#Number"
            className="px-5 py-2 border border-gray-300"
            value={certificateNumber}
            onChange={handleCertificateNumberChange}
          />
          <input
            type="text"
            placeholder="Full Name"
            className="px-5 py-2 border border-gray-300"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <div className="relative">
            <select
              className="block appearance-none bg-transparent px-5 py-2 border border-gray-300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="category1">Development</option>
              <option value="category2">Finance&Accounting</option>
              <option value="category3">Design</option>
              <option value="category4">Marketing</option>
              <option value="category5">Teaching&Academics</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </div>
          </div>
          <button
            className="bg-red-500 text-white px-16 py-2 hover:bg-gray-800 transition duration-300"
            onClick={handleFindCertificate}
          >
            Find Certificate
          </button>
        </div>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
      <div className="p-4 z-40 justify-between h-[400px] w-full">
        <h1 className="text-black text-xl font-bold flex items-center justify-center mt-3">Our Certification</h1>
        <h3 className='text-gray-400 font-bold flex items-center justify-center mt-3'>We prepared tests for the most popular categories and get certificate</h3>
        <div className="flex items-center justify-center space-x-8 mt-4">
          <p className="group cursor-pointer" onClick={handleDevelopmentClick}>
            <span className="group-hover:bg-red-500 group-hover:text-white transition duration-300 px-2 py-1 rounded text-black">Development</span>
          </p>
          <p className="group cursor-pointer" onClick={handleFinanceClick}>
            <span className="group-hover:bg-red-500 group-hover:text-white transition duration-300 px-2 py-1 rounded text-black">Finance&Accounting</span>
          </p>
          <p className="group cursor-pointer" onClick={handleDesignClick}>
            <span className="group-hover:bg-red-500 group-hover:text-white transition duration-300 px-2 py-1 rounded text-black">Design</span>
          </p>
          <p className="group cursor-pointer" onClick={handleMarketingClick}>
            <span className="group-hover:bg-red-500 group-hover:text-white transition duration-300 px-2 py-1 rounded text-black">Marketing</span>
          </p>
          <p className="group cursor-pointer" onClick={handleTeachingClick}>
            <span className="group-hover:bg-red-500 group-hover:text-white transition duration-300 px-2 py-1 rounded text-black">Teaching&Academics</span>
          </p>
        </div>
        {showDevelopmentButtons && (
          <div className="grid grid-cols-4 gap-4 mt-4 mx-8">
            {["WordPress", "HTML CSS", "MotoCMS 3", "Joomla", "OpenCart", "Joomla Pro", "WordPress Pro", "WordPress Elementor", "WordPress Elementor Pro", "PrestaShop"].map((text, index) => (
              <button
                key={index}
                className="bg-white text-black py-3 px-4 rounded hover:bg-red-500 transition duration-300"
              >
                {text}
              </button>
            ))}
          </div>
        )}
        {showFinanceButtons && (
          <div className="grid grid-cols-4 gap-4 mt-4 mx-8">
            {["Accounting", "Finance Fundamentals", "Bookkeeping", "Political Science", "Finance", "Cryptocurrentcy"].map((text, index) => (
              <button
                key={index}
                className="bg-white text-black py-3 px-4 rounded hover:bg-red-500 transition duration-300"
              >
                {text}
              </button>
            ))}
          </div>
        )}
        {showDesignButtons && (
          <div className="grid grid-cols-4 gap-4 mt-4 mx-8">
            {["Adobe Photoshop", "Adobe Illusrtator", "Adobe After Effects", "Adobe InDesign", "Unity", "Drawing", "Game Development Fundamentals", "3D Modeling", "Motion Graphics", "2D Animation", "T-Shirt Design"].map((text, index) => (
              <button
                key={index}
                className="bg-white text-black py-3 px-3 rounded hover:bg-red-500 transition duration-300"
              >
                {text}
              </button>
            ))}
          </div>
        )}
        {showMarketingButtons && (
          <div className="grid grid-cols-4 gap-4 mt-4 mx-8">
            {["Google Ads (Adwords)", "Google Ads (Adwords) Certification", "Social Marketing", "Email Marketing", "Business Strategy", "SEO", "PPC Advertising", "Blogging"].map((text, index) => (
              <button
                key={index}
                className="bg-white text-black py-3 px-4 rounded hover:bg-red-500 transition duration-300"
              >
                {text}
              </button>
            ))}
          </div>
        )}
        {showTeachingButtons && (
          <div className="grid grid-cols-4 gap-4 mt-4 mx-8">
            {["Math", "Humanities", "Engineering", "Science", "Social Science", "English Language", "German Language", "Sign Language", "IELTS", "French Language", "Spanish Language", "English Grammar"].map((text, index) => (
              <button
                key={index}
                className="bg-white text-black py-3 px-4 rounded hover:bg-red-500 transition duration-300"
              >
                {text}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="p-4 z-40 justify-between h-[300px] bg-gray-900 w-full bg-cover bg-center relative" style={{ backgroundImage: `url('https://gambolthemes.net/html-items/cursus-new-demo/images/sign.svg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-2xl font-bold flex items-center justify-center mt-3">Who Can Benefit From This?</h1>
          <div className="flex items-center justify-center space-x-16 mt-4">
            <div className="flex flex-col items-center text-center mb-12">
              <img
                className="p-2 bg-white w-32 h-32 rounded-full border border-gray-300"
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/student.svg"
                alt="Student"
              />
              <p className="text-white mt-2">Students</p>
            </div>

            <div className="flex flex-col items-center text-center mb-12">
              <img
                className="p-2 bg-white w-32 h-32 rounded-full border border-gray-300"
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/cerificate_center/instructor.svg"
                alt="Instructor"
              />
              <p className="text-white mt-2">Instructor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 z-40 justify-between h-[450px] w-full">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-black text-2xl font-bold">What Will You Get?</h1>
          <h3 className="text-gray-400 font-bold mt-3">Cursus company, which confirms your skills and knowledge of Certification</h3>
          <h4 className="text-gray-400 font-bold mt-6 mx-auto max-w-[80ch] w-full">
            Morbi eget elit eget turpis varius mollis eget vel massa. Donec porttitor, sapien eget commodo vulputate, erat felis aliquam dolor, non condimentum libero dolor vel ipsum. Sed porttitor nisi eget nulla ullamcorper eleifend. Fusce tristique sapien nisi, vel feugiat neque luctus sit amet. Quisque consequat quis turpis in mattis. Maecenas eget mollis nisl. Cras porta dapibus est, quis malesuada ex iaculis at. Vestibulum egestas tortor in urna tempor, in fermentum lectus bibendum. In leo leo, bibendum at pharetra at, tincidunt in nulla. In vel malesuada nulla, sed tincidunt neque. Phasellus at massa vel sem aliquet sodales non in magna. Ut tempus ipsum sagittis neque cursus euismod. Vivamus luctus elementum tortor, ac aliquet dolor vehicula et. Nulla vehicula pharetra lacus ornare gravida. Vivamus mollis ullamcorper dui quis gravida. Aenean pulvinar pulvinar arcu a suscipit.
          </h4>
          <button className="mt-10 bg-red-500 text-white px-14 py-2 hover:bg-red-600 transition duration-300">Knowledge Base</button>
        </div>
      </div>
    </div>
  );
};

export default CertificationCenter;
