import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Switch } from "antd";
import React, { useState } from "react";
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { createCourse } from "../../redux/actions/course.action";
import { initialCourseData } from ".";
import Paid from "./Paid";

const Price = ({ sidebar, courseData, setCourseData, setCurrent }) => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await dispatch(createCourse(courseData));
      setCourseData(initialCourseData);
      setCurrent(0);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handlePrevious = () => {
    setCurrent(2);
  };

  const [activeTab, setActiveTab] = useState("Free");

  const Free = () => {
    const [checked, setChecked] = useState(false);
    const onChange = (checked) => {
      console.log(`switch to ${checked}`);
      setChecked(checked);
    };
    const [checkedd, setCheckedd] = useState(false);
    const onChangee = (checkedd) => {
      console.log(`switch to ${checkedd}`);
      setCheckedd(checkedd);
    };
    return (
      <div className="bg-white ml-[-120px] h-[200px] w-[1000px]">
        <div className="ml-[400px] pt-5">
          <div className="flex gap-3">
            <Switch
              defaultChecked={checked}
              onChange={onChange}
              className="w-[10px]"
              style={{ backgroundColor: checked ? "#ED2A26" : "#CCCCCC" }}
            />
            <div className="flex flex-col text-[12px] pt-1 font-semibold">
              <h3>Require Log In</h3>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <Switch
              defaultChecked={checkedd}
              onChange={onChangee}
              className="w-[10px]"
              style={{ backgroundColor: checkedd ? "#ED2A26" : "#CCCCCC" }}
            />
            <div className="flex flex-col text-[12px] pt-1 font-semibold">
              <h3>Require Enroll</h3>
            </div>
          </div>
          <div className="-ml-[360px] text-[#606060] mt-10">
            <p>
              If the course is free, if student require to enroll your course,
              if not required enroll, if students required sign in to your
              website to take<p className="text-center">this course.</p>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex gap-x-3">
        <FontAwesomeIcon icon={faMoneyBill1} className="mt-[2px] text-[20px]" />
        <p className="text-[18px] font-semibold">Price</p>
      </div>
      <Divider />
      <div className="w-[1000px] h-[380px]">
        <div className="bg-white pt-5 px-5 h-[300px] border">
          <div className="bg-[#F3F3F3] border">
            <button
              className={`text-black font-medium text-[14px] px-3 py-3 w-[50%] ${
                activeTab === "Free" ? "bg-red-600 text-white" : ""
              }`}
              onClick={() => setActiveTab("Free")}
            >
              Free
            </button>
            <button
              className={`text-black font-medium text-[14px] px-3 py-3 w-[50%] ${
                activeTab === "Paid" ? "bg-red-600 text-white" : ""
              }`}
              onClick={() => setActiveTab("Paid")}
            >
              Paid
            </button>
          </div>
          <div className={`mt-4 ${sidebar ? "ml-28" : "ml-[100px]"}`}>
            {activeTab === "Free" && <Free />}
            {activeTab === "Paid" && (
              <Paid
                courseData={courseData}
                setCourseData={setCourseData}
                setCurrent={setCurrent}
              />
            )}
          </div>
        </div>
      </div>
      <button
        className="py-3 px-4 bg-white text-[#48c790] border hover:bg-black hover:text-white mr-[850px]"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className="py-3 px-7 bg-white text-[#48c790] border hover:bg-black hover:text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Price;
