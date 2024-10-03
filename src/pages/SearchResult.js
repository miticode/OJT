import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Image, Spinner } from "react-bootstrap";
import { Dropdown, Input, Menu, Radio, Space } from "antd";
import {
  DownOutlined,
  MoreOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCourses,
  getEnrolledCourses,
  searchCourses,
} from "../redux/actions/course.action";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllInstructor } from "../redux/actions/instructor.action";

const items = [
  {
    key: "1",
    label: (
      <div className="border-b">
        <span className="font-semibold h-[100px] pb-[30px]">Topic</span>
      </div>
    ),
    children: [
      {
        key: "2",
        label: <Radio value={1}>SEO (428)</Radio>,
      },
      {
        key: "3",
        label: <Radio value={2}>Php (1526)</Radio>,
      },
      {
        key: "4",
        label: <Radio value={3}>WordPress Pro (428)</Radio>,
      },
      {
        key: "5",
        label: <Radio value={4}>WooCommerce (958)</Radio>,
      },
      {
        key: "6",
        label: <Radio value={6}>Bootstrap (748)</Radio>,
      },
      {
        key: "7",
        label: <Radio value={7}>Web Development (2256)</Radio>,
      },
      {
        key: "8",
        label: <Radio value={8}>Web Design (4859)</Radio>,
      },
      {
        key: "9",
        label: <Radio value={9}>Digital Marketing (2458)</Radio>,
      },
      {
        key: "10",
        label: <Radio value={10}>E-commerce (1245)</Radio>,
      },
      {
        key: "11",
        label: <Radio value={11}>WordPress Themes (5879)</Radio>,
      },
      {
        key: "12",
        label: <Radio value={12}>WordPress Plugins (2654)</Radio>,
      },
      {
        key: "13",
        label: <Radio value={13}>WordPress Hosting (1485)</Radio>,
      },
      {
        key: "14",
        label: <Radio value={14}>Elementor (3658)</Radio>,
      },
      {
        key: "15",
        label: <Radio value={15}>WordPress for Ecommerce (3658)</Radio>,
      },
    ],
  },

  {
    key: "16",
    label: (
      <div className="border-b">
        <span className="font-semibold  ">Level</span>
      </div>
    ),
    children: [
      {
        key: "17",
        label: <Radio value={1}>All Level (5000)</Radio>,
      },
      {
        key: "18",
        label: <Radio value={2}>Beginner (3517)</Radio>,
      },
      {
        key: "19",
        label: <Radio value={3}>Intermediate (1560)</Radio>,
      },
      {
        key: "20",
        label: <Radio value={4}>Expert (240) </Radio>,
      },
    ],
  },
  {
    key: "21",
    label: (
      <div className="border-b">
        <span className="font-semibold  ">Language</span>
      </div>
    ),
    children: [
      {
        key: "22",
        label: <Radio value={1}>English (500)</Radio>,
      },
      {
        key: "23",
        label: <Radio value={2}>Español (250)</Radio>,
      },
      {
        key: "24",
        label: <Radio value={3}>Português (270)</Radio>,
      },
      {
        key: "25",
        label: <Radio value={4}>日本語 (190)</Radio>,
      },
      {
        key: "26",
        label: <Radio value={6}>Deutsch (120)</Radio>,
      },
      {
        key: "27",
        label: <Radio value={7}>Français (105)</Radio>,
      },
      {
        key: "28",
        label: <Radio value={8}>Türkçe (90)</Radio>,
      },
      {
        key: "29",
        label: <Radio value={9}>हिन्दी (80)</Radio>,
      },
      {
        key: "30",
        label: <Radio value={10}>Italiano (178)</Radio>,
      },
      {
        key: "31",
        label: <Radio value={11}>Polski (50)</Radio>,
      },
      {
        key: "32",
        label: <Radio value={12}>ภาษาไทย (27)</Radio>,
      },
      {
        key: "33",
        label: <Radio value={13}>Română (157)</Radio>,
      },
      {
        key: "34",
        label: <Radio value={14}>Telugu (110)</Radio>,
      },
      {
        key: "35",
        label: <Radio value={15}>मराठी (50)</Radio>,
      },
    ],
  },
  {
    key: "36",
    label: (
      <div className="border-b">
        <span className="font-semibold  ">Price</span>
      </div>
    ),
    children: [
      {
        key: "37",
        label: <Radio value={1}>Paid (3000)</Radio>,
      },
      {
        key: "38",
        label: <Radio value={2}>Fre (50)</Radio>,
      },
    ],
  },
  {
    key: "39",
    label: (
      <div className="border-b">
        <span className="font-semibold  ">Features</span>
      </div>
    ),
    children: [
      {
        key: "40",
        label: <Radio value={1}>Captions (4780)</Radio>,
      },
      {
        key: "41",
        label: <Radio value={2}>Quizzes (890)</Radio>,
      },
      {
        key: "42",
        label: <Radio value={3}>Coding Exercise (350)</Radio>,
      },
      {
        key: "43",
        label: <Radio value={4}>Pratice Test (1050)</Radio>,
      },
      {
        key: "44",
        label: <Radio value={6}>Social Science</Radio>,
      },
      {
        key: "45",
        label: <Radio value={7}>English Language</Radio>,
      },
      {
        key: "46",
        label: <Radio value={8}>German Language</Radio>,
      },
      {
        key: "47",
        label: <Radio value={9}>Sign Language</Radio>,
      },
      {
        key: "48",
        label: <Radio value={10}>French Language</Radio>,
      },
      {
        key: "49",
        label: <Radio value={9}>Spanish Language</Radio>,
      },
      {
        key: "50",
        label: <Radio value={9}>English Grammar</Radio>,
      },
      {
        key: "51",
        label: <Radio value={9}>IELTS</Radio>,
      },
    ],
  },
  {
    key: "52",
    label: (
      <div className="border-b">
        <span className="font-semibold  ">Rating</span>
      </div>
    ),
    children: [
      {
        key: "53",
        label: (
          <Radio value={1}>
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            5.0 & up (5000)
          </Radio>
        ),
      },
      {
        key: "54",
        label: (
          <Radio value={2}>
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            4.0 & up (2500)
          </Radio>
        ),
      },
      {
        key: "55",
        label: (
          <Radio value={3}>
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            3.0 & up (1500)
          </Radio>
        ),
      },
      {
        key: "56",
        label: (
          <Radio value={4}>
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#FFD43B] px-1"
              style={{ fontSize: "17px" }}
            />
            2.0 & up (122)
          </Radio>
        ),
      },
    ],
  },
  {
    key: "57",
    label: (
      <div className="border-b">
        <span className="font-semibold  ">Video Duration</span>
      </div>
    ),
    children: [
      {
        key: "58",
        label: <Radio value={1}>0-2 Hours (500)</Radio>,
      },
      {
        key: "59",
        label: <Radio value={2}>3-6 Hours (150)</Radio>,
      },
      {
        key: "60",
        label: <Radio value={3}>7-18 Hours (90)</Radio>,
      },
      {
        key: "61",
        label: <Radio value={4}>19+ Hours (25)</Radio>,
      },
    ],
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
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
  handleMouseEnter,
  handleMouseLeave,
  index,
  hoveredCourse,
}) => (
  <div
    className="flex border p-[10px] rounded-sm shadow-md relative"
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
  >
    <div className="relative w-[350px] h-full">
      <div>
        <Image
          src={thumbnail}
          className="w-[350px] h-[180px] object-cover rounded-sm"
        />
      </div>
      <span className="absolute top-2 left-2 bg-yellow-400 text-white text-sm font-medium gap-2 px-3 py-1 rounded">
        <FontAwesomeIcon icon={faStar} />
        {rate}
      </span>
      <span className="absolute top-2 right-0 bg-[#fa8305] text-white text-[10px] font-medium text-xs px-2 py-1 rounded-sm">
        BESTSELLER
      </span>
      <span className="absolute bottom-2 right-2 bg-[#505050] text-white text-[12px] font-medium px-[10px] py-[5px] rounded-[3px]">
        {hours} hours
      </span>
    </div>
    <div className="ml-4 flex flex-col justify-between">
      <div className="flex justify-between items-center mt-2">
        <span className="text-[#686f7a] text-[12px]">
          {views} views • {date}
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
          className={`flex items-center  mr-[-250px] ${
            index === hoveredCourse ? "block" : "hidden"
          }`}
        >
          <ShoppingCartOutlined className="text-black text-[18px]" />
        </div>

        <div className="text-[18px] font-bold">{price}</div>
      </div>
    </div>
  </div>
);

const levelKeys = getLevelKeys(items);

// Drop down Filters
const drop = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const combineDrop = [...drop];

const SearchResult = ({ sidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [coursesToShow, setCoursesToShow] = useState(11);

  const dispatch = useDispatch();

  const [hoveredCourse, setHoveredCourse] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCourse(index);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };

  const userId = useSelector((state) => state.auth.id);

  console.log(userId);
  const { courses, loading, error } = useSelector(
    (state) => state.enrolledCourses
  );

  useEffect(() => {
    if (userId) {
      dispatch(getEnrolledCourses(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        dispatch(searchCourses(searchQuery));
      } else {
        dispatch(getAllCourses());
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, dispatch]);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  const [value, setValue] = useState(1);
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );

    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const onSelect = ({ key }) => {
    setSelectedKeys([key]);
    setValue(Number(key));
  };
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div>
        <div className="text-black bg-white ">
          <div className="flex justify-between">
            <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
              <p onClick={handleHome}>Home /</p>
              <p className="text-[#787878]">Search Result</p>
            </div>
            <div className="text-black pt-[80px] pr-[10%] text-[14px] flex items-center text-center cursor-pointer">
              <input
                type="text"
                placeholder="Search"
                className=" w-[250px] h-11 border border-gray-200 pl-14 "
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button type="submit" className="bottom-1 right-60  relative">
                <Image
                  className="max-w-none mt-2"
                  src={require("../assets/search.png")}
                  width={12}
                  height={12}
                  alt="Search"
                ></Image>
              </button>
            </div>
          </div>
          <div className="pt-5 pb-3 pl-[11%] text-2xl">
            <h1>Search Result</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-[50px] pl-[140px] ">
          <div>
            <div className="flex pl-[30px] text-black ">
              <div>
                <h2 className="text-xl  w-full">Filters</h2>
              </div>
              <div className="pl-[310px] pt-2">
                <Dropdown menu={{ items: combineDrop }} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="font-semibold">
                      Sort
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
            <hr className=" ml-8 w-[400px] pb-[30px]" />
            <Radio.Group
              onChange={onChange}
              value={value}
              style={{ marginBottom: 20 }}
            >
              <Menu
                className="bg-transparent border border-[#F7F7F7] border-transparent "
                mode="inline"
                defaultSelectedKeys={["8"]}
                selectedKeys={selectedKeys}
                openKeys={stateOpenKeys}
                onOpenChange={onOpenChange}
                onSelect={onSelect}
                style={{
                  width: 450,
                }}
                items={items.map((item) => ({
                  ...item,
                }))}
              />
            </Radio.Group>
          </div>
          <div>
            <h1 className="text-md text-black">{courses.length} Results</h1>
            <div className="col-span-2 space-y-6 ">
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
                  <div className="col-span-2 space-y-6 w-[900px]">
                    <CourseCard
                      key={index}
                      thumbnail={course.thumbnail}
                      rating={course.rating}
                      title={course.title}
                      category={course.category}
                      author={course.author}
                      hours={course.hours}
                      price={course.price}
                      views={course.views}
                      date={course.date}
                      index={index}
                      hoveredCourse={hoveredCourse}
                      handleMouseEnter={handleMouseEnter}
                      handleMouseLeave={handleMouseLeave}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
