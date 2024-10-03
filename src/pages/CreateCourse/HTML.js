import { message, Upload } from "antd";
import { useState } from "react";
import thumnail from "../../assets/thumnail.png";

const HTML = ({ courseData, setCourseData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };
  const [fileList, setFileList] = useState([]);
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
  return (
    <div className="pt-5 -ml-[20px]">
      <div className=" pb-6 bg-white w-[480px] h-[150px] text-center pt-3">
        {/* <Upload {...uploadProps}>
          <button className="border-red-500 font-semibold border px-5 py-2 mt-5 text-red-500 shadow-md">
            UPLOAD VIDEO
          </button>
        </Upload> */}
        <input
          name="date"
          placeholder="Course title here"
          className="border mt-4 border-gray-200 w-[50%] h-10 pl-5 font-normal"
          value={courseData.date}
          onChange={handleChange}
        />
        <p className="pt-4 text-[14px]">File Format: .mp4</p>
      </div>
      <div>
        <p className="text-[14px] font-semibold mt-9">Course thumbnail*</p>
        <img
          src={thumnail}
          alt="Course thumbnail"
          className="w-[500px] h-[280px] object-cover"
        />
        <div className=" pb-6 bg-white w-[500px] text-center">
          <input
            name="thumbnail"
            placeholder="Course title here"
            className="border mt-4 border-gray-200 w-[50%] h-10 pl-5 font-normal"
            value={courseData.thumbnail}
            onChange={handleChange}
          />

          <p className="pt-4 text-[13px]">
            Size: 590x300 pixels. Supports: jpg,jpeg, or png
          </p>
        </div>
      </div>
    </div>
  );
};
export default HTML;
