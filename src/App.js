import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Container } from "react-bootstrap";
import LoginScreen from "./pages/LoginScreen";
import Error404 from "./pages/Error404";
import Thankyou from "./pages/Thankyou";
import ComingSoon from "./pages/ComingSoon";
import SignupStep from "./pages/SignupStep";
import Contactus from "./pages/Contactus";
import Invoice from "./pages/Invoice";
import Statements from "../src/pages/Statements";
import Verification from "../src/pages/Verification";
import SignupScreen from "./pages/SignupScreen";
import ForgotPasswordScreen from "./pages/ForgotPasswordScreen";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import HomeScreen from "../src/pages/HomeScreen";
import Livestream from "./pages/Livestream";
import { useDispatch, useSelector } from "react-redux";
import ExploreScreen from "../src/pages/ExploreScreen";
import Footer from "./components/Footer";
import SavedCourses from "../src/pages/SavedCourses";
import CertificationCenter from "./pages/CertificationCenter";
import DashBoard from "../src/pages/DashBoard";
import { setToken, setRole, setID, login } from "./redux/actions/auth.action";
import Cookies from "js-cookie";
import AllInstructors from "../src/pages/AllInstructors";
import HeaderPages from "./components/HeaderPages";
import About from "./pages/About";
import InstructorProfile from "../src/pages/InstructorProfile";
import Dashboard2 from "../src/pages/Dashboard2";
import Statements2 from "../src/pages/Statements2";
import OurBlog from "./pages/OurBlog";
import Help from "./pages/Help";
import SettingAccount from "../src/pages/Setting";
import Privacy from "../src/pages/Privacy";
import BillingandPayout from "../src/pages/BillingandPayout";
import ApiClients from "../src/pages/ApiClients";
import CloseAccount from "../src/pages/CloseAccount";
import Notification from "../src/pages/Notification";
import BlogSingle from "./pages/BlogSingle";
import CompanyDetails from "./pages/CompanyDetails";
import ReportHistory from "../src/pages/ReportHistory";
import SendFeedback from "../src/pages/SendFeedback";
import SendFeedback2 from "../src/pages/SendFeedback2";
import AddLiveStream from "../src/pages/AddLiveStream";
import Earning from "../src/pages/Earning";
import CertificationFillForm from "./pages/CertificationFillForm";
import Press from "./pages/Press";
import ShoppingCart from "../src/pages/ShoppingCart";
import Career from "./pages/Career";
import Copyright from "./pages/Copyright";
import StudentNotification from "./pages/StudentNotification";
import TeacherNotification from "./pages/TeacherNotification";
import JobApply from "./pages/JobApply";
import MyCertificates from "./pages/MyCertificates";
import PaidMenberShip from "./pages/PaidMenberShip";
import TeacherMess from "./pages/TeacherMess";
import StudentMess from "./pages/StudentMess";
import SearchResult from "./pages/SearchResult";
import PurchasedCourses from "./pages/PurchasedCourses";
import CourseDetailView from "./pages/CourseDetailView";
import Payout from "./pages/Payout";
import credits from "./pages/Credits";
import Checkout from "./pages/Checkout";
import Review from "./pages/Review";

import Review2 from "./pages/Review2";
import Credits from "./pages/Credits";
import Analysis from "./pages/Analysis";
import Course from "./pages/Course";
import TestView from "./pages/TestView";
import TestResult from "./pages/TestResult";
import InstructorDetail from "./pages/InstructorDetail";
import Term from "./pages/Term";
import Livestreamdetail from "./pages/Livesteamdetail";
import { WebSocketProvider } from "./WebSocketProvider";
import CreateCourse from "./pages/CreateCourse";

// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   return <Route {...rest} element={<Element />} />;
// };
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(true);
  const handleToggleSidebar = () => toggleSidebar(!sidebar);
  const role = useSelector((state) => state.auth.role);

  return (
    <div className="flex flex-col h-screen">
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="flex text-black">
        {role === "student" && (
          <Sidebar
            sidebar={sidebar}
            handleToggleSidebar={handleToggleSidebar}
            className="relative z-50"
          />
        )}
        {role === "teacher" && (
          <Sidebar
            sidebar={sidebar}
            handleToggleSidebar={handleToggleSidebar}
            className="relative z-50"
          />
        )}
        <Container
          fluid
          className={`min-h-screen transform duration-700  ${
            sidebar ? "ml-[250px]" : ""
          }`}
        >
          {/* {children} */}
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { sidebar })
          )}
        </Container>
      </div>
      <Footer sidebar={sidebar} />
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const [sidebar, toggleSidebar] = useState(true);
  const [isHomeVisited, setIsHomeVisited] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromCookie = Cookies.get("token");
    const idFromCookie = Cookies.get("id");

    if (
      tokenFromCookie &&
      !window.location.pathname.includes("/signup") &&
      !window.location.pathname.includes("/forgot-password") &&
      !window.location.pathname.includes("/signupstep") &&
      !window.location.pathname.includes("/term")
    ) {
      dispatch(setToken(tokenFromCookie));
      dispatch(setRole(tokenFromCookie));
      dispatch(setID(idFromCookie));
    } else if (
      !window.location.pathname.includes("/signup") &&
      !window.location.pathname.includes("/forgot-password") &&
      !window.location.pathname.includes("/signupstep") &&
      !window.location.pathname.includes("/term")
    ) {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (role === "student" && isHomeVisited) {
      navigate("/dashboard2");
    } else if (role === "teacher" && isHomeVisited) {
      navigate("/dashboard");
    }
  }, [role, isHomeVisited, navigate]);

  const handleHomeVisit = () => {
    setIsHomeVisited(true);
  };
  return (
    <WebSocketProvider>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/term" element={<Term/>} />
        <Route path="/signupstep" element={<SignupStep />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route
          path="/home"
          element={
            token ? (
              <Layout>
                <HomeScreen onVisit={handleHomeVisit} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/livestream"
          element={
            token ? (
              <Layout>
                <Livestream />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/explore"
          element={
            token ? (
              <>
                <Layout>
                  <ExploreScreen sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/term"
          element={
            token ? (
                  <Term />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/savedcourses"
          element={
            token ? (
              <Layout>
                <SavedCourses />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/instructorprofile"
          element={
            token ? (
              <Layout>
                <InstructorProfile sidebar={sidebar} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/help"
          element={
            token ? (
              <Layout>
                <Help sidebar={sidebar} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/allinstructors"
          element={
            token ? (
              <Layout>
                <AllInstructors sidebar={sidebar} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/instructor/:id"
          element={
            token ? (
              <Layout>
                <InstructorDetail sidebar={sidebar} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/searchresult"
          element={
            token ? (
              <>
                <div className="flex flex-col min-h-screen">
                  <HeaderPages />
                  <SearchResult />
                  <Footer />
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/testview"
          element={
            token ? (
              <>
                <div className="flex flex-col min-h-screen">
                  <HeaderPages />
                  <TestView />
                  <Footer />
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/testresult"
          element={
            token ? (
              <>
                <div className="flex flex-col min-h-screen">
                  <HeaderPages />
                  <TestResult />
                  <Footer />
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/signupstep"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <SignupStep />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/error404"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <Error404 />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/thankyou"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <Thankyou />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/comingsoon"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <ComingSoon />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/contactus"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <Contactus />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/livestreamdetail/:id"
          element={
            token ? (
              <>
                <Layout>
                  <Livestreamdetail sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/certificationcenter"
          element={
            token ? (
              <>
                <div className="flex flex-col min-h-screen">
                  <CertificationCenter />
                  <Footer />
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/certificationfillform"
          element={
            token ? (
              <>
                <div className="flex flex-col min-h-screen">
                  <HeaderPages />
                  <CertificationFillForm />
                  <Footer />
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/blog"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <OurBlog />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/blogsingle"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <BlogSingle />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/company"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <CompanyDetails />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/press"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <Press />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/career"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <Career />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/about"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <About />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/invoice"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <Invoice />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/jobapply"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <JobApply />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {role === "teacher" && (
          <Route
            path="/createcourse"
            element={
              token ? (
                <Layout>
                  <CreateCourse />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        <Route
          path="/paidmembership"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <PaidMenberShip />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/checkout"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <Checkout />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/shoppingcart"
          element={
            token ? (
              <>
                <div className="flex flex-col min-h-screen">
                  <ShoppingCart />
                  <Footer />
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/setting"
          element={
            token ? (
              <>
                <Layout>
                  <SettingAccount sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/reporthistory"
          element={
            token ? (
              <Layout>
                <ReportHistory />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/sendfeedback"
          element={
            token ? (
              <Layout>
                <SendFeedback />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/addlivestream"
          element={
            token ? (
              <>
                <Layout>
                  <AddLiveStream sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/coursedetailview"
          element={
            token ? (
              <>
                <Layout>
                  <CourseDetailView sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/notification"
          element={
            token ? (
              <>
                <Layout>
                  <Notification sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/privacy"
          element={
            token ? (
              <>
                <Layout>
                  <Privacy sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/billing"
          element={
            token ? (
              <>
                <Layout>
                  <BillingandPayout sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/copyright"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <Copyright />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/apiclient"
          element={
            token ? (
              <>
                <Layout>
                  <ApiClients sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/closeAccount"
          element={
            token ? (
              <>
                <Layout>
                  <CloseAccount sidebar={sidebar} />
                </Layout>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {role === "teacher" && (
          <Route
            path="/verification"
            element={
              token ? (
                <Layout>
                  <Verification sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        {role === "teacher" && (
          <Route
            path="/dashboard"
            element={
              token ? (
                <Layout>
                  <DashBoard />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        {role === "teacher" && (
          <Route
            path="/statements"
            element={
              token ? (
                <Layout>
                  <Statements />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        {role === "teacher" && (
          <Route
            path="/earning"
            element={
              token ? (
                <Layout>
                  <Earning />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "teacher" && (
          <Route
            path="/review"
            element={
              token ? (
                <Layout>
                  <Review />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "teacher" && (
          <Route
            path="/mycertificates"
            element={
              token ? (
                <Layout>
                  <MyCertificates sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        <Route
          path="/about"
          element={
            token ? (
              <div className="flex flex-col min-h-screen">
                <HeaderPages />
                <About />
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {role === "student" && (
          <Route
            path="/dashboard2"
            element={
              token ? (
                <Layout>
                  <Dashboard2 sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        {role === "student" && (
          <Route
            path="/credits"
            element={
              token ? (
                <Layout>
                  <Credits sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        {role === "student" && (
          <Route
            path="/sendfeedback2"
            element={
              token ? (
                <Layout>
                  <SendFeedback2 sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        {role === "student" && (
          <Route
            path="/review2"
            element={
              token ? (
                <Layout>
                  <Review2 sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        {role === "student" && (
          <Route
            path="/statements2"
            element={
              token ? (
                <Layout>
                  <Statements2 sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "student" && (
          <Route
            path="/purchasedcourses"
            element={
              token ? (
                <Layout>
                  <PurchasedCourses />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "student" && (
          <Route
            path="/studentcertificates"
            element={
              token ? (
                <Layout>
                  <MyCertificates />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "teacher" && (
          <Route
            path="/teacherNotification"
            element={
              token ? (
                <Layout>
                  <TeacherNotification />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "teacher" && (
          <Route
            path="/teacherMess"
            element={
              token ? (
                <Layout>
                  <TeacherMess />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "student" && (
          <Route
            path="/studentMessage"
            element={
              token ? (
                <Layout>
                  <StudentMess />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "student" && (
          <Route
            path="/studentNotification"
            element={
              token ? (
                <Layout>
                  <StudentNotification />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "teacher" && (
          <Route
            path="/payout"
            element={
              token ? (
                <Layout>
                  <Payout sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "teacher" && (
          <Route
            path="/analysis"
            element={
              token ? (
                <Layout>
                  <Analysis sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        {role === "teacher" && (
          <Route
            path="/course"
            element={
              token ? (
                <Layout>
                  <Course sidebar={sidebar} />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}

        <Route
          path="*"
          element={<Navigate to={token ? "/home" : "/login"} />}
        />
      </Routes>
    </WebSocketProvider>
  );
};

export default App;
