import React from "react";

import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Dropdown, Menu, Switch } from "antd";
import { CheckCircleOutlined, MoonOutlined, RightOutlined } from "@ant-design/icons";

import Cookies from "js-cookie"; 

import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth.action";
const Header = ({ handleToggleSidebar }) => {
  const navigate = useNavigate();

  // Hàm chuyển đổi chế độ dark mode
  const toggleDarkMode = (checked) => {
    const htmlElement = document.documentElement;
    if (checked) {
      htmlElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    }
  };

  // Khi tải trang, áp dụng chế độ dark mode đã lưu
  React.useEffect(() => {
    const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  const avatar = Cookies.get('avatar');
  const username = Cookies.get('username');
  const email = Cookies.get('email');
  const handleShoppingCart = () => {
    navigate("/shoppingcart");
  };
  
const handleSendFeedBack = () => {
  navigate("/sendfeedback");
}
const handleHelp = () => {
  navigate("/help");
}
const handleSettings = () => {
  navigate("/setting");
}
const handlePaidMembership = () => {
  navigate("/paidmembership");
}
const handleHome = () => {
  navigate("/home");
}
const handleCreateNewCourses = () => {
  const role = Cookies.get("role"); 
  if (role === "teacher") {
    navigate("/createcourse");
  } else if (role === "student") {
    navigate("/error404");
  }
  
}
const handleViewAllClick = () => {
  const role = Cookies.get("role"); 
  if (role === "teacher") {
    navigate("/teacherNotification");
  } else if (role === "student") {
    navigate("/studentNotification");
  }
};
const handleViewAllClickk = () => {
  const role = Cookies.get("role"); 
  if (role === "teacher") {
    navigate("/teacherMess");
  } else if (role === "student") {
    navigate("/studentMessage");
  }
};
const handleCursusDashBoard = () => {
  const role = Cookies.get("role"); 
  if (role === "teacher") {
    navigate("/dashboard");
  } else if (role === "student") {
    navigate("/dashboard2");
  }
};
const onChange = (checked, event) => {
  event.stopPropagation();
  console.log(`switch to ${checked}`);
};

const dispatch = useDispatch();
const handleLogout = () => {
  dispatch(logout());
  navigate("/login"); // Chuyển hướng đến trang login sau khi logout
};
  const items = (
    <Menu>
      <Menu.Item key="1">
        <div className="flex gap-3 p-3 bg-white dark:bg-gray-800 hover:bg-[#FFECEC] dark:hover:bg-gray-700">
          <div>
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
              width={40}
              alt="notification"
            />
          </div>
          <div className="flex flex-col">
            <h3  className="text-black dark:text-gray-200">Rock William</h3>
            <div className="break-words w-64 text-gray-800 dark:text-gray-400">
              Like Your Comment On Video How to create sidebar menu.
            </div>
            <div className="text-sm font-light text-gray-500">2 min ago</div>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        <div className="flex gap-3 p-3 bg-white dark:bg-gray-800 hover:bg-[#FFECEC] dark:hover:bg-gray-700">
          <div>
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg"
              width={40}
              alt="notification"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-black dark:text-gray-200">Jassica Smith</h3>
            <div className="break-words w-64 text-gray-800 dark:text-gray-400">
              Add New Review In Video Full Stack PHP Developer.
            </div>
            <div className="text-sm font-light text-gray-500">12 min ago</div>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="3">
        <div className="flex gap-3 p-3  bg-white dark:bg-gray-800 hover:bg-[#FFECEC] dark:hover:bg-gray-700">
          <div>
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg"
              width={40}
              alt="notification"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-black dark:text-gray-200">Edututs+</h3>
            <div className="break-words w-64 text-gray-800 dark:text-gray-400">
              Your Membership Approved Upload Video.
            </div>
            <div className="text-sm font-light text-gray-500">20 min ago</div>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="4">
        <div
          className="flex justify-center p-3 bg-[#FFECEC] dark:bg-[#ED2A26] hover:bg-black dark:hover:bg-[#CC2622] text-black dark:text-white hover:text-white"
          onClick={handleViewAllClick}
        >
          View All <RightOutlined />
        </div>
      </Menu.Item>
    </Menu>
  );

  const newmes = (
    <Menu>
      <Menu.Item key="1">
        <div className="flex gap-3 p-3 bg-white hover:bg-[#FFECEC]">
          <div>
            <img
              src="https://i.pinimg.com/736x/79/d7/c8/79d7c8985525f65ca5055d386b3c4131.jpg"
              width={40}
              alt="message"
            />
          </div>
          <div className="flex flex-col">
            <h3>Zoena Singh</h3>
            <div className="break-words w-64">
              Hi! Sir, How are you. I ask you one thing please explain it this video price.
            </div>
            <div className="text-sm font-light text-gray-500">2 min ago</div>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        <div className="flex gap-3 p-3 bg-white hover:bg-[#FFECEC]">
          <div>
            <img
              src="https://i.pinimg.com/736x/b8/5b/0d/b85b0da9f68c71d26022c4e19244cf89.jpg"
              width={40}
              alt="message"
            />
          </div>
          <div className="flex flex-col">
            <h3>Jassica Smith</h3>
            <div className="break-words w-64">
              Hello, I paid you video turtorial but i did not play error 404.
            </div>
            <div className="text-sm font-light text-gray-500">10 min ago</div>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="3">
        <div className="flex gap-3 p-3 bg-white hover:bg-[#FFECEC]">
          <div>
            <img
              src="https://i.pinimg.com/originals/9a/23/b0/9a23b044d3ae8bb33087200aaf983c15.jpg"
              width={40}
              alt="message"
            />
          </div>
          <div className="flex flex-col">
            <h3>Jass</h3>
            <div className="break-words w-64">
              Thanks Sir, Such a nice video.
            </div>
            <div className="text-sm font-light text-gray-500">25 min ago</div>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="4">
        <div
          className="flex justify-center p-3 bg-[#FFECEC] hover:bg-black text-black hover:text-white"
          onClick={handleViewAllClickk}
        >
          View All <RightOutlined />
        </div>
      </Menu.Item>
    </Menu>
  );
  const listAvatar = (
    <Menu>
      <Menu.Item key="1">
      <div className="flex gap-3 p-3 bg-white dark:bg-gray-800 hover:bg-[#FFECEC] dark:hover:bg-gray-700">
        <div>
          <img
            src={avatar}
            width={30}
            alt="message"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h3 className="text-black dark:text-gray-200">{username}</h3>
            <CheckCircleOutlined className="text-blue-500 mt-[-5px]" />
          </div>
          <div className="break-words w-64 text-gray-800 dark:text-gray-400">
            {email}
          </div>
          <h3 className="hover:text-[#ED2A26] text-black dark:text-gray-200">View Instructor Profile</h3>
        </div>
      </div>
    </Menu.Item>
      <Menu.Item key="2">
        <div className="flex  justify-between p-3  bg-white dark:bg-gray-800 hover:bg-[#FFECEC] dark:hover:bg-gray-700 border-t border-b border-solid dark:border-gray-600">
      
              <MoonOutlined className="text-xl bg-[#FFECEC] dark:bg-gray-700  rounded-full px-3 py-3" />
              <h1 className="mt-3 text-black dark:text-gray-200">Night mode</h1>
          <Switch className="mt-3" defaultChecked={localStorage.getItem('dark-mode') === 'true'} onChange={toggleDarkMode} />
        </div>
      </Menu.Item>
      <Menu.Item key="3">
        <div className="flex gap-3 p-3 bg-white hover:bg-[#FFECEC]" onClick={handleCursusDashBoard}>
          Cursus dashboard
        </div>
      </Menu.Item>
      <Menu.Item key="4">
        <div className="flex gap-3 p-3 bg-white hover:bg-[#FFECEC]" onClick={handlePaidMembership}>
         Paid Memberships
        </div>
      </Menu.Item>
      <Menu.Item key="5">
        <div className="flex gap-3 p-3 bg-white hover:bg-[#FFECEC]" onClick={handleSettings}>
         Setting
        </div>
      </Menu.Item>
      <Menu.Item key="6">
        <div className="flex gap-3 p-3 bg-white hover:bg-[#FFECEC]" onClick={handleHelp}>
         Help
        </div>
      </Menu.Item>
      <Menu.Item key="7">
        <div className="flex gap-3 p-3 bg-white hover:bg-[#FFECEC]" onClick={handleSendFeedBack}>
         Send Feedback
        </div>
      </Menu.Item>
      <Menu.Item key="8">
        <div className="flex gap-3 p-3 bg-white hover:bg-[#FFECEC]"  onClick={handleLogout}>
         Sign Out
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="z-50 flex bg-white dark:bg-gray-900 text-black dark:text-white h-[65px] w-full drop-shadow-lg fixed">
     <div className="flex">
  <button onClick={() => handleToggleSidebar()}>
    <Image
      className="w-[65px] h-[65px] border-2 border-[#ED2A26] bg-[#ED2A26] items-center p-[18px]"
      src={require("../assets/menu.png")}
    />
  </button>
  <button onClick={handleHome}>
    <Image
      className="w-[147px] h-[35px] ml-6 items-center justify-center text-center mt-2"
      src={require("../assets/logo.png")}
      alt="hehe"
    />
  </button>
</div>
<div className="group flex ml-20">
  <div className="mt-4 mb-5 text-[#D5D5D5] border-2 border-[#F7F7F7] bg-[#F7F7F7] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-4 text-base w-[348px] h-[33px] relative pt-1">
    <input
      type="text"
      placeholder="Search for Tuts Videos, Tutors, Tests and more.."
      className="focus:outline-none w-[248px] text-xs ml-8 text-[black] dark:text-gray-300 bg-[#F7F7F7] dark:bg-gray-800 group-active:text-[#847E7E]"
    />
    <button type="submit" className="top-0 left-3 absolute">
      <Image
        className="max-w-none mt-2 cursor-pointer"
        src={require("../assets/search.png")}
        width={12}
        height={12}
        alt="Search"
      />
    </button>
  </div>
</div>

      <div className="absolute right-0 mr-10 flex justify-around items-center">
        <button
        onClick={handleCreateNewCourses}
          type="submit"
          className="items-center mr-4 text-center justify-center text-white bg-[#ED2A26] hover:bg-black font-semibold text-sm px-[14px] py-[8px] mt-4 border-none focus:border-none"
        >
          Create New Course
        </button>
        <Image
          className="max-w-none mt-2 mr-4 cursor-pointer"
          src={require("../assets/shopping-cart.png")}
          width={24}
          height={24}
          alt="Search"
          onClick={handleShoppingCart}
        />
        <Dropdown overlay={newmes} placement="bottomRight" arrow>
          <Image
            className="max-w-none mt-2 mr-4 cursor-pointer"
            src={require("../assets/email.png")}
            width={24}
            height={24}
            alt="Searchh"
          />
        </Dropdown>
        <Dropdown overlay={items} placement="bottomRight" arrow>
          <Image
            className="max-w-none mt-2 mr-4 cursor-pointer"
            src={require("../assets/bell.png")}
            width={24}
            height={24}
            alt="Search"
          />
        </Dropdown>
        
          <Dropdown overlay={listAvatar} placement="bottomRight" arrow>
          <Image
            className="max-w-none mt-2 mr-4 cursor-pointer rounded-full"
            src={avatar}
            width={24}
            height={24}
            alt="Avatar"
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
