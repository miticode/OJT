import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TestResult = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { right, wrong, total } = state || { right: 0, wrong: 0, total: 0 };

  const handleCertificationCenter = () => {
    navigate("/certificationcenter");
  };

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <div className="">
      <div className="text-black bg-white ">
        <div className="flex justify-between">
          <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
            <p onClick={handleHome}>Home /</p>
            <p onClick={handleCertificationCenter}>Certification Center /</p>
            <p className="text-[#787878]">Result</p>
          </div>
          <div
            className="text-black pt-[80px] pr-[12%] text-[14px] flex items-center text-center cursor-pointer"
            onClick={handleCertificationCenter}
          >
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <p className="pl-2">Back to Certification Center</p>
          </div>
        </div>
        <div className="pt-5 pb-3 pl-[11%] text-2xl">
          <h1>Result</h1>
        </div>
      </div>
      <div>
        <div className="flex ml-[60px] mt-[60px] text-[#333333] font-medium justify-center items-center">
          <div className="flex flex-col items-center space-y-[20px]">
            <div className="rounded-full bg-green-600 w-[130px] h-[130px] flex items-center justify-center  text-white">
              <span className="text-[30px]">
                {Math.round((right / total) * 100)}%
              </span>
            </div>
            <h1 className="text-[18px]">Right ({right})</h1>
          </div>
          <div className="px-[130px] text-[18px] flex flex-col items-center space-y-[20px]">
            <div className="rounded-full bg-red-600 w-[130px] h-[130px] flex items-center justify-center  text-white">
              <span className="text-[30px]">X</span>
            </div>
            <h1>Wrong ({wrong})</h1>
          </div>
          <div className="text-[18px] flex flex-col items-center space-y-[20px]">
            <div className="rounded-full bg-blue-600 w-[130px] h-[130px] flex items-center justify-center text-[30px] text-white">
              {right}
            </div>
            <h1>Out Of {total}</h1>
          </div>
        </div>
        <h1 className="text-[42px] text-black ml-[530px] mt-[50px] font-bold">
          Congratulation! Joginder
        </h1>
        <h2 className="text-[20px] text-[#333333] ml-[620px] mt-[40px]">
          You are eligible for this certificate
        </h2>
        <div className="ml-[700px] mt-[60px] mb-[50px]">
          <a
            href="https://gambolthemes.net/html-imgs/certificate.jpg"
            className=" bg-red-600 hover:bg-[#333333] text-white text-[14px] font-medium px-[10px] py-[9px] rounded-sm "
          >
            Download Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
