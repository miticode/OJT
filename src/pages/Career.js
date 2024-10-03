import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPlane,
  faCircleHalfStroke,
  faFaceSmile,
  faTabletButton,
  faHippo,
  faHandHoldingHand,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const Career = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };
  const handleCompany = () => {
    navigate("/company");
  };
  const handleOurBlog = () => {
    navigate("/blog");
  };
  const handlePress = () => {
    navigate("/press");
  };
  const handleCareer = () => {
    navigate("/career");
  };
  const handleJobapply = () => {
    navigate("/jobapply");
  };

  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faLocationDot} />,
      title: "Work from anywhere",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      icon: <FontAwesomeIcon icon={faPlane} />,
      title: "Work and Travel",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
      title: "Flexible Hours",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      icon: <FontAwesomeIcon icon={faFaceSmile} />,
      title: "Purchasing Leave",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      icon: <FontAwesomeIcon icon={faTabletButton} />,
      title: "Social Events",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      icon: <FontAwesomeIcon icon={faHippo} />,
      title: "Wellness Program",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      icon: <FontAwesomeIcon icon={faHandHoldingHand} />,
      title: "Mentoring Program",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      icon: <FontAwesomeIcon icon={faAnchor} />,
      title: "Fundraising",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
  ];
  const roles = [
    {
      title: "Algorithm Engineer",
      country: "India",
    },
    {
      title: "Chief Technology Officer",
      country: "India",
    },
    {
      title: "Customer Growth & Marketing Analyst",
      country: "India",
    },
    {
      title: "Customer Growth & Marketing Analyst",
      country: "India",
    },
    {
      title: "iOS Developer - Edututs+ San Francisco, CA",
      country: "San Francisco, CA",
    },
    {
      title: "Senior UX Designer",
      country: "India",
    },
  ];

  const avatars = [
    "https://gambolthemes.net/html-items/cursus-new-demo/images/about/career-1.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/about/career-2.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/about/career-3.jpg",
    "https://gambolthemes.net/html-items/cursus-new-demo/images/about/career-4.jpg",
  ];

  const info = [
    {
      title: "We are learners",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit velit, ac sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
    {
      title: "We are navigators",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit velit, ac sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
    {
      title: "We are global",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit velit, ac sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
    {
      title: "We make an impact",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit velit, ac sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleAvatars = 1;

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < avatars.length - visibleAvatars) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div>
      <div className="relative pt-[70px] p-4 z-40 flex flex-col items-center justify-center">
        <div className="pb-2">
          <div className="flex justify-center z-50 space-x-4 text-black mt-4 relative">
            <h3 className="cursor-pointer" onClick={handleAbout}>
              About
            </h3>
            <h3 className="cursor-pointer" onClick={handleOurBlog}>
              Blog
            </h3>
            <h3 className="cursor-pointer" onClick={handleCompany}>
              Company
            </h3>
            <h3 className="cursor-pointer" onClick={handleCareer}>
              Careers
            </h3>
            <h3 className="cursor-pointer" onClick={handlePress}>
              Press
            </h3>
          </div>
          <div className="relative z-10 text-center text-black pt-9">
            <h1 className="text-2xl font-bold">
              We're a passionate, creative, and global company, come work with
              us.
            </h1>
          </div>
        </div>
        <img
          className="absolute inset-0 z-0 h-[200px] w-full opacity-15"
          src={require("../assets/title_bg.jpg")}
          alt="Background"
        />
      </div>
      <div className="bg-white w-full h-[350px]">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="flex flex-col items-center md:items-start md:w-1/2 md:pr-8 mt-8">
            <iframe
              width={514}
              height={284}
              src="https://www.youtube.com/embed/TKnufs85hXk"
              title="Envato Elements: Unlimited Assets For Your Creative Projects"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="flex-shrink-0 md:w-1/2">
            <div className="">
              <h1 className="text-3xl font-bold mb-4 text-center md:text-left text-black">
                Our Story
              </h1>
              <div className="w-12 h-0.5 bg-red-600 mb-4 mx-auto md:mx-0"></div>
              <p className="text-center text-[#686f7a] text-[14px] md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur vel dolor id ultrices. Proin a magna at mi pretium
                pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis
                augue. Nam vitae purus placerat, hendrerit nisl id, finibus
                magna. Etiam pharetra gravida ornare. Donec sagittis, ipsum in
                egestas egestas, dui lorem sollicitudin justo, ut ullamcorper
                velit neque eu velit. Ut et fringilla elit. Mauris augue augue,
                auctor a blandit ac, convallis eget neque. Curabitur in ante
                ante. Nullam laoreet tempus erat at ornare. In nisl nisi,
                dapibus eget facilisis sit amet, commodo quis nibh.
              </p>
              <button className="mt-10 bg-[#ed2a26] text-white text-[14px] px-6 py-2 hover:bg-[#333333] transition duration-300">
                Check Out Our Open Roles
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 h-auto w-full">
        <div className="flex items-center justify-center">
          <button
            onClick={handlePrevClick}
            disabled={startIndex === 0}
            className="group bg-white hover:bg-red-600 absolute left-11 z-50 cursor-pointer px-2 py-0 rounded-[5px] "
          >
            <h1 className="group-hover:text-white">{"<"}</h1>
          </button>
          <div className="flex  rounded relative h-auto w-[700px] mx-10 transition-transform duration-700">
            <div>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-20 h-20"
                  src={avatars[startIndex]}
                  alt="Career Avatar"
                />
              </div>
              <div className="text-center mt-5">
                <h3 className="text-black text-[18px]">
                  {info[startIndex].title}
                </h3>
                <p className="text-[#686f7a]">{info[startIndex].content}</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleNextClick}
            disabled={startIndex >= avatars.length - visibleAvatars}
            className="group bg-white hover:bg-red-600 absolute right-[20px] z-50 cursor-pointer px-2 py-0 rounded-[5px] "
          >
            <h1 className="group-hover:text-white">{">"}</h1>
          </button>
        </div>
      </div>
      <div className="bg-white h-auto w-full">
        <div className="relative z-10 text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Benefits</h1>
          <h3 className="text-gray-400">
            Cursus culture is something special, and to complement and support
            that culture we have some amazing benefits.
          </h3>
          <div className="w-12 h-0.5 bg-red-600 mt-2 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-4 ">
              <div className="text-black text-4xl mb-2">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-black">
                {benefit.title}
              </h3>
              <p className="text-[#686f7a]">{benefit.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-auto w-full">
        <div className="relative z-10 text-center mb-8">
          <h1 className="text-3xl font-bold text-black">Open Roles</h1>
          <h3 className="text-gray-400">
            Cursus is a fast growing company and we're expanding both our Punjab
            office and international offices.
          </h3>
          <div className="w-12 h-0.5 bg-red-600 mt-2 mx-auto"></div>
        </div>
        <div className="ml-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 ">
          {roles.map((role, index) => (
            <div key={index} className="text-center p-4 bg-white h-[150px] w-[650px]">
              <h3 className="text-xl font-semibold text-black">{role.title}</h3>
              <p className="text-[#686f7a]">{role.country}</p>
              <button className="mt-2 bg-[#ed2a26] text-white text-[14px] px-6 py-2 hover:bg-[#333333] transition duration-300" onClick={handleJobapply}>
                Learn More and Apply
              </button>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
