import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllInstructor } from "../redux/actions/instructor.action";
import { useNavigate } from "react-router-dom";

const Livestream = ({ sidebar }) => {
  const navigate = useNavigate();
  const { instructors } = useSelector((state) => state.instructors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInstructor());
  }, [dispatch]);

  const handleInstructorClick = (instructorId) => {
    navigate(`/livestreamdetail/${instructorId}`);
  };

  return (
    <div>
      <div className="pt-[100px] pl-[30px] font-semibold">All Live Streams</div>
      <div
        className={`grid grid-cols-7 ${sidebar ? "w-[1300px]" : "w-[1640px]"}`}
      >
        <div className="col-span-5 pl-[30px]">
          <div className="grid grid-cols-4 gap-7 pt-5">
            {instructors.map((instructor, i) => (
              <a
                href=""
                alt="day"
                key={i}
                onClick={() => handleInstructorClick(instructor.id)}
              >
                <div className="bg-[#DED9DE] py-[20px] px-[20px]">
                  <div className="bg-[#E5E0E5] py-[30px] px-[10px] drop-shadow-lg text-center relative">
                    <div className="pl-[30px]">
                      <img
                        src={instructor.avatar}
                        alt="img"
                        className={`w-[60px] rounded-full relative -mt-[20px] ml-3 ${
                          sidebar ? "ml-28" : "ml-[40px]"
                        }`}
                      />
                    </div>
                    <div className="text-base mt-4 ">{instructor.username}</div>
                    <div className="text-md">
                      <span>live </span>
                      <span className="text-red-600">•</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div
          className={`col-span-2 bg-white ml-[30px] max-h-80 ${
            sidebar ? "w-[300px]" : "w-[380px]"
          }`}
        >
          <div className="font-semibold text-[17px] pt-2 pl-4">
            <p>Live Streaming</p>
          </div>
          <hr />
          <div className="text-center pt-3">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-[40px] px-3 py-3 rounded-full bg-[#FFECEC]"
            />
          </div>
          <div className="text-[15px] text-center pt-4 text-[#767676]">
            Set up your channel and stream live to your students
          </div>
          <div className="text-center pt-5">
            <button className="bg-[#ed2a26] hover:bg-black text-white py-2 px-6 text-[15px] rounded">
              Get Started
            </button>
          </div>
          <p className="text-[#767676] text-center text-[12px] pt-2">
            Info: This feature only for 'Instructors'.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Livestream;
