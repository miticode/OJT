import { ShoppingCartOutlined } from "@ant-design/icons";
import { faStar, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import {
  deleteSavedCourseByCourseId,
  deleteSavedCourses,
  getSavedCourses,
} from "../redux/actions/course.action";

const CourseCard = ({
  thumbnail,
  rate,
  title,
  category,
  instructor,
  hours,
  price,
  views,
  date,
  index,
  hoveredCourse,
  handleMouseEnter,
  handleMouseLeave,
  handleDeleteCourse, // New prop
  courseId, // New prop for course ID
}) => (
  <div
    className="flex border p-[10px] rounded-sm shadow-md relative"
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
  >
    <div className="relative w-[350px] h-full">
      <div>
        <Image
          src={thumbnail || ""}
          className="w-[350px] h-[180px] object-cover rounded-sm"
        />
      </div>
      <span className="absolute top-2 left-2 bg-yellow-400 text-white text-sm font-medium gap-2 px-3 py-1 rounded">
        <FontAwesomeIcon icon={faStar} />
        {rate}
      </span>
      {/* Replace with actual logic for BESTSELLER */}
      <span className="absolute top-2 right-0 bg-[#fa8305] text-white text-[10px] font-medium text-xs px-2 py-1 rounded-sm">
        BESTSELLER
      </span>
      <span className="absolute bottom-2 right-2 bg-[#505050] text-white text-[12px] font-medium px-[10px] py-[5px] rounded-[3px]">
        {hours} hours
      </span>
    </div>
    <div className="ml-4 flex flex-col justify-between w-[60%]">
      <div className="flex justify-between items-center mt-2">
        <span className="text-[#686f7a] text-[12px]">
          {views} • {date}
        </span>
      </div>
      <div>
        <h2 className="text-[16px] font-medium mt-2">{title}</h2>
        <p className="text-[#686f7a] font-normal text-[13px] pt-[2px]">
          {category}
        </p>
      </div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-gray-500 text-[14px]">
          By{" "}
          <span className="text-[14px] text-black font-medium">
            {instructor}
          </span>
        </p>
        <div
          className={`flex items-center ${
            index === hoveredCourse ? "block" : "hidden"
          }`}
        >
          <div className="space-x-6">
            <ShoppingCartOutlined className="text-black text-[18px]" />
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => handleDeleteCourse(courseId)}
            />
          </div>
        </div>
        <div className="text-[18px] font-bold">${price}</div>
      </div>
    </div>
  </div>
);

const SavedCourses = ({ sidebar }) => {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const userId = useSelector((state) => state.auth.id);
  const savedCourses = useSelector(
    (state) => state.enrolledCourses.savedCourses
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getSavedCourses(userId));
    }
  }, [dispatch, userId]);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteCourse = (courseId) => {
    dispatch(deleteSavedCourseByCourseId(userId, courseId));
  };

  const handleConfirmDelete = () => {
    dispatch(deleteSavedCourses(userId));
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleMouseEnter = (index) => {
    setHoveredCourse(index);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };

  const handleRemoveAll = () => {
    // Implement logic to remove all saved courses
    dispatch(deleteSavedCourses(userId));
  };

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
      <div className="col-span-1 w-[400px]">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium">Saved Courses</h2>
          <button className="text-sm text-gray-700 font-normal">
            Remove All
          </button>
        </div>
        <hr className="my-2" />
        <p className="text-gray-500 text-sm">{savedCourses.length} Courses</p>
        <button
          className="bg-[#ED2927] hover:bg-[#333333] text-white w-full py-2 rounded-sm mt-4"
          onClick={handleRemoveAll}
        >
          <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
          <span className="text-sm">Remove Saved Courses</span>
        </button>
        {showDeleteConfirmation && (
          <div className="mt-4">
            <p>Are you sure you want to remove all saved courses?</p>
            <div className="flex mt-2">
              <button
                className="bg-[#ED2927] hover:bg-[#333333] text-white px-4 py-2 rounded-sm mr-2"
                onClick={handleConfirmDelete}
              >
                Yes, Remove All
              </button>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-sm"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
      <div
        className={`col-span-1 md:col-span-2 space-y-6 ${
          sidebar ? "col-span-2" : "col-span-3"
        }`}
      >
        <h1 className="text-xl font-medium">Saved Courses</h1>
        {savedCourses.map(
          (course, index) =>
            course && (
              <CourseCard
                key={course.id}
                courseId={course.id}
                thumbnail={course.thumbnail}
                rate={course.rate}
                title={course.title}
                category={course.category}
                instructor={course.instructor}
                hours={course.hours}
                price={course.price}
                views={course.views}
                date={course.date}
                index={index}
                hoveredCourse={hoveredCourse}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                handleDeleteCourse={handleDeleteCourse}
              />
            )
        )}
      </div>
    </div>
  );
};

export default SavedCourses;
