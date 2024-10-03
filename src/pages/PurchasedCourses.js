import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faBook, faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../redux/actions/course.action";

const PurchasedCourses = ({ sidebar }) => {
  const { courses, loading, error } = useSelector(
    (state) => state.enrolledCourses
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`mt-[110px] ${
        sidebar ? "ml-[50px]" : "ml-[-150px]"
      } transition-all duration-1000`}
    >
      <div className="flex gap-3 mb-11">
        <FontAwesomeIcon icon={faBook} className="size-[30px]" />
        <h2 className="text-[20px] font-medium">Purchased Courses</h2>
      </div>

      <table className="min-w-full shadow-md rounded-sm">
        <thead className="bg-red-200 ">
          <tr className="text-gray-700 border-b text-[14px] font-medium text-[#333333]">
            <th className="py-2 px-9   text-left">Item No.</th>
            <th className="py-2 px-7 text-left">Title</th>
            <th className="py-2 px-10 text-left">Vendor</th>
            <th className="py-2 px-9 text-left">Category</th>
            <th className="py-2 px-9 text-left">Delivery Type</th>
            <th className="py-2 px-7 text-left">Price</th>
            <th className="py-2 px-7 text-left">Purchased Date</th>
            <th className="py-2 px-13 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr
              key={index}
              className="border-b border-blue-gray-200 text-[14px] font-normal text-[#333333] "
            >
              <td className="py-5 px-9 ">{course.id}</td>
              <td className="py-5 px-7 ">{course.title}</td>
              <td className="py-5 px-10 text-[14px] text-[#4183c4] hover:text-black cursor-pointer ">
                {course.instructor}
              </td>
              <td className="py-5 px-9   text-[14px] text-[#4183c4] hover:text-black cursor-pointer">
                {course.language}
              </td>
              <td className="py-5 px-9 text-red-500  text-[14px] font-medium ">
                download
              </td>
              <td className="py-5 px-7 ">{course.price}</td>
              <td className="py-5 px-7 "> 25 March 2020</td>
              <td className="py-5 px-11 ">
                {" "}
                <div className="flex gap-3 text-gray-500">
                  <a href="#" className="hover:text-black">
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
                  <a href="#" className="hover:text-black">
                    <FontAwesomeIcon icon={faTrashCan} />
                  </a>
                  <a href="#" className="hover:text-black">
                    <FontAwesomeIcon icon={faPrint} />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchasedCourses;
