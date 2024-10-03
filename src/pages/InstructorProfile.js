import {
  DislikeOutlined,
  HeartOutlined,
  LikeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourses } from "../redux/actions/course.action";

const InstructorProfile = ({ sidebar }) => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCourse(index);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };
  const [activeTab, setActiveTab] = useState("About");
  const userId = useSelector((state) => state.auth.id);
  const { courses, loading, error } = useSelector(
    (state) => state.enrolledCourses
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(getEnrolledCourses(userId));
    }
  }, [dispatch, userId]);
  const About = () => {
    return (
      <div className="mt-10">
        <h1 className="text-black text-xl font-medium">About me</h1>
        <h2 className="text-[#7d7b89] text-md font-light mr-36 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          scelerisque nibh sed ligula blandit, quis faucibus lorem pellentesque.
          Suspendisse pulvinar dictum pellentesque. Vestibulum at sagittis
          lectus, sit amet aliquam turpis. In quis elit tempus, semper justo
          vitae, lacinia massa. Etiam sagittis quam quis fermentum lacinia.
          Curabitur blandit sapien et risus congue viverra. Mauris auctor risus
          sit amet cursus sollicitudin. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla feugiat sodales massa, in viverra dolor
          condimentum ut. In imperdiet, justo nec volutpat blandit, tellus justo
          tempor quam, sed pretium nibh nunc nec mauris. Mauris vel malesuada
          magna. Quisque iaculis molestie purus, non luctus mauris porta id.
          Maecenas imperdiet tincidunt mauris vestibulum vulputate. Aenean
          sollicitudin pretium nibh, et sagittis risus tincidunt ac. Phasellus
          scelerisque rhoncus massa, ac euismod massa pharetra non. Phasellus
          dignissim, urna in iaculis varius, turpis libero mollis velit, sit
          amet euismod arcu mi ac nibh. Praesent tincidunt eros at ligula
          pellentesque elementum. Fusce condimentum enim a tellus egestas, sit
          amet rutrum elit gravida. Pellentesque in porta sapien. Fusce
          tristique maximus ipsum et mollis. Sed at massa ac est dapibus
          vulputate at eu nibh.
        </h2>
      </div>
    );
  };

  const Courses = () => {
    return (
      <div>
        <div className="text-black font-semibold text-xl my-10">
          My courses (8)
        </div>
        <div className="grid grid-cols-4 gap-y-[20px] mt-8 mr-36">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-white cursor-pointer relative ${
                sidebar ? "h-[340px] w-[270px]" : "h-[340px] w-[270px]"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="">
                <div
                  className={`absolute top-4 left-3 bg-[#fbcb0b] rounded-sm px-2 py-1 z-10 w-[60px] h-[30px]
                  }`}
                >
                  <div className="inline-flex items-center">
                    <Image
                      className="w-[14px] h-[20px] ml-1"
                      src={require("../../src/assets/star.png")}
                    />
                    <div className="text-[16px] ml-1 text-white">
                      {course.rate}
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-[#fa8305] absolute z-50 top-4 text-sm text-white font-medium text-center  right-[12px] ml-[10px]  w-[80px] h-[20px]`}
                >
                  Best Seller
                </div>
                <Image
                  className={`absolute max-w-none indent-0 shadow-inset-bottom mt-2 w-[250px] h-[130px] ml-[10px]`}
                  src={course.thumbnail}
                  alt="Search"
                />
                <span className="text-xs text-white absolute bottom-[210px] right-[20px] p-[6px] bg-[#505050] rounded-[3px] font-bold">
                  {course.hours}
                </span>
                <div
                  className={`relative left-2 top-2 shadow-inset-bottom ${
                    sidebar ? "w-[250px] h-[130px]" : "w-[250px] h-[130px]"
                  }`}
                >
                  {hoveredCourse === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button className="group relative" variant="light">
                        <div className="border-2 border-white p-4 rounded-full group-hover:bg-black group-hover:opacity-30">
                          <Image
                            className="w-[30px] inset-0 h-[35px] ml-2 opacity-100 z-50 group-hover: opacity-0"
                            src={require("../../src/assets/pause.png")}
                          />
                        </div>
                      </Button>
                    </div>
                  )}
                </div>
                {/* <div
                  className={`relative left-2 top-2 shadow-inset-bottom ${
                    sidebar ? "w-[250px] h-[130px]" : "w-[250px] h-[130px]"
                  }`}
                ></div> */}
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
                  <Button
                    className={`group relative ${sidebar ? "ml-24" : "ml-24"}`}
                  >
                    <Image
                      className={`w-[16px] h-[16px] mt-4 `}
                      src={require("../../src/assets/more.png")}
                    />
                    <div className="absolute left-2 z-50 w-[200px] bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300">
                      <ul className="py-1">
                        <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer text-start flex">
                          <Image
                            className="mr-2"
                            src={require("../../src/assets/share.png")}
                          />
                          Share
                        </li>
                        <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer text-start flex">
                          <Image
                            className="mr-2"
                            src={require("../../src/assets/time.png")}
                          />
                          Save
                        </li>
                        <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer text-start flex">
                          <Image
                            className="mr-2 w-[16px] h-[16px]"
                            src={require("../../src/assets/ban.png")}
                          />
                          Not Interested
                        </li>
                        <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer text-start flex">
                          <Image
                            className="mr-2 w-[16px] h-[16px]"
                            src={require("../../src/assets/wind-flag.png")}
                          />
                          Report
                        </li>
                      </ul>
                    </div>
                  </Button>
                </div>
                <div className="ml-3 text-base font-bold">{course.title}</div>
                <div className="ml-3 text-sm text-[#91979f] mt-2">
                  {course.language}
                </div>
                <div className="flex  ml-3">
                  <div className="flex mt-4 text-base">
                    <h1 className="mr-1 text-[#91979f] font-normal">By</h1>{" "}
                    <h1>{course.instructor}</h1>
                  </div>
                  <div
                    className={` mt-[17px] font-medium flex ${
                      sidebar ? " ml-28" : "ml-28"
                    }`}
                  >
                    <ShoppingCartOutlined
                      className={`mt-[1px] hover:text-red-600 ${
                        hoveredCourse === index ? "block" : "hidden"
                      }`}
                    />
                    {course.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const Discussion = () => {
    return (
      <div>
        <div className="text-black font-semibold text-xl my-10">
          Discussions
        </div>
        <div className="bg-white w-[1180px] h-[140px]">
          <div className="flex ml-10 pt-4">
            <Image
              className="w-[40px] h-[40px]"
              src={require("../../src/assets/img1.png")}
            />
            <div
              className={`ml-3 border-2 border-[#F7F7F7] bg-[#F7F7F7] px-4 text-base h-[45px] relative pt-1 group-focus-within:border-black ${
                sidebar ? "w-[1080]" : "w-[1080px]"
              }`}
            >
              <input
                type="text"
                placeholder="Search for Tuts Videos, Tutors, Tests and more.."
                className={`focus:outline-none text-sm mt-2 text-black bg-[#F7F7F7] placeholder-gray-500 focus:placeholder-black focus:text-black rounded-[5px] ${
                  sidebar ? "w-[980px]" : "w-[980px]"
                }`}
              />
            </div>
          </div>
          <div
            className={`flex justify-end mt-4 ${sidebar ? "mr-16" : "mr-2"}`}
          >
            <button className="text-white font-medium border rounded-[4px] bg-[#ed2a26] border-[#ed2a26] px-7 py-[11px]">
              Comment
            </button>
          </div>
        </div>
        <div className="bg-white w-[1180px] h-[200px] mt-10">
          <div className="flex ml-10 pt-4">
            <Image
              className="w-[50px] h-[50px]"
              src={require("../../src/assets/img1.png")}
            />
            <div className="ml-4">
              <h1>John Doe</h1>
              <h5 className="text-gray-500 text-xs">2 hours ago</h5>
            </div>
            <div className="relative ml-auto mr-10 mt-4 group">
              <div className="relative">
                <button className="flex items-center">
                  <Image
                    className="w-[16px] h-[16px]"
                    src={require("../../src/assets/more.png")}
                  />
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer flex">
                      <Image
                        className="mr-2 w-[16px] h-[16px]"
                        src={require("../../src/assets/edit.png")}
                      />
                      Edit
                    </li>
                    <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer flex">
                      <Image
                        className="mr-2 w-[16px] h-[16px]"
                        src={require("../../src/assets/delete.png")}
                      />
                      Delete
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-10 pt-4 text-gray-400 font-normal">
            Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia,
            nunc sit amet tincidunt venenatis.
          </div>
          <div className="flex ml-10 pt-4 cursor-pointer">
            <div className="flex gap-2 hover:text-[#ED2A26]">
              <LikeOutlined />
              10
            </div>
            <div className="flex gap-2 ml-4 hover:text-[#ED2A26]">
              <DislikeOutlined />
              10
            </div>
            <div className="flex gap-2 ml-4 hover:text-[#ED2A26]">
              <HeartOutlined />
            </div>
            <Button className="hover:text-[#ED2A26] ml-4">Reply</Button>
          </div>
        </div>
        <div className="bg-white w-[1180px] h-[200px] mt-1">
          <div className="flex ml-20 pt-4">
            <Image
              className="w-[50px] h-[50px]"
              src={require("../../src/assets/img1.png")}
            />
            <div className="ml-4">
              <h1>John Doe</h1>
              <h5 className="text-gray-500 text-xs">2 hours ago</h5>
            </div>
            <div className="relative ml-auto mr-10 mt-4 group">
              <div className="relative">
                <button className="flex items-center">
                  <Image
                    className="w-[16px] h-[16px]"
                    src={require("../../src/assets/more.png")}
                  />
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer flex">
                      <Image
                        className="mr-2 w-[16px] h-[16px]"
                        src={require("../../src/assets/edit.png")}
                      />
                      Edit
                    </li>
                    <li className="px-4 py-2 hover:bg-[#ffecec] cursor-pointer flex">
                      <Image
                        className="mr-2 w-[16px] h-[16px]"
                        src={require("../../src/assets/delete.png")}
                      />
                      Delete
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-20 pt-4 text-gray-400 font-normal">
            Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia,
            nunc sit amet tincidunt venenatis.
          </div>
          <div className="flex ml-20 pt-4 cursor-pointer">
            <div className="flex gap-2 hover:text-[#ED2A26]">
              <LikeOutlined />
              10
            </div>
            <div className="flex gap-2 ml-4 hover:text-[#ED2A26]">
              <DislikeOutlined />
              10
            </div>
            <div className="flex gap-2 ml-4 hover:text-[#ED2A26]">
              <HeartOutlined />
            </div>
            <Button className="hover:text-[#ED2A26] ml-4">Reply</Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-[65px] overflow-x-hidden">
      <div
        className={`bg-[#333333] h-[280px] flex gap-x-[200px] ${
          sidebar ? "w-[1457px]" : "w-[1690px]"
        }`}
      >
        <div className="">
          <div className={`flex  mt-6 ${sidebar ? "ml-28" : "ml-64"}`}>
            <Image
              className="w-[110px] h-[110px]"
              src={require("../../src/assets/img1.png")}
            />
            <div className=" ml-6 mt-6">
              <div className="text-white font-bold text-2xl">John Doe</div>
              <div className="text-white mt-3">Web Developer</div>
            </div>
          </div>
          <div
            className={`w-[580px] h-[82px] border flex gap-0 border-[#484343] mt-8 ${
              sidebar ? "ml-28" : "ml-64"
            }`}
          >
            <div className="w-[145px] h-[80px] border border-[#484343] text-center items-center">
              <h1 className="text-white mt-4">Enroll Students</h1>
              <h2 className="text-white font-light">612K</h2>
            </div>
            <div className="w-[145px] h-[80px] border border-[#484343] text-center items-center">
              <h1 className="text-white mt-4">Courses</h1>
              <h2 className="text-white font-light">8</h2>
            </div>
            <div className="w-[145px] h-[80px] border border-[#484343] text-center items-center">
              <h1 className="text-white mt-4">Reviews</h1>
              <h2 className="text-white font-light">115K</h2>
            </div>
            <div className="w-[145px] h-[80px] border border-[#484343] text-center items-center">
              <h1 className="text-white mt-4">Subscribers</h1>
              <h2 className="text-white font-light">452K</h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="ml-[200px] mt-16 text-white flex text-[14px]">
            <Image
              className="w-[14px] h-[14px] mr-2"
              src={require("../../src/assets/windsock.png")}
            />
            Report Profile
          </div>
          <div className="flex mt-6 ml-[72px]">
            <Image
              className="w-[40px] h-[40px] mr-2 transition-transform duration-200 transform hover:scale-110 cursor-pointer"
              src={require("../../src/assets/facebook.png")}
            />
            <Image
              className="w-[40px] h-[40px] mr-2 transition-transform duration-200 transform hover:scale-110 cursor-pointer"
              src={require("../../src/assets/twitter.png")}
            />
            <Image
              className="w-[40px] h-[40px] mr-2 transition-transform duration-200 transform hover:scale-110 cursor-pointer"
              src={require("../../src/assets/linkedin.png")}
            />
            <Image
              className="w-[40px] h-[40px] mr-2 transition-transform duration-200 transform hover:scale-110 cursor-pointer"
              src={require("../../src/assets/youtube.png")}
            />
          </div>
          <div className="flex mt-6 gap-2">
            <Button className="text-white font-medium border rounded-[4px] bg-[#ed2a26] border-[#ed2a26] px-7 py-[11px]">
              Subscribe
            </Button>
            <Button className="text-white font-medium border rounded-[4px] bg-transparent border-white px-7 py-[11px]">
              Message
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className={`flex gap-5 pt-6  ${sidebar ? "ml-28" : "ml-64"}`}>
          <Button
            className={`text-black font-medium text-sm ${
              activeTab === "About" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("About")}
          >
            About
          </Button>
          <Button
            className={`text-black font-medium text-sm ${
              activeTab === "Courses" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("Courses")}
          >
            Courses
          </Button>
          <Button
            className={`text-black font-medium text-sm ${
              activeTab === "Discussion"
                ? "border-b-2 p-2 border-[#ed2a26]"
                : ""
            }`}
            onClick={() => setActiveTab("Discussion")}
          >
            Discussion
          </Button>
        </div>
      </div>
      <div className={`mt-4 ${sidebar ? "ml-28" : "ml-64"}`}>
        {activeTab === "About" && <About />}
        {activeTab === "Courses" && <Courses />}
        {activeTab === "Discussion" && <Discussion />}
      </div>
    </div>
  );
};

export default InstructorProfile;
