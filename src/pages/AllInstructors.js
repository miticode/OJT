import React, { useEffect, useState, useRef } from "react";
import { Image, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllInstructor,
  searchInstructors,
} from "../redux/actions/instructor.action";

const AllInstructors = ({ sidebar }) => {
  const dispatch = useDispatch();
  const instructorsState = useSelector((state) => state.instructors);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Add this line

  useEffect(() => {
    dispatch(getAllInstructor());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        dispatch(searchInstructors(searchQuery));
      } else {
        dispatch(getAllInstructor());
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, dispatch]);

  const { instructors, loading, error } = instructorsState;
  const [coursesToShow, setCoursesToShow] = useState(8);
  const loadMoreRef = useRef(null);

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

  const handleInstructorClick = (instructorId) => {
    navigate(`/instructor/${instructorId}`);
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
            placeholder="Search Tutors..."
            className={`focus:outline-none text-sm ml-20 mt-2 text-black bg-white placeholder-gray-500 focus:placeholder-black focus:text-black rounded-[5px] ${
              sidebar ? "w-[1300px]" : "w-[1540px]"
            }`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" className="top-2 left-14 absolute">
            <Image
              className="max-w-none mt-2"
              src={require("../../src/assets/search.png")}
              width={14}
              height={14}
              alt="Search"
            />
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
            <Alert variant="danger">Searched not found</Alert>
          </div>
        ) : (
          instructors.slice(0, coursesToShow).map((instructor, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-white cursor-pointer"
              onClick={() => handleInstructorClick(instructor.id)}
            >
              <div
                className={`${
                  sidebar ? "w-[330px] h-[320px]" : "w-[393px] h-[320px]"
                }`}
              >
                <div className=" justify-center pt-8 flex">
                  <Image
                    className={` ${
                      sidebar ? "w-[100px h-[100px]" : "w-[100px h-[100px]"
                    }`}
                    src={instructor.avatar}
                  />
                </div>
                <div className="flex justify-center">
                  <h1 className="text-center mt-4 text-xl">
                    {instructor.username}
                  </h1>
                  <Image
                    className="w-[16px] h-[16px] mt-6 ml-2"
                    src={require("../../src/assets/check-mark.png")}
                  />
                </div>
                <h1 className="text-center text-sm text-[##7D7B89] font-normal ">
                  {instructor.tutor_category}
                </h1>
                <div className="flex mt-4 justify-center">
                  <Image
                    className="w-[33px] h-[33px] mr-2 transition-transform duration-200 transform hover:scale-110"
                    src={require("../../src/assets/facebook.png")}
                  />
                  <Image
                    className="w-[33px] h-[33px] mr-2 transition-transform duration-200 transform hover:scale-110"
                    src={require("../../src/assets/twitter.png")}
                  />
                  <Image
                    className="w-[33px] h-[33px] mr-2 transition-transform duration-200 transform hover:scale-110"
                    src={require("../../src/assets/linkedin.png")}
                  />
                  <Image
                    className="w-[33px] h-[33px] mr-2 transition-transform duration-200 transform hover:scale-110"
                    src={require("../../src/assets/youtube.png")}
                  />
                </div>
                <div className="text-[#91979f] mt-2 text-xs font-medium flex justify-center gap-1">
                  {instructor.subscriber}
                  <h1 className="mx-1">• </h1>
                  {instructor.noCreatedCourses}
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

export default AllInstructors;
