import {
  faArrowDown,
  faArrowUp,
  faBook,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../redux/actions/course.action";

const DashBoard = ({ sidebar }) => {
  const { courses, loading, error } = useSelector(
    (state) => state.enrolledCourses
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  const news2 = [
    {
      image:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/news-1.jpg",
      title: "COVID-19 Updates & Resources",
      description:
        "See the latest updates to coronavirus-related content, including changes to monetization, and access new Creator support resources",
    },
    {
      image:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/news-2.jpg",
      title: "Watch: Edututs+ interview Mr. Joginder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac eleifend ante. Duis ac pulvinar felis. Sed a nibh ligula. Mauris eget tortor id mauris tristique accumsan.",
    },
    {
      image:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/news-1.jpg",
      title: "COVID-19 Updates - April 7",
      description:
        "Ut porttitor mi vel orci cursus, nec elementum neque malesuada. Phasellus imperdiet quam gravida pharetra aliquet. Integer vel ligula eget nisl dignissim hendrerit.",
    },
  ];
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentNewsIndexx, setCurrentNewsIndexx] = useState(0);

  const handleNext = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news2.length);
  };
  const handleNextt = () => {
    setCurrentNewsIndexx((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const handlePrev = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex === 0 ? news2.length - 1 : prevIndex - 1
    );
  };
  const handlePrevv = () => {
    setCurrentNewsIndexx((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[1280px]">
      <div
        className={`mt-[100px] mx-[20px] transition-all duration-1000  ${
          sidebar ? "ml-[30px]" : "ml-[-200px]"
        } overflow-x-hidden`}
      >
        <div className="flex items-center pt-2 pb-3">
          <FontAwesomeIcon icon={faBorderAll} className="text-xl mb-2" />
          <h1 className="ml-2 text-[20px]"> Instructor Dashboard</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-3">
          {[
            {
              title: "Total Sales",
              amount: "$350",
              new: "New 5",
              imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/achievement.svg",
              bgColor: "bg-yellow-400",
            },
            {
              title: "Total Enroll",
              amount: "1500",
              new: "New 5",
              imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/graduation-cap.svg",
              bgColor: "bg-purple-400",
            },
            {
              title: "Total Courses",
              amount: "130",
              new: "New 5",
              imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/online-course.svg",
              bgColor: "bg-orange-400",
            },
            {
              title: "Total Students",
              amount: "2650",
              new: "New 5",
              imgSrc:
                "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/knowledge.svg",
              bgColor: "bg-purple-400",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col-span-1 bg-white h-[150px] p-3 flex justify-between items-center"
            >
              <div>
                <h5 className="text-[16px] font-medium text-[#333333]">
                  {item.title}
                </h5>
                <h3 className="text-[24px] text-[#333333]">{item.amount}</h3>
                <span
                  className={`text-[12px] text-white px-[8px] py-[5px] ${item.bgColor} font-medium rounded-sm`}
                >
                  {item.new}
                </span>
              </div>
              <img src={item.imgSrc} className="w-16 h-16" alt={item.title} />
            </div>
          ))}
        </div>
        <div className="h-[120px] w-full bg-white mt-7 flex justify-between items-center text-[24px] px-5">
          <div className="flex  items-center gap-5 ml-3 text-gray-600">
            <FontAwesomeIcon icon={faBook} className="text-[24px] mb-2" />
            <h1 className="text-[24px] font-normal">
              Jump Into Course Creation
            </h1>
          </div>
          <button className="py-3 px-6 bg-red-600 font-medium text-white rounded-sm text-[15px]">
            Create Your Course
          </button>
        </div>
        <div className="flex mt-7">
          <div className="flex-1">
            <div className="flex items-start mb-3">
              <h1 className="text-[17px]">Latest Courses Performance</h1>
              <div
                className={`flex items-end gap-2 justify-end ${
                  sidebar ? "ml-[100px]" : "ml-[130px]"
                }`}
              >
                <Button
                  className={`px-2 py-1 bg-white text-center rounded ${
                    currentNewsIndexx === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handlePrevv}
                  disabled={currentNewsIndexx === 0}
                >
                  &lt;
                </Button>
                <Button
                  className={`px-2 py-1 bg-white text-center rounded ${
                    currentNewsIndexx === courses.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleNextt}
                  disabled={currentNewsIndexx === courses.length - 1}
                >
                  &gt;
                </Button>
              </div>
            </div>
            {courses.map(
              (course, index) =>
                index === currentNewsIndexx && (
                  <div
                    key={index}
                    className={`bg-white ${
                      sidebar ? "h-[600px] w-[ 400px]" : "h-[600px] w-[400px]"
                    }`}
                  >
                    <div
                      className={`ml-[5px] mt-[5px] ${
                        sidebar ? "w-[390px] h-[270px]" : "w-[390px] h-[270px]"
                      }`}
                    >
                      <Image
                        className={`pt-2 ${
                          sidebar
                            ? "w-[440px] h-[270px]"
                            : "w-[440px] h-[270px]"
                        }`}
                        src={course.thumbnail}
                      />
                    </div>
                    <div className="ml-3 pt-2 text-[12px] font-normal text-[#686f7a] ">
                      <span>{course.time}</span>
                    </div>
                    <h1 className="mt-5 ml-3 text-[18px]">{course.title}</h1>

                    <div className=" w-[350px] mt-2 ml-3 text-[14px] font-normal space-y-6 text-[#686f7a]">
                      <div className=" flex justify-between">
                        <div>View</div>
                        <div>{course.views}</div>
                      </div>
                      <div className=" flex justify-between">
                        <div>Purchased</div>
                        <div>{course.purchased}</div>
                      </div>
                      <div className=" flex justify-between">
                        <div>Like</div>
                        <div>{course.total_like}</div>
                      </div>
                    </div>
                    <hr className="mt-6 w-[85%] ml-6"></hr>
                    <div className="flex flex-col space-y-4 p-4 text-[14px]">
                      <a
                        href="#"
                        className="text-black font-medium hover:underline"
                      >
                        GO TO COURSE ANALYTICS
                      </a>
                      <a
                        href="#"
                        className="text-black font-medium  hover:underline"
                      >
                        SEE COMMENTS
                      </a>
                      <a
                        href="#"
                        className="text-black font-medium hover:underline"
                      >
                        SEE REVIEWS
                      </a>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="flex-1 ml-5">
            <div className="flex items-start mb-3 gap-[140px]">
              <h1 className="text-[17px]">News</h1>
              <div
                className={`flex items-center gap-2 justify-end ${
                  sidebar ? "ml-[100px]" : "ml-[150px]"
                }`}
              >
                <Button
                  className={`px-2 py-1 bg-white text-center rounded ${
                    currentNewsIndex === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handlePrev}
                  disabled={currentNewsIndex === 0}
                >
                  &lt;
                </Button>
                <Button
                  className={`px-2 py-1 bg-white text-center rounded ${
                    currentNewsIndex === news2.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleNext}
                  disabled={currentNewsIndex === news2.length - 1}
                >
                  &gt;
                </Button>
              </div>
            </div>
            {news2.map(
              (item, index) =>
                index === currentNewsIndex && (
                  <div
                    key={index}
                    className={`bg-white ${
                      sidebar ? "h-[500px] w-[400px]" : "h-[500px] w-[410px]"
                    }`}
                  >
                    <div
                      className={`ml-[5px] mt-[5px] ${
                        sidebar ? "w-[390px] h-[270px]" : "w-[400px] h-[270px]"
                      }`}
                    >
                      <Image
                        className={`pt-2 ${
                          sidebar
                            ? "w-[440px] h-[270px]"
                            : "w-[440px] h-[270px]"
                        }`}
                        src={item.image}
                      />
                    </div>
                    <h1 className="mt-10 ml-3 text-xl">{item.title}</h1>
                    <div className="mt-4 ml-3 text-md">{item.description}</div>
                    <div className="mt-10 ml-3 text-xs font-semibold">
                      WATCH NOW
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="flex-1 ml-5 ">
            <div className="text-[18px] font-semibold mb-4 ">
              Profile Analytics
            </div>
            <div className="mt-[1px] w-[410px] h-[300px] bg-white">
              <div className=" p-4 space-y-4">
                <h6 className="text-[14px] text-[#686f7a]">
                  Current Subcribers
                </h6>
                <h3 className="text-[24px] text-black">999</h3>
              </div>
              <hr className="mt-2 ml-2 w-[380px] "></hr>
              <div className=" w-[350px] mt-2 ml-4 text-[14px] font-normal space-y-3 text-gray-500">
                <div className=" flex justify-between">
                  <div>View</div>
                  <div className="flex gap-3">
                    <p>17k</p>
                    <p className="text-red-600">
                      <FontAwesomeIcon icon={faArrowDown} />
                    </p>
                    <p className="text-red-600">75%</p>
                  </div>
                </div>
                <div className=" flex justify-between">
                  <div className="flex gap-1">
                    <p>Purchased </p>
                    <p>(per hour)</p>
                  </div>
                  <div className="flex gap-3">
                    <p>1</p>
                    <p className="text-red-600">
                      <FontAwesomeIcon icon={faArrowUp} />
                    </p>
                    <p className="text-red-600">100%</p>
                  </div>
                </div>
                <div className=" flex justify-between">
                  <div>Like</div>
                  <div className="flex gap-3">
                    <p>50</p>
                    <p className="text-red-600">
                      <FontAwesomeIcon icon={faArrowUp} />
                    </p>
                    <p className="text-red-600">70%</p>
                  </div>
                </div>
                <hr className="mt-7 w-[380px] "></hr>
                <div>
                  <a
                    href="#"
                    className="text-black font-medium hover:underline"
                  >
                    GO TO COURSE ANALYTICS
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[18px] font-semibold mb-4 mt-7 ">
              Submit Courses
            </div>
            <div className="mt-[1px] w-[410px] h-[150px] bg-white">
              <div className="p-3">
                <a href="#" className="font-medium text-[17px]">
                  The Complete JavaScript Course 2020: Build Real Projects!
                  <span className="px-[10px] py-[3px] bg-red-600 text-white rounded-md ml-3 text-[12px]">
                    Pending
                  </span>
                </a>
                <p className="mt-5 text-[15px] text-gray-500 font-normal">
                  Submitted
                  <span className="ml-2">1 days ago</span>
                </p>
                <a href="#" className="hover:underline text-[16px] font-normal">
                  Delete
                </a>
              </div>
            </div>

            <div className="text-[18px] font-semibold mb-4 mt-7">
              What's new in Cursus?
            </div>
            {news2.map((item, index) => (
              <div key={index} className="mt-[1px] w-[410px] h-[50px] bg-white">
                <h1 className="items-center pt-4 pl-4 font-light text-sm">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
