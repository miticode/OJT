import React, { useEffect, useState, useRef } from "react";
import { Button, Image, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Space } from "antd";
import {
  addCourseToSaved,
  getAllCourses,
  getEnrolledCourses,
  searchCourses,
} from "../redux/actions/course.action";
import { getAllInstructor } from "../redux/actions/instructor.action";
import {
  FlagOutlined,
  HeartOutlined,
  MoreOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
  StopOutlined,
} from "@ant-design/icons";

const ExploreScreen = ({ sidebar }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleAvatars] = useState(7);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [coursesToShow, setCoursesToShow] = useState(8);
  const [noInstructors, setNoInstructors] = useState(false); // State to track if there are no instructors
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch, userId]);

  const handleAddCourse = (courseId) => {
    if (userId && courseId) {
      dispatch(addCourseToSaved(userId, courseId));
    }
  };

  const loadMoreRef = useRef(null);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < instructors.length - visibleAvatars) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredCourse(index);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };

  const { courses, loading, error } = useSelector(
    (state) => state.enrolledCourses
  );
  const { instructors } = useSelector((state) => state.instructors);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllInstructor());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        dispatch(searchCourses(searchQuery));
      } else {
        dispatch(getAllInstructor());
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, dispatch]);

  useEffect(() => {
    setNoInstructors(instructors.length === 0);
  }, [instructors]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCoursesToShow((prevCoursesToShow) => prevCoursesToShow + 8);
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  const createMenuItems = (courseId) => [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="hover:bg-red-400"
        >
          <ShareAltOutlined /> Share
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a onClick={() => handleAddCourse(courseId)}>
          <HeartOutlined /> Save
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          <StopOutlined /> Not Interested
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          <FlagOutlined /> Report
        </a>
      ),
    },
  ];

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="mt-20 ml-8 overflow-x-hidden">
      <div className="group flex">
        <div
          className={`mt-4 mb-5 border-2 border-[#F7F7F7] bg-white px-4 text-base h-[50px] relative pt-1 group-focus-within:border-black ${
            sidebar ? "w-[1400px]" : "w-[1640px]"
          }`}
        >
          <input
            type="text"
            placeholder="Search for Tuts Videos, Tutors, Tests and more.."
            className={`focus:outline-none text-sm ml-20 mt-2 text-black bg-white placeholder-gray-500 focus:placeholder-black focus:text-black rounded-[5px] ${
              sidebar ? "w-[1300px]" : "w-[1540px]"
            }`}
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" className="top-2 left-14 absolute">
            <Image
              className="max-w-none mt-2"
              src={require("../assets/search.png")}
              width={14}
              height={14}
              alt="Search"
            />
          </button>
        </div>
      </div>
      <div className="ml-[30px] mt-8 flex justify-between">
        <h2>Live Streams</h2>
        <Link to={"/livestream"}>
          <span className="text-sm">See all</span>
        </Link>
      </div>
      <div className="mt-4 py-2 px-0 overflow-x-scroll no-scrollbar relative">
        <div className="flex items-center">
          <button
            onClick={handlePrevClick}
            disabled={startIndex === 0}
            className="group bg-white hover:bg-red-600 absolute left-3 z-50 cursor-pointer px-2 py-0 rounded-[5px]"
          >
            <h1 className="group-hover:text-white">{"<"}</h1>
          </button>
          <div
            className={`flex gap-[7px] rounded relative h-[175px] ${
              sidebar ? "w-[1400px]" : "w-full"
            }`}
          >
            {instructors
              .slice(startIndex, startIndex + visibleAvatars)
              .map((instructor, i) => (
                <div
                  key={i}
                  className="bg-[#DDD8DD] rounded w-[230px] h-[175px]"
                >
                  <div className="flex items-center flex-col justify-center bg-[#E3DFE3] mt-3 mb-3 ml-3 mr-3 h-[155px] drop-shadow-md">
                    <img
                      src={instructor.avatar}
                      alt=""
                      className="w-20 h-20 rounded-full border-white"
                    />
                    <h3 className="text-xs">{instructor.username}</h3>
                    <span className="text-xs">
                      <span>live </span>
                      <span className="text-red-600">•</span>
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={handleNextClick}
            disabled={startIndex >= instructors.length - visibleAvatars}
            className="group bg-white hover:bg-red-600 absolute right-[14px] z-50 cursor-pointer px-2 py-0 rounded-[5px]"
          >
            <h1 className="group-hover:text-white">{">"}</h1>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-8">
        {loading ? (
          <div className="col-span-4 flex justify-center">
            <Spinner animation="border" />
          </div>
        ) : error ? (
          <div className="col-span-4">
            <Alert variant="danger">No courses found</Alert>
          </div>
        ) : courses.length === 0 ? (
          <div className="col-span-4">
            <Alert variant="info">No courses found</Alert>
          </div>
        ) : (
          courses.slice(0, coursesToShow).map((course, index) => (
            <div
              key={index}
              className={`bg-white cursor-pointer relative ${
                sidebar ? "h-[370px] w-[330px]" : "h-[400px] w-[380px]"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="">
                <div
                  className={`absolute top-4 left-5 bg-[#fbcb0b] px-2 py-1 z-10 ${
                    sidebar ? "w-[60px] h-[30px]" : "w-[60px] h-[35px]"
                  }`}
                >
                  <div className="inline-flex items-center">
                    <Image
                      className="w-[14px] h-[20px] ml-1"
                      src={require("../assets/star.png")}
                    />
                    <div className="text-[16px] ml-1 text-white">
                      {course.rate}
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-[#fa8305] absolute z-50 top-4 text-sm text-white font-medium text-center ${
                    sidebar
                      ? "right-3 ml-[10px] w-[80px] h-[20px]"
                      : "right-1 ml-[5px] w-[80px] h-[20px]"
                  }`}
                >
                  Best Seller
                </div>
                <Image
                  className={`absolute max-w-none indent-0 shadow-inset-bottom mt-2 ${
                    sidebar
                      ? "w-[310px] h-[170px] ml-[10px]"
                      : "ml-[5px] w-[370px] h-[200px]"
                  }`}
                  src={course.thumbnail}
                />
                <span className="text-xs text-white absolute bottom-[200px] right-[10px] p-[0.5rem] bg-[#505050] rounded-[3px] font-bold">
                  {course.hours}
                </span>
                <div
                  className={`relative left-2 top-2 shadow-inset-bottom ${
                    sidebar ? "w-[310px] h-[170px]" : "w-[370px] h-[200px]"
                  }`}
                >
                  {hoveredCourse === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button className="group relative" variant="light">
                        <div className="border-2 border-white p-4 rounded-full group-hover:bg-black group-hover:opacity-30">
                          <Image
                            className="w-[30px] inset-0 h-[35px] ml-2 opacity-100 z-50 group-hover: opacity-0"
                            src={require("../assets/pause.png")}
                          />
                        </div>
                      </Button>
                    </div>
                  )}
                </div>
                <div className="flex">
                  <div
                    className={`text-[#91979f] text-xs font-medium flex mt-5 ml-3 ${
                      sidebar ? "gap-2" : "gap-2"
                    }`}
                  >
                    {course.views}
                    <h1>• </h1>
                    {course.time}
                  </div>

                  <Dropdown
                    overlay={<Menu items={createMenuItems(course.id)} />}
                    className="ml-[150px] mt-[15px]"
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <MoreOutlined className="text-2xl hover:text-black" />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
                <div className="ml-3 text-xl font-semibold">{course.title}</div>
                <div className="ml-3 text-sm text-[#91979f] mt-2">
                  {course.language}
                </div>
                <div className="flex ml-3">
                  <div className="flex mt-4 text-base">
                    <h1 className="mr-1 text-[#91979f] font-normal">By</h1>{" "}
                    <h1>{course.instructor}</h1>
                  </div>
                  <div
                    className={`mt-2 font-medium flex gap-1 ${
                      sidebar ? "ml-44" : "ml-56"
                    }`}
                  >
                    <ShoppingCartOutlined
                      className={`mt-[1px] hover:text-red-600 ${
                        hoveredCourse === index ? "block" : "hidden"
                      }`}
                    />
                    {course.price || ""}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div ref={loadMoreRef} />
    </div>
  );
};

export default ExploreScreen;
