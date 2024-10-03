import { React, useEffect, useState } from "react";
import { Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../redux/actions/news.action";

const Dashboard2 = ({ sidebar }) => {
  const { news, loading, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [visibleNews, setVisibleNews] = useState(3);
  const handleLoadMore = () => {
    setVisibleNews((prev) => prev + 2);
  };

  const handleNext = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  const handlePrev = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className={`mt-32`}>
      <div className={`flex gap-4 ${sidebar ? "ml-8" : ""}`}>
        <Image
          className="w-[32px] h-[32px]"
          src={require("../assets/apps.png")}
        />
        <h1 className="text-[30px]">Student Dashboard</h1>
      </div>
      <div
        className={`mt-4 grid grid-cols-2 gap-[100px] h-[150px] ${
          sidebar ? "w-[1400px] ml-8" : "w-[1660px]"
        }`}
      >
        <div
          className={`col-span-1 bg-white flex ${
            sidebar ? "w-[650px]" : "w-[770px]"
          }`}
        >
          <div className={`mt-4 ml-4`}>
            <div className="font-semibold">Total Purchased Courses</div>
            <div className="mt-4 text-2xl font-bold">80</div>
            <h1 className="bg-[#FFA052] mt-4 p-1 pb-[6px] rounded w-[70px] text-sm pl-[13px] text-white">
              New 5
            </h1>
          </div>
          <img
            className={`w-[80px] h-[80px] mt-10 ${
              sidebar ? "ml-[350px]" : "ml-[470px]"
            }`}
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/online-course.svg"
            alt="Online Course"
          />
        </div>
        <div
          className={`col-span-1 bg-white flex ${
            sidebar ? "w-[650px]" : "w-[770px]"
          }`}
        >
          <div className={`mt-4 ml-4`}>
            <div className="font-semibold">Total Purchased Courses</div>
            <div className="mt-4 text-2xl font-bold">15</div>
            <h1 className="bg-[#d3a8ff] mt-4 p-1 pb-[6px] rounded w-[70px] text-sm pl-[13px] text-white">
              New 3
            </h1>
          </div>
          <img
            className={`w-[80px] h-[80px] mt-10 ${
              sidebar ? "ml-[350px]" : "ml-[470px]"
            }`}
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/knowledge.svg"
            alt="Online Course"
          />
        </div>
      </div>
      <div className={`flex`}>
        <div className={`mt-10 ${sidebar ? "ml-8" : ""}`}>
          <div className={`flex`}>
            <h1 className="text-xl">News</h1>
            <div
              className={`flex items-center text-end gap-2 justify-end ${
                sidebar ? "ml-[330px]" : "ml-[390px]"
              }`}
            >
              <Button
                className={`px-2 py-1 bg-white text-center rounded ${
                  currentNewsIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePrev}
                disabled={currentNewsIndex === 0}
              >
                &lt;
              </Button>
              <Button
                className={`px-2 py-1 bg-white text-center rounded ${
                  currentNewsIndex === news.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleNext}
                disabled={currentNewsIndex === news.length - 1}
              >
                &gt;
              </Button>
            </div>
          </div>
          {news.map(
            (item, index) =>
              index === currentNewsIndex && (
                <div
                  key={index}
                  className={`bg-white ${
                    sidebar ? "h-[480px] w-[450px]" : "h-[480px] w-[510px]"
                  }`}
                >
                  <div
                    className={` ml-[5px] mt-[5px] ${
                      sidebar ? "w-[440px] h-[270px]" : "w-[500px] h-[270px]"
                    }`}
                  >
                    <Image
                      className={`pt-2 ${
                        sidebar ? "w-[440px] h-[270px]" : "w-[500px] h-[270px]"
                      }`}
                      src={item.image}
                    />
                  </div>
                  <h1 className="mt-10 ml-3 text-xl">{item.title}</h1>
                  <div className="mt-4 ml-3 text-md">{item.description}</div>
                  <div className="mt-10 ml-3 text-xs font-semibold">
                    LEARN MORE
                  </div>
                </div>
              )
          )}
        </div>
        <div className="ml-10 mt-12">
          <div className="text-xl font-semibold mb-4">
            What's new in Cursus?
          </div>
          {news.slice(0, visibleNews).map((item) => (
            <div className="mt-[1px] w-[500px] h-[50px] bg-white">
              <h1 className="items-center pt-4 pl-4 font-light text-sm">
                {item.title}
              </h1>
            </div>
          ))}
          {news.length > visibleNews && (
            <Button className="mt-6 ml-[430px]" onClick={handleLoadMore}>
              See more
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
