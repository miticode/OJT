import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faVolumeHigh,
  faFileCircleCheck,
  faFileCirclePlus,
  faClapperboard,
  faFileShield,
  faDisplay,
  faBook,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Help = ({ sidebar }) => {
  const [activeTab, setActiveTab] = useState("Instructor");

  const Instructor = () => {
    return (
      <div
        className={`text-black cursor-pointer  ml-[-80px]  ${
          sidebar ? "w-[1300px]" : "w-[1590px]"
        }`}
      >
        <div className="text-[20px] py-4">
          <h1>Select a topic to search for help</h1>
        </div>
        <div className="grid grid-cols-3 gap-y-[30px] mt-8 mr-[100px] gap-7">
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faWallet}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[18px]  ">
              <h3>Payments</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A] ">
              <p>Understand the revenue share and how to receive payments.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faVolumeHigh}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[18px]  ">
              <h3>Selling & Promotion</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A] ">
              <p>Learn about the announcement and promotional tools.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faFileCircleCheck}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[18px]  ">
              <h3>Quality Standards</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A] ">
              <p>Learn what it takes to create a high quality course.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faFileCirclePlus}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[18px]  ">
              <h3>Course Building</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A]  ">
              <p>Build your course curriculum and landing page.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faClapperboard}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[18px] ">
              <h3>Course Management</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A]  ">
              <p>Maintain your course and engage with students.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faFileShield}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[18px]  ">
              <h3>Trust & Safety</h3>
            </div>
            <div className="pt-3  text-[13px] text-[#716F7A] ">
              <p>Policy and copyright questions and guidance.</p>
            </div>
          </div>
        </div>
        <div className="text-[20px] py-4 pt-[60px] ">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div class="grid grid-cols-3 gap-y-[30px] mt-8 mr-[100px] gap-7 text-center text-[14px] font-semibold">
          <div class="bg-white px-3 py-4">
            <div className="pt-2">
              <p>Promote Your Course With Coupons and Referral Links</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4">
            <div className="pt-2">
              <p>Cursus Course Quality Checklist</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4">
            <div className="pt-2">
              <p>Instructor Revenue Share</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4">
            <div className="pt-5">
              <p>Instructor Promotional Agreements and Cursus Deals</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4 ">
            <div className="pt-3 ">
              <p>How to Become an Instructor: FAQ</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4 ">
            <div className="pt-3 ">
              <p>
                How to Select Your Payout Method And Become a Premium Instructor
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Student = () => {
    return (
      <div
        className={`text-black cursor-pointer  ml-[-80px]  ${
          sidebar ? "w-[1300px]" : "w-[1590px]"
        }`}
      >
        <div className="text-[20px] py-4">
          <h1>Select a topic to search for help</h1>
        </div>
        <div className="grid grid-cols-3 gap-y-[30px] mt-8 mr-[100px] gap-7 ">
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faFileCircleCheck}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[20px]  ">
              <h3>Getting Started</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A]  ">
              <p>Learn how Cursus works and how to start learning.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faUser}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[20px]  ">
              <h3>Account/Profile</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A] ">
              <p>Manage your account settings.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faDisplay}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[20px]  ">
              <h3>Troubleshooting</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A] ">
              <p>Experiencing a bug? Check here.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faBook}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[20px]  ">
              <h3>Course Taking</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A]  ">
              <p>Everything about taking a course on Udemy.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faWallet}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[20px]  ">
              <h3>Purchase/Refunds</h3>
            </div>
            <div className="pt-3  text-[15px] text-[#716F7A]  ">
              <p>Learn about coupons, how to send gifts, and refunds.</p>
            </div>
          </div>
          <div className="bg-white px-3 py-3 text-center pt-6 pb-[30px]">
            <div>
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="text-[30px] px-4 py-4 bg-[#FFECEC]"
              />
            </div>
            <div className="pt-3  text-[20px]  ">
              <h3>Mobile</h3>
            </div>
            <div className="pt-3  text-[15px]  ">
              <p>On the go? Learn about our mobile app.</p>
            </div>
          </div>
        </div>
        <div className="text-[20px] py-4 pt-[60px] ">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div class="grid grid-cols-3 gap-y-[30px] mt-8 mr-[90px] gap-7 text-center text-[14px] font-semibold">
          <div class="bg-white px-3 py-4">
            <div className="pt-2">
              <p>Lifetime Access</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4">
            <div className="pt-2">
              <p>Cursus FAQ</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4">
            <div className="pt-2">
              <p>Downloading Courses</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4">
            <div className="pt-5">
              <p>Certificate of Completion</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4 ">
            <div className="pt-5">
              <p>Refund a Course</p>
            </div>
          </div>
          <div class="bg-white px-3 py-4 ">
            <div className="pt-3 ">
              <p>How to Solve Payment Issues</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-[65px] overflow-x-hidden text-white">
      <div
        className={`bg-[#333333] h-[280px] flex gap-x-[200px] ${
          sidebar ? "w-[1457px]" : "w-[1690px]"
        }`}
      >
        <div>
          <div
            className={`flex flex-col mt-[60px] ${sidebar ? "ml-28" : "ml-64"}`}
          >
            <div className="text-[30px]  pl-[360px]">
              <h1>How may we help you?</h1>
            </div>
          </div>
          <div
            className={`group w-full flex ml-[360px] ${
              sidebar ? "ml-28" : "ml-[500px]"
            }`}
          >
            <div className="mt-4 mb-5 text-[#D5D5D5] border-2 border-[#F7F7F7] bg-[#F7F7F7] px-4 text-base w-[590px] h-[50px] relative pt-[9px]">
              <input
                type="text"
                placeholder="Search for solutions..."
                className=" focus:outline-none w-[248px] text-[12px] ml-8 text-[black] bg-[#F7F7F7] group-active:text-[#847E7E]"
              />
              <button type="submit" className="top-0 left-3 absolute">
                <Image
                  className="max-w-none mt-[14px]"
                  src={require("../assets/search.png")}
                  width={15}
                  height={15}
                  alt="Search"
                ></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div
          className={`flex gap-5 pt-6 pr-[250px] justify-center ${
            sidebar ? "ml-10" : "ml-[80px]"
          }`}
        >
          <Button
            className={`text-black font-medium text-[18px] ${
              activeTab === "Instructor"
                ? "border-b-2 p-2 border-[#ed2a26]"
                : ""
            }`}
            onClick={() => setActiveTab("Instructor")}
          >
            Instructor
          </Button>
          <Button
            className={`text-black font-medium text-[18px] ${
              activeTab === "Student" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("Student")}
          >
            Student
          </Button>
        </div>
      </div>
      <div className={`mt-4 ${sidebar ? "ml-28" : "ml-[100px]"}`}>
        {activeTab === "Instructor" && <Instructor />}
        {activeTab === "Student" && <Student />}
      </div>
    </div>
  );
};

export default Help;
