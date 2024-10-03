import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Divider, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

const Basic = ({ courseData, setCourseData, setCurrent }) => {
  const handleNext = () => {
    if (
      courseData.title.trim() === "" ||
      courseData.shortDescription.trim() === "" ||
      courseData.description.trim() === "" ||
      courseData.learnings.trim() === "" ||
      courseData.requirements.trim() === "" ||
      !isLevelSelected ||
      !isLanguageSelected
    ) {
      alert(
        "Vui lòng điền đầy đủ thông tin bắt buộc và chọn giá trị cho các dropdown trước khi chuyển tiếp."
      );
      return;
    }
    setCurrent(2);
  };
  const [selectedLevel, setSelectedLevel] = useState("Nothing Selected");
  const [selectedLanguage, setSelectedLanguage] = useState("Select Audio");
  const [isLevelSelected, setIsLevelSelected] = useState(false);
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const items = [
    { label: "Web Development | Python", key: "0" },
    { label: "Development | JavaScript", key: "1" },
    { label: "Development | C++", key: "2" },
  ];

  const audioItems = [
    { label: "English", key: "6" },
    { label: "Spanish", key: "7" },
    { label: "French", key: "8" },
    { label: "German", key: "9" },
    { label: "Italian", key: "10" },
    { label: "Chinese", key: "11" },
  ];

  const combinedAudioItems = [...audioItems];

  const combinedItems = [...items];

  const handleMenuLevel = (e) => {
    const selectedItem = combinedItems.find((item) => item.key === e.key);
    setSelectedLevel(selectedItem.label);
    setCourseData({
      ...courseData,
      language: selectedItem.label,
    });
    setIsLevelSelected(true);
  };

  const handleMenuAudioLanguage = (e) => {
    const selectedItem1 = combinedAudioItems.find((item) => item.key === e.key);
    setSelectedLanguage(selectedItem1.label);
    setCourseData({
      ...courseData,
      audioLanguage: selectedItem1.label,
    });
    setIsLanguageSelected(true);
  };

  return (
    <div>
      <div className="flex gap-x-3">
        <FontAwesomeIcon icon={faCircleInfo} className="mt-[4px] text-[15px]" />
        <p className="text-[18px] font-semibold">Basic Information</p>
      </div>
      <Divider />
      <div>
        <div className="py-4 px-4 pb-10 bg-white">
          <div className="pl-5 pt-5 pr-5">
            <div>
              <p className="font-semibold text-[14px]">Course Title*</p>
              <input
                name="title"
                placeholder="Course title here"
                className="border border-gray-200 w-[100%] h-10 pl-5 font-normal"
                value={courseData.title}
                onChange={handleChange}
              />

              <p className="text-[12px] text-[#686F7A] pt-1">
                (Please make this a maximum of 100 characters and unique.)
              </p>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Short Description*</p>
              <input
                name="shortDescription"
                placeholder="Item description here..."
                className="border border-gray-200 w-[100%] h-[130px] pl-5 font-normal pb-[100px]"
                value={courseData.shortDescription}
                onChange={handleChange}
              />
              <p className="text-[12px] text-[#686F7A] pt-1">220 words</p>
            </div>
            <div>
              <p className="font-semibold text-[14px]">Course Description*</p>
              <input
                name="description"
                placeholder="Item description here..."
                className="border border-gray-200 w-[100%] h-[130px] pl-5 font-normal pb-[100px]"
                value={courseData.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex mt-10">
              <div className="pr-[30px]">
                <p className="font-semibold text-[14px]">
                  What will students learn in your course?*
                </p>
                <input
                  name="learnings"
                  className="border border-gray-200 w-[500px] h-[130px] pl-5 font-normal pb-[100px]"
                  value={courseData.learnings}
                  onChange={handleChange}
                />
                <p className="text-[11px] text-[#686F7A] pt-1">
                  Student will gain this skills, knowledge after completing this
                  course. (One per line).
                </p>
              </div>
              <div>
                <p className="font-semibold text-[14px]">Requirements*</p>
                <input
                  name="requirements"
                  className="border border-gray-200 w-[500px] h-[130px] pl-5 font-normal pb-[100px]"
                  value={courseData.requirements}
                  onChange={handleChange}
                />
                <p className="text-[11px] text-[#686F7A] pt-1">
                  What knowledge, technology, tools required by users to start
                  this course. (One per line).
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-[14px] pt-7 pl-2">
                  Course Level*
                </p>
                <button className="border border-gray-200 w-[100%] h-[50px] font-normal text-[#48c790] hover:text-black">
                  <Dropdown
                    menu={{
                      items: combinedItems,
                      onClick: handleMenuLevel,
                    }}
                    trigger={["click"]}
                    value={courseData.language}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      <div className="gap-[350px] flex">
                        <div>
                          <p className="mt-[8px] text-[14px]">
                            {selectedLevel}
                          </p>
                        </div>
                        <div className="pt-2">
                          <DownOutlined />
                        </div>
                      </div>
                    </Space>
                  </Dropdown>
                </button>
              </div>
              <div>
                <p className="font-semibold text-[14px] pt-7 pl-2">
                  Audio Language*
                </p>
                <button className="border border-gray-200 w-[100%] h-[50px] font-normal text-[#48c790] hover:text-black">
                  <Dropdown
                    menu={{
                      items: combinedAudioItems,
                      onClick: handleMenuAudioLanguage,
                    }}
                    trigger={["click"]}
                    value={courseData.audioLanguage}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      <div className="gap-[360px] flex">
                        <p className="mt-[8px] text-[14px]">
                          {selectedLanguage}
                        </p>
                        <DownOutlined />
                      </div>
                    </Space>
                  </Dropdown>
                </button>
              </div>
              <div>
                <p className="font-semibold text-[14px] pt-7 pl-2">
                  Close Caption*
                </p>
                <button className="border border-gray-200 w-[100%] h-[50px] font-normal text-[#48c790] hover:text-black">
                  <Dropdown
                    menu={{ items: combinedItems }}
                    trigger={["click"]}
                    onClick={(e) => e.preventDefault()}
                    value={courseData.closeCaption}
                  >
                    <Space>
                      <div className="gap-[330px] flex">
                        <p className="mt-[8px] text-[14px]">Select Caption</p>
                        <DownOutlined />
                      </div>
                    </Space>
                  </Dropdown>
                </button>
              </div>
              <div>
                <p className="font-semibold text-[14px] pt-7 pl-2">
                  Course Category*
                </p>
                <button className="border border-gray-200 w-[100%] h-[50px] font-normal text-[#48c790] hover:text-black">
                  <Dropdown
                    menu={{ items: combinedItems }}
                    trigger={["click"]}
                    onClick={(e) => e.preventDefault()}
                    value={courseData.dropdown}
                  >
                    <Space>
                      <div className="gap-[330px] flex">
                        <p className="mt-[8px] text-[14px]">Web Development</p>
                        <DownOutlined />
                      </div>
                    </Space>
                  </Dropdown>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="mt-10 py-3 px-6 bg-white text-[#48c790] border hover:bg-black hover:text-white"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};
export default Basic;
