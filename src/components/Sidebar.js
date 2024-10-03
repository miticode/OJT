import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeadset,
  faMagnifyingGlass,
  faCirclePlus,
  faGear,
  faCircleQuestion,
  faFlag,
  faMessage,
  faLayerGroup,
  faBorderAll,
  faBook,
  faChartLine,
  faComment,
  faBell,
  faTrophy,
  faDollarSign,
  faWallet,
  faNewspaper,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faStar,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth.action";
import { getAllInstructor } from "../redux/actions/instructor.action";
import { Button } from "react-bootstrap";

const { SubMenu } = Menu;

const Sidebar = ({ sidebar }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const handleClick = (e) => {
    console.log("click ", e);
  };


  const [handleShowScrollbar, setHandShowScroll] = useState(false);
  const slidebarStyles = {
    overflow: handleShowScrollbar ? "auto" : "hidden",
    maxHeight: "100vh",
    backgroundColor: "white",
    color: "black",
    fontWeight: "500",
  };

  const navigate = useNavigate();
  const handleLivestream = () => {
    navigate("/livestream");
  };
  const handleHome = () => {
    navigate("/");
  };
  const [visibleInstructors, setVisibleInstructors] = useState(2);

  const handleLoadMore = () => {
    setVisibleInstructors((prev) => prev + 2);
  };
  useEffect(() => {
    dispatch(getAllInstructor());
  }, [dispatch]);
  const instructorsState = useSelector((state) => state.instructors);
  const { instructors, loading, error } = instructorsState;

  const handleExplore = () => {
    navigate("/explore");
  };
  const handleSavedCourses = () => {
    navigate("/savedcourses");
  };
  const handleCertificationCenter = () => {
    navigate("/certificationcenter");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleInvoice = () => {
    navigate("/invoice");
  };
  const handleOurBlog = () => {
    navigate("/blog");
  };
  const handleTerm = () => {
    navigate("/term");
  };
  const handleHelp = () => {
    navigate("/help");
  };
  const handleSetting = () => {
    navigate("/setting");
  };
  const handleAllInstructors = () => {
    navigate("/allinstructors");
  };
  const handleCompany = () => {
    navigate("/company");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleContactus = () => {
    navigate("/contactus");
  };
  const handleComingSoon = () => {
    navigate("/comingsoon");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  const handleSignupStep = () => {
    navigate("/signupstep");
  };
  const handleError404 = () => {
    navigate("/error404");
  };
  const handleThankyou = () => {
    navigate("/thankyou");
  };

  const handleReportHistory = () => {
    navigate("/reporthistory");
  };
  const handleSendFeedback = () => {
    navigate("/sendfeedback");
  };
  const handleSendFeedback2 = () => {
    navigate("/sendfeedback2");
  };
  const handleAddLiveStream = () => {
    navigate("/addlivestream");
  };

  const handleCertificationFillForm = () => {
    navigate("/certificationfillform");
  };
  const handlePress = () => {
    navigate("/press");
  };
  const handleCareer = () => {
    navigate("/career");
  };
  const handleJobapply = () => {
    navigate("/jobapply");
  };
  const handleCopyright = () => {
    navigate("/copyright");
  };
  const handleNotification = () => {
    navigate("/teacherNotification");
  };
  const handleMyCertificates = () => {
    navigate("/mycertificates");
  };
  const handlePaidMemship = () => {
    navigate("/paidmembership");
  };
  const handleMess = () => {
    navigate("/teacherMess");
  };
  const handleStudentNotifications = () => {
    navigate("/studentNotification");
  };
  const handleStudentMessage = () => {
    navigate("/studentMessage");
  };
  const handleSearchResult = () => {
    navigate("/searchresult");
  };
  const handEarning = () => {
    navigate("/earning");
  };
  const handlePurchasedCourses = () => {
    navigate("/purchasedcourses");
  };
  const handleVerification = () => {
    navigate("/verification");
  };
  const handleStatements = () => {
    navigate("/statements");
  };
  const handleCourseDetailView = () => {
    navigate("/coursedetailview");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  const handlePayout = () => {
    navigate("/payout");
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };
  const handleDashboard2 = () => {
    navigate("/dashboard2");
  };
  const handleCredits = () => {
    navigate("/credits");
  };
  const handleStatements2 = () => {
    navigate("/statements2");
  };

  const handleStudentCertificates = () => {
    navigate("/studentcertificates");
  };
  const handleReview = () => {
    navigate("/review");
  };
  const handleReview2 = () => {
    navigate("/review2");
  };
  const handleCreateCourse = () => {
    navigate("/createcourse");
  };
  const handleAnalysis = () => {
    navigate("/analysis");
  };
  const handleCourse = () => {
    navigate("/course");
  };
  const handleTestView = () => {
    navigate("/testview");
  };
  const handleTestResult = () => {
    navigate("/testresult");
  };
  const handleBlogSingle = () => {
    navigate('/blogsingle');
  };

  const role = useSelector((state) => state.auth.role);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Chuyển hướng đến trang login sau khi logout
  };

  const renderMenuItems = () => {
    if (
      (role === "student" && location.pathname === "/dashboard2") ||
      location.pathname === "/studentNotification" ||
      location.pathname === "/studentMessage" ||
      location.pathname === "/purchasedcourses" ||
      location.pathname === "/studentcertificates" ||
      location.pathname === "/statements2" ||
      location.pathname === "/review2" ||
      location.pathname === "/sendfeedback2" ||
      location.pathname === "/credits"
    ) {
      return (
        <>
          <Menu.Item
            key="100"
            className="flex items-center py-[27px]"
            onClick={handleHome}
          >
            <FontAwesomeIcon icon={faHouse} className="mr-2 icon" />
            Home
          </Menu.Item>
          <Menu.Item
            key="64"
            icon={<FontAwesomeIcon icon={faBorderAll} />}
            className="flex items-center py-[27px]"
            onClick={handleDashboard2}
          >
            Dashboard
          </Menu.Item>

          <Menu.Item
            key="65"
            className="flex items-center py-[27px]"
            onClick={handlePurchasedCourses}
          >
            <FontAwesomeIcon icon={faBook} className="mr-2 icon" />
            Purchased Courses
          </Menu.Item>
          <Menu.Item
            key="66"
            className="flex items-center py-[27px]"
            onClick={handleStudentMessage}
          >
            <FontAwesomeIcon icon={faComment} className="mr-2 icon" />
            Messages
          </Menu.Item>
          <Menu.Item
            key="67"
            className="flex items-center py-[27px]"
            onClick={handleStudentNotifications}
          >
            <FontAwesomeIcon icon={faBell} className="mr-2 icon" />
            Notifications
          </Menu.Item>
          <Menu.Item
            key="68"
            className="flex items-center py-[27px]"
            onClick={handleStudentCertificates}
          >
            <FontAwesomeIcon icon={faTrophy} className="mr-2 icon" />
            My Certification
          </Menu.Item>

          <Menu.Item
            key="130"
            icon={<FontAwesomeIcon icon={faStar} />}
            onClick={handleReview2}
            className="flex items-center py-[27px]"
          >
            Review
          </Menu.Item>

          <Menu.Item
            key="131"
            icon={<FontAwesomeIcon icon={faWallet} />}
            onClick={handleCredits}
            className="flex items-center py-[27px]"
          >
            Credits
          </Menu.Item>

          <Menu.Item
            key="132"
            icon={<FontAwesomeIcon icon={faNewspaper} />}
            onClick={handleStatements2}
            className="flex items-center py-[27px]"
          >
            Statements
          </Menu.Item>
          <hr />

          <Menu.Item
            key="72"
            onClick={handleSetting}
            className="flex items-center py-[27px]"
          >
            <FontAwesomeIcon icon={faGear} className="mr-2 icon" />
            Setting
          </Menu.Item>
          <Menu.Item
            key="133"
            icon={<FontAwesomeIcon icon={faMessage} />}
            onClick={handleSendFeedback2}
            className="flex items-center py-[27px]"
          >
            Feedback
          </Menu.Item>
        </>
      );
    } else if (
      (role === "teacher" && location.pathname === "/dashboard") ||
      location.pathname === "/earning" ||
      location.pathname === "/teacherNotification" ||
      location.pathname === "/mycertificates" ||
      location.pathname === "/teacherMess" ||
      location.pathname === "/payout" ||
      location.pathname === "/review" ||
      location.pathname === "/verification" ||
      location.pathname === "/statements" ||
      location.pathname === "/createcourse" ||
      location.pathname === "/analysis" ||
      location.pathname === "/course"
    ) {
      return (
        <>
          <Menu.Item
            key="100"
            className="flex items-center py-[27px]"
            onClick={handleHome}
          >
            <FontAwesomeIcon icon={faHouse} className="mr-2 icon" />
            Home
          </Menu.Item>
          {role === "teacher" && (
            <Menu.Item
              key="50"
              className="flex items-center py-[27px]"
              onClick={handleDashboard}
            >
              <FontAwesomeIcon icon={faBorderAll} className="mr-2 icon " />
              Dashboard
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="51"
              className="flex items-center py-[27px]"
              onClick={handleCourse}
            >
              <FontAwesomeIcon icon={faBook} className="mr-2 icon" />
              Courses
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="52"
              className="flex items-center py-[27px]"
              onClick={handleAnalysis}
            >
              <FontAwesomeIcon icon={faChartLine} className="mr-2 icon" />
              Analyics
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="53"
              className="flex items-center py-[27px]"
              onClick={handleCreateCourse}
            >
              <FontAwesomeIcon icon={faCirclePlus} className="mr-2 icon" />
              Create Course
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="54"
              className="flex items-center py-[27px]"
              onClick={handleMess}
            >
              <FontAwesomeIcon icon={faComment} className="mr-2 icon" />
              Messages
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="55"
              className="flex items-center py-[27px]"
              onClick={handleNotification}
            >
              <FontAwesomeIcon icon={faBell} className="mr-2 icon" />
              Notifications
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="56"
              className="flex items-center py-[27px]"
              onClick={handleMyCertificates}
            >
              <FontAwesomeIcon icon={faTrophy} className="mr-2 icon" />
              My Certificates
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="57"
              className="flex items-center py-[27px]"
              onClick={handleReview}
            >
              <FontAwesomeIcon icon={faStar} className="mr-2 icon" />
              Reviews
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="58"
              className="flex items-center py-[27px]"
              onClick={handEarning}
            >
              <FontAwesomeIcon icon={faDollarSign} className="mr-2 icon" />
              Earning
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="59"
              className="flex items-center py-[27px]"
              onClick={handlePayout}
            >
              <FontAwesomeIcon icon={faWallet} className="mr-2 icon" />
              Payout
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="60"
              className="flex items-center py-[27px]"
              onClick={handleStatements}
            >
              <FontAwesomeIcon icon={faNewspaper} className="mr-2 icon" />
              Statements
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item
              key="61"
              className="flex items-center py-[27px]"
              onClick={handleVerification}
            >
              <FontAwesomeIcon icon={faCircleCheck} className="mr-2 icon" />
              Verification
            </Menu.Item>
          )}

          <hr />
          {role === "teacher" && (
            <Menu.Item key="62" onClick={handleSetting} className="py-[27px]">
              <FontAwesomeIcon icon={faGear} className="mr-2 icon" />
              Setting
            </Menu.Item>
          )}
          {role === "teacher" && (
            <Menu.Item key="63" className="py-[27px]">
              <FontAwesomeIcon icon={faMessage} className="mr-2 icon" />
              Send Feedback
            </Menu.Item>
          )}
        </>
      );
    }

    if (role === "student" || role === "teacher") {
      return (
        <>
          {(role === "student" || role === "teacher") && (
            <Menu.Item
              key="1"
              className="flex items-center py-[27px]"
              onClick={handleHome}
            >
              <FontAwesomeIcon icon={faHouse} className="mr-2 icon" />
              Home
            </Menu.Item>
          )}
          {(role === "student" || role === "teacher") && (
            <Menu.Item
              key="1"
              className="flex items-center py-[27px]"
              onClick={role === "student" ? handleDashboard2 : handleDashboard}
            >
              <FontAwesomeIcon icon={faBorderAll} className="mr-2 icon " />
              DashBoard
            </Menu.Item>
          )}

          {(role === "student" || role === "teacher") && (
            <Menu.Item key="2" onClick={handleLivestream} className="py-[27px]">
              <FontAwesomeIcon icon={faHeadset} className="mr-2 icon" />
              Live Stream
            </Menu.Item>
          )}
          {(role === "student" || role === "teacher") && (
            <Menu.Item key="3" onClick={handleExplore} className="py-[27px]">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2 icon" />
              Explore
            </Menu.Item>
          )}
          {(role === "student" || role === "teacher") && (
            <SubMenu
              key="sub2"
              icon={<FontAwesomeIcon icon={faLayerGroup} />}
              title="Categories"
              style={{ color: "black" }}
              className="submenu-hover"
            >
              <div className="font-normal pl-5">
                <Menu.Item key="4">Development</Menu.Item>
                <Menu.Item key="5">Business</Menu.Item>
                <Menu.Item key="6">Finance & Accounting</Menu.Item>
                <Menu.Item key="7">IT & Software</Menu.Item>
                <Menu.Item key="8">Office Productive</Menu.Item>
                <Menu.Item key="9">Personal Development</Menu.Item>
                <Menu.Item key="10">Design</Menu.Item>
                <Menu.Item key="11">Marketing</Menu.Item>
                <Menu.Item key="12">Lifestyle</Menu.Item>
                <Menu.Item key="13">Photography</Menu.Item>
                <Menu.Item key="14">Health & Fitness</Menu.Item>
                <Menu.Item key="15">Music</Menu.Item>
                <Menu.Item key="16">Teaching & Academics</Menu.Item>
              </div>
            </SubMenu>
          )}

          <Menu.Divider />
          {(role === "student" || role === "teacher") && (
            <SubMenu
              key="sub4"
              icon={<SettingOutlined />}
              title="Tests"
              style={{ color: "black" }}
              className="submenu-hover "
            >
              <div className="font-normal pl-5">
                <Menu.Item key="17" onClick={handleCertificationCenter}>
                  Certification Center
                </Menu.Item>
                <Menu.Item key="18" onClick={handleCertificationFillForm}>
                  Certification Fill Form
                </Menu.Item>
                <Menu.Item key="19" onClick={handleTestView}>
                  Test View
                </Menu.Item>
                <Menu.Item key="20" onClick={handleTestResult}>
                  Test Result
                </Menu.Item>
                <Menu.Item key="21">My Certification</Menu.Item>
              </div>
            </SubMenu>
          )}
          {(role === "student" || role === "teacher") && (
            <Menu.Item
              key="22"
              onClick={handleSavedCourses}
              className="py-[27px]"
            >
              <FontAwesomeIcon icon={faHeart} className="mr-2 icon" />
              Save Courses
            </Menu.Item>
          )}
          {(role === "student" || role === "teacher") && (
            <SubMenu
              key="sub5"
              icon={<SettingOutlined />}
              title="Pages"
              style={{ color: "black" }}
              className="submenu-hover "
            >
              <div className="font-normal pl-5">
                <Menu.Item key="23" onClick={handleAbout}>
                  About
                </Menu.Item>
                <Menu.Item key="6" onClick={handleLogin}>
                  Sign In
                </Menu.Item>
                <Menu.Item key="6" onClick={handleSignup}>
                  Sign Up
                </Menu.Item>
                <Menu.Item key="6" onClick={handleSignupStep}>
                  Sign Up Step
                </Menu.Item>
                <Menu.Item key="27" onClick={handlePaidMemship}>
                  Paid Membership
                </Menu.Item>
                <Menu.Item key="28" onClick={handleCourseDetailView}>
                  Course Detail View
                </Menu.Item>
                <Menu.Item key="23" onClick={handleCheckout}>
                  Checkout
                </Menu.Item>
                <Menu.Item key="23" onClick={handleInvoice}>
                  Invoice
                </Menu.Item>
                <Menu.Item key="31" onClick={handleCareer}>
                  Career
                </Menu.Item>
                <Menu.Item key="32" onClick={handleJobapply}>
                  Job Apply
                </Menu.Item>
                <Menu.Item key="33" onClick={handleOurBlog}>
                  Our Blog
                </Menu.Item>
                <Menu.Item key="34" onClick={handleBlogSingle}>Blog Detail View</Menu.Item>
                <Menu.Item key="35" onClick={handleCompany}>
                  Company Details
                </Menu.Item>
                <Menu.Item key="36" onClick={handlePress}>
                  Press
                </Menu.Item>
                <Menu.Item key="37">Live Steam View</Menu.Item>
                <Menu.Item key="38" onClick={handleAddLiveStream}>
                  Add Live Steam
                </Menu.Item>
                <Menu.Item key="39" onClick={handleSearchResult}>
                  Search Result
                </Menu.Item>
                <Menu.Item key="6" onClick={handleThankyou}>
                  Thank You
                </Menu.Item>
                <Menu.Item key="38" onClick={handleComingSoon}>
                  Coming Soon
                </Menu.Item>
                <Menu.Item key="6" onClick={handleError404}>
                  Error 404
                </Menu.Item>
              </div>
            </SubMenu>
          )}

          <hr />
          {(role === "student" || role === "teacher") && (
            <Menu.ItemGroup
              key="sub6"
              title="SUBSCRIPTIONS"
              style={{ color: "black" }}
            >
              {instructors.slice(0, visibleInstructors).map((instructor) => (
                <Menu.Item key={instructor.id + 1}>
                  <Link to={`/instructor/${instructor.id}`}>
                    {" "}
                    <div className="flex items-center">
                      <img
                        src={instructor.avatar}
                        className="h-auto w-[30px] rounded-lg"
                        alt={instructor.username}
                      />
                      <p className="ml-6 pt-3">{instructor.username}</p>
                    </div>
                  </Link>
                </Menu.Item>
              ))}
              {instructors.length > visibleInstructors && (
                <Menu.Item key="load-more" onClick={handleLoadMore}>
                  <Button type="link">See More</Button>
                </Menu.Item>
              )}
              <Menu.Item
                key="45"
                onClick={handleAllInstructors}
                className="py-[27px]"
              >
                <FontAwesomeIcon icon={faCirclePlus} className="mr-2 icon" />
                Browser Instructors
              </Menu.Item>
            </Menu.ItemGroup>
          )}

          {(role === "student" || role === "teacher") && (
            <Menu.Item key="46" onClick={handleSetting} className="py-[27px]">
              <FontAwesomeIcon icon={faGear} className="mr-2 icon" />
              Setting
            </Menu.Item>
          )}
          {(role === "student" || role === "teacher") && (
            <Menu.Item key="47" onClick={handleHelp} className="py-[27px]">
              <FontAwesomeIcon icon={faCircleQuestion} className="mr-2 icon" />
              Help
            </Menu.Item>
          )}
          {(role === "student" || role === "teacher") && (
            <Menu.Item
              key="48"
              onClick={handleReportHistory}
              className="py-[27px]"
            >
              <FontAwesomeIcon icon={faFlag} className="mr-2 icon" />
              Report History
            </Menu.Item>
          )}
          {(role === "student" || role === "teacher") && (
            <Menu.Item
              key="49"
              onClick={handleSendFeedback}
              className="py-[27px]"
            >
              <FontAwesomeIcon icon={faMessage} className="mr-2 icon" />
              Send Feedback
            </Menu.Item>
          )}
          {(role === "student" || role === "teacher") && (
            <div className="pb-[100px] pt-3 pl-[20px] text-xs leading-5">
              <div>
                <a className="px-1 hover:text-red-500" onClick={handleAbout}>
                  About
                </a>
                <a className="px-1 hover:text-red-500" onClick={handlePress}>
                  Press
                </a>
                <a
                  className="px-1 hover:text-red-500"
                  onClick={handleContactus}
                >
                  Contact Us
                </a>
              </div>
              <div className="font-medium">
                <a
                  className="px-1 hover:text-red-500"
                  onClick={handleComingSoon}
                >
                  Advertise
                </a>
                <a
                  className="px-1 hover:text-red-500"
                  onClick={handleComingSoon}
                >
                  Developer
                </a>
                <a
                  className="px-1 hover:text-red-500"
                  onClick={handleCopyright}
                >
                  Copyright
                </a>
              </div>
              <div className="font-medium">
                <a
                  className="px-1 hover:text-red-500"
                  onClick={handleCopyright}
                >
                  Privacy Policy
                </a>{" "}
                <a
                  className="px-1 hover:text-red-500"
                  onClick={handleCopyright}
                >
                  Terms
                </a>
              </div>
              <div className="text-[#9393938f] mt-[13px]">
                <p>© 2020 Cursus. All Rights Reserved.</p>
              </div>
            </div>
          )}
        </>
      );
    }
  };

  return (
    <Menu
      onMouseEnter={() => setHandShowScroll(true)}
      onMouseLeave={() => setHandShowScroll(false)}
      style={slidebarStyles}
      onClick={handleClick}
      className={`transition-transform duration-700 drop-shadow-lg h-full w-[250px] bg-white transform ${
        sidebar ? "mt-[65px] fixed translate-x-0 z-50" : "translate-x-[-100%]"
      } top-0 left-0`}
      mode="inline"
    >
      {renderMenuItems()}

      <Menu.Item key="logout" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 icon" />
        Logout
      </Menu.Item>
      <style jsx>{`
        .ant-menu-item-selected {
          background-color: #ffecec !important;
          color: #ee4e4e !important;
        }
        .ant-menu-item-selected .icon {
          color: #ee4e4e !important;
        }
        .ant-menu-submenu-selected {
          color: #ee4e4e !important;
        }
        .ant-menu-submenu-title {
          color: black !important;
        }
        .ant-menu-item:hover {
          background-color: #ffecec !important;
          color: #ee4e4e !important;
        }
        .ant-menu-item:hover .icon {
          color: #ee4e4e !important;
        }
        .ant-menu-item-active {
          color: initial !important;
        }
        .submenu-hover .ant-menu-submenu-title:hover {
          background-color: #ffecec !important;
          color: #ee4e4e !important;
        }
      `}</style>
    </Menu>
  );
};

export default Sidebar;
