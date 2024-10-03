import { Divider, Upload } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import thumnail from "../../assets/thumnail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Button, message } from "antd";
import { createCourse } from "../../redux/actions/course.action";
import HTML from "./HTML";

const Media = ({ courseData, setCourseData, setCurrent, sidebar }) => {
  const [fileList, setFileList] = useState([]);
  const [activeTab, setActiveTab2] = useState("HTML");

  const dispatch = useDispatch();

  const handlePrevious = () => {
    setCurrent(0);
  };

  const handleNext = () => {
    setCurrent(3);
  };
  const uploadProps = {
    name: "file",
    accept: "image/*",
    multiple: true,
    fileList: fileList,
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
      }
      return isImage || Upload.LIST_IGNORE;
    },
    onChange(info) {
      let newFileList = [...info.fileList];
      newFileList = newFileList.slice(-5);
      setFileList(newFileList);

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove(file) {
      setFileList((prevFileList) =>
        prevFileList.filter((item) => item.uid !== file.uid)
      );
    },
  };

  const External = () => {
    return (
      <div className="pt-6 -ml-[20px]">
        <div>
          <p className="text-[14px] font-semibold">External URL*</p>
          <input
            placeholder="External Video URL"
            className="w-[100%] h-[40px]  text-[14px] pl-2 border border-gray-100"
          />
        </div>
        <div>
          <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
          <img
            src={thumnail}
            alt="Course thumbnail"
            className="w-[500px] h-[280px] object-cover"
          />
          <div className=" pb-6 bg-white w-[500px] text-center">
            <Upload {...uploadProps}>
              <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500">
                CHOOSE THUMBNAIL
              </button>
            </Upload>
            <p className="pt-4 text-[13px]">
              Size: 590x300 pixels. Supports: jpg,jpeg, or png
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Youtube = () => {
    return (
      <div className="pt-6 -ml-[20px]">
        <div>
          <p className="text-[14px] font-semibold">Youtube URL*</p>
          <input
            placeholder="External Video URL"
            className="w-[100%] h-[40px]  text-[14px] pl-2 border border-gray-100"
          />
        </div>
        <div>
          <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
          <img
            src={thumnail}
            alt="Course thumbnail"
            className="w-[500px] h-[280px] object-cover"
          />
          <div className=" pb-6 bg-white w-[500px] text-center">
            <Upload {...uploadProps}>
              <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500">
                CHOOSE THUMBNAIL
              </button>
            </Upload>
            <p className="pt-4 text-[13px]">
              Size: 590x300 pixels. Supports: jpg,jpeg, or png
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Vimeo = () => {
    return (
      <div className="pt-6 -ml-[20px]">
        <div>
          <p className="text-[14px] font-semibold">Vimeo URL*</p>
          <input
            placeholder="External Video URL"
            className="w-[100%] h-[40px]  text-[14px] pl-2 border border-gray-100"
          />
        </div>
        <div>
          <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
          <img
            src={thumnail}
            alt="Course thumbnail"
            className="w-[500px] h-[280px] object-cover"
          />
          <div className=" pb-6 bg-white w-[500px] text-center">
            <Upload {...uploadProps}>
              <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500">
                CHOOSE THUMBNAIL
              </button>
            </Upload>
            <p className="pt-4 text-[13px]">
              Size: 590x300 pixels. Supports: jpg,jpeg, or png
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Embedded = () => {
    return (
      <div className="pt-6 -ml-[20px]">
        <div>
          <p className="text-[14px] font-semibold">Embedded Code*</p>
          <input
            placeholder="Place your embedded code herex"
            className="w-[100%] h-[130px] pb-[100px] text-[14px] pl-2"
          />
        </div>
        <div>
          <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
          <img
            src={thumnail}
            alt="Course thumbnail"
            className="w-[500px] h-[280px] object-cover"
          />
          <div className=" pb-6 bg-white w-[500px] text-center">
            <Upload {...uploadProps}>
              <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500">
                CHOOSE THUMBNAIL
              </button>
            </Upload>
            <p className="pt-4 text-[13px]">
              Size: 590x300 pixels. Supports: jpg,jpeg, or png
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[900px]">
      <div className="flex gap-x-3">
        <FontAwesomeIcon icon={faImage} className="mt-[4px] text-[15px]" />
        <p className="text-[18px] font-semibold">Media</p>
      </div>
      <Divider />
      <div>
        <p className="text-[#7c7c7c] text-[13px]   ">
          Intro Course overview provider type. (.mp4, YouTube, Vimeo etc.)
        </p>
      </div>
      <div className="-ml-[80px]">
        <div>
          <div className={`flex gap-5   ${sidebar ? "ml-10" : "ml-[80px]"}`}>
            <div className="bg-white">
              <button
                className={`text-black font-medium text-[14px] b px-5 py-3 ${
                  activeTab === "HTML" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab2("HTML")}
              >
                HTML5(mp4)
              </button>
            </div>
            <div className="bg-white">
              <button
                className={`text-black font-medium text-[14px]  px-5 py-3 ${
                  activeTab === "External" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab2("External")}
              >
                External URL
              </button>
            </div>
            <div className="bg-white">
              <button
                className={`text-black font-medium text-[14px]  px-5 py-3 ${
                  activeTab === "Youtube" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab2("Youtube")}
              >
                Youtube
              </button>
            </div>

            <div className="bg-white">
              <button
                className={`text-black font-medium text-[14px]  px-5 py-3 ${
                  activeTab === "Vimeo" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab2("Vimeo")}
              >
                Vimeo
              </button>
            </div>

            <div className="bg-white">
              <button
                className={`text-black  font-medium text-[14px]  px-5 py-3 ${
                  activeTab === "Embedded" ? "bg-red-600 text-white" : ""
                }`}
                onClick={() => setActiveTab2("Embedded")}
              >
                Embedded
              </button>
            </div>
          </div>
        </div>
        <div className={`mt-4 ${sidebar ? "ml-28" : "ml-[100px]"}`}>
          {activeTab === "HTML" && (
            <HTML
              courseData={courseData}
              setCourseData={setCourseData}
              setCurrent={setCurrent}
            />
          )}
          {activeTab === "External" && <External />}
          {activeTab === "Youtube" && <Youtube />}
          {activeTab === "Vimeo" && <Vimeo />}
          {activeTab === "Embedded" && <Embedded />}
        </div>
      </div>
      <div className="mt-[60px]">
        <button
          className="py-3 px-4 bg-white text-[#48c790] border hover:bg-black hover:text-white mr-[850px] "
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="py-3 px-7 bg-white text-[#48c790] border hover:bg-black hover:text-white "
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Media;
