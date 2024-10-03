import { SearchOutlined, StarOutlined } from "@ant-design/icons";

import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faCirclePlay,
  faClosedCaptioning,
  faComment,
  faEye,
  faFlag,
  faHeart,
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Radio, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllReviews, searchReview } from "../redux/actions/review.action";

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
const items = [
  {
    key: "1",
    label: (
      <div className="border-b transition-all duration-1000 flex justify-between">
        <div>
          {" "}
          <FontAwesomeIcon icon={faHtml5} className="size-[18px]" />
          <span className=" ml-6 font-medium text-[18px] h-[100px] pb-[30px] border-b-8 mb-1 text-[#333333] transition-all duration-1000">
            Introduction to this course
          </span>
        </div>
        <div className="flex items-center mr-6 gap-36">
          <span className="text-[18px] text-[#686f7a] font-normal">
            8 lecturers
          </span>
          <span className="text-[18px] text-[#686f7a] font-medium">22:08</span>
        </div>
      </div>
    ),
    children: [
      {
        key: "2",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                Note about Setting Up Front-End Developer Environment
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "3",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                NIntroducing Our TA
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "4",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                Join the Online Community
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "5",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">Why This Course?</div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "6",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                Syllabus Download
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "7",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                Syllabus Walkthrough
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
    ],
  },

  {
    key: "8",
    label: (
      <div className="border-b transition-all duration-1000 flex justify-between">
        <div>
          {" "}
          <FontAwesomeIcon icon={faHtml5} className="size-[18px]" />
          <span className=" ml-6 font-medium text-[18px] h-[100px] pb-[30px] border-b-8 mb-1 text-[#333333] transition-all duration-1000">
            Introduction to Front End Developer
          </span>
        </div>
        <div className="flex items-center mr-6 gap-36">
          <span className="text-[18px] text-[#686f7a] font-normal">
            8 lecturers
          </span>
          <span className="text-[18px] text-[#686f7a] font-medium">22:08</span>
        </div>
      </div>
    ),
    children: [
      {
        key: "9",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">Unit Objectives</div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[15px] text-[#686f7a] hover:text-red-600">
                Preview
              </span>
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "10",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                Note about Setting Up Front-End Developer Environment
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "11",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                Setting Up Front-End Developer Environment
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "12",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                Note about Introduction to the Web
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "13",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                Introduction to the Web
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "14",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[15px] text-[#686f7a] hover:text-red-600">
                Preview
              </span>
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "15",
    label: (
      <div className="border-b transition-all duration-1000 flex justify-between">
        <div>
          {" "}
          <FontAwesomeIcon icon={faHtml5} className="size-[18px]" />
          <span className=" ml-6 font-medium text-[18px] h-[100px] pb-[30px] border-b-8 mb-1 text-[#333333] transition-all duration-1000">
            Introduction to HTML
          </span>
        </div>
        <div className="flex items-center mr-6 gap-36">
          <span className="text-[18px] text-[#686f7a] font-normal">
            8 lecturers
          </span>
          <span className="text-[18px] text-[#686f7a] font-medium">22:08</span>
        </div>
      </div>
    ),
    children: [
      {
        key: "16",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "17",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "18",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "19",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "20",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "21",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "22",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "23",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "24",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "25",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "26",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "27",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "28",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "29",
    label: (
      <div className="border-b transition-all duration-1000 flex justify-between">
        <div>
          {" "}
          <FontAwesomeIcon icon={faHtml5} className="size-[18px]" />
          <span className=" ml-6 font-medium text-[18px] h-[100px] pb-[30px] border-b-8 mb-1 text-[#333333] transition-all duration-1000">
            Intermediate HTML
          </span>
        </div>
        <div className="flex items-center mr-6 gap-36">
          <span className="text-[18px] text-[#686f7a] font-normal">
            8 lecturers
          </span>
          <span className="text-[18px] text-[#686f7a] font-medium">22:08</span>
        </div>
      </div>
    ),
    children: [
      {
        key: "30",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "31",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "32",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "33",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "34",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "35",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "36",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "37",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "38",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "39",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "40",
    label: (
      <div className="border-b transition-all duration-1000 flex justify-between">
        <div>
          {" "}
          <FontAwesomeIcon icon={faHtml5} className="size-[18px]" />
          <span className=" ml-6 font-medium text-[18px] h-[100px] pb-[30px] border-b-8 mb-1 text-[#333333] transition-all duration-1000">
            Introduction to CSS
          </span>
        </div>
        <div className="flex items-center mr-6 gap-36">
          <span className="text-[18px] text-[#686f7a] font-normal">
            8 lecturers
          </span>
          <span className="text-[18px] text-[#686f7a] font-medium">22:08</span>
        </div>
      </div>
    ),
    children: [
      {
        key: "41",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "41",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "42",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "43",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "44",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "45",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "46",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "47",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "48",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "49",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "50",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "51",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "52",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "53",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "54",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "55",
    label: (
      <div className="border-b transition-all duration-1000 flex justify-between">
        <div>
          {" "}
          <FontAwesomeIcon icon={faHtml5} className="size-[18px]" />
          <span className=" ml-6 font-medium text-[18px] h-[100px] pb-[30px] border-b-8 mb-1 text-[#333333] transition-all duration-1000">
            Intermediate CSS
          </span>
        </div>
        <div className="flex items-center mr-6 gap-36">
          <span className="text-[18px] text-[#686f7a] font-normal">
            8 lecturers
          </span>
          <span className="text-[18px] text-[#686f7a] font-medium">22:08</span>
        </div>
      </div>
    ),
    children: [
      {
        key: "56",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "57",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "58",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "59",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "60",
    label: (
      <div className="border-b transition-all duration-1000 flex justify-between">
        <div>
          {" "}
          <FontAwesomeIcon icon={faHtml5} className="size-[18px]" />
          <span className=" ml-6 font-medium text-[18px] h-[100px] pb-[30px] border-b-8 mb-1 text-[#333333] transition-all duration-1000">
            Bootstrap
          </span>
        </div>
        <div className="flex items-center mr-6 gap-36">
          <span className="text-[18px] text-[#686f7a] font-normal">
            8 lecturers
          </span>
          <span className="text-[18px] text-[#686f7a] font-medium">22:08</span>
        </div>
      </div>
    ),
    children: [
      {
        key: "61",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "62",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "63",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "64",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "65",
    label: (
      <div className="border-b transition-all duration-1000 flex justify-between">
        <div>
          {" "}
          <FontAwesomeIcon icon={faHtml5} className="size-[18px]" />
          <span className=" ml-6 font-medium text-[18px] h-[100px] pb-[30px] border-b-8 mb-1 text-[#333333] transition-all duration-1000">
            Bootstrap 4!
          </span>
        </div>
        <div className="flex items-center mr-6 gap-36">
          <span className="text-[18px] text-[#686f7a] font-normal">
            8 lecturers
          </span>
          <span className="text-[18px] text-[#686f7a] font-medium">22:08</span>
        </div>
      </div>
    ),
    children: [
      {
        key: "66",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "67",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "68",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "69",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    key: "70",
    label: (
      <div className="border-b transition-all duration-1000 flex justify-between">
        <div>
          {" "}
          <FontAwesomeIcon icon={faHtml5} className="size-[18px]" />
          <span className=" ml-6 font-medium text-[18px] h-[100px] pb-[30px] border-b-8 mb-1 text-[#333333] transition-all duration-1000">
            Introduction to JavaScript
          </span>
        </div>
        <div className="flex items-center mr-6 gap-36">
          <span className="text-[18px] text-[#686f7a] font-normal">
            8 lecturers
          </span>
          <span className="text-[18px] text-[#686f7a] font-medium">22:08</span>
        </div>
      </div>
    ),
    children: [
      {
        key: "71",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "72",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "73",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
      {
        key: "74",
        label: (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCirclePlay} className="text-[#686f7a]" />
              <div className="text-[16px] text-[#686f7a]">
                The Front End Holy Trinity
              </div>
            </div>
            <div className="flex items-center mr-6 gap-36">
              <span className="text-[16px] text-[#686f7a]">11:46</span>
            </div>
          </div>
        ),
      },
    ],
  },
];
const CourseDetailView = ({ sidebar }) => {
  const [activeTab, setActiveTab] = useState("About");

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

  const navigate = useNavigate();

  const [value, setValue] = useState(1);
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const levelKeys = getLevelKeys(items);

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

  const About = () => {
    return (
      <div className="mt-10 ml-[-10px]">
        <div
          className={`text-black cursor-pointer  ml-[-80px]  ${
            sidebar ? "w-[1260px]" : "w-[1400px]"
          }`}
        >
          <h3 className="text-[#333333] text-[20px] font-medium">
            {" "}
            Requirement
          </h3>
          <div className="text-[14px] text-[#686f7a] font-normal space-y-3 ">
            <li>
              <span>Have a computer with Internet </span>
            </li>
            <li>
              <span>Be ready to learn an insane amount of awesome stuff </span>
            </li>
            <li>
              <span>Prepare to build real web apps! </span>
            </li>
          </div>
          <div className="mt-7">
            <h3 className="text-[20px] font-medium text-[#333333]">
              Description
            </h3>
            <span className="text-[16px] text-[#333333] font-medium mt-7">
              Just updated to include Bootstrap 4.1.3!
            </span>
            <p className="mt-6 text-[14px] font-normal text-[#686f7a]">
              Hi! Welcome to the Web Developer Bootcamp, the{" "}
              <strong className="font-medium ">
                only course you need to learn web development.
              </strong>{" "}
              There are a lot of options for online developer training, but this
              course is without a doubt the most comprehensive and effective on
              the market. Here's why:
            </p>
            <div className="text-[14px] font-normal text-[#686f7a] space-y-3">
              <li>
                <span>
                  This is the only online course taught by a professional
                  bootcamp instructor.
                </span>
              </li>
              <li>
                <span>
                  94% of my in-person bootcamp students go on to get full-time
                  developer jobs. Most of them are complete beginners when I
                  start working with them.
                </span>
              </li>
              <li>
                <span>
                  The previous 2 bootcamp programs that I taught cost $14,000
                  and $21,000. This course is just as comprehensive but with
                  brand new content for a fraction of the price.
                </span>
              </li>
              <li>
                <span>
                  Everything I cover is up-to-date and relevant to today's
                  developer industry. No PHP or other dated technologies. This
                  course does not cut any corners.
                </span>
              </li>
              <li>
                <span>
                  This is the only complete beginner full-stack developer course
                  that covers NodeJS.
                </span>
              </li>
              <li>
                <span>
                  We build 13+ projects, including a gigantic production
                  application called YelpCamp. No other course walks you through
                  the creation of such a substantial application.
                </span>
              </li>
              <li>
                <span>
                  The course is constantly updated with new content, projects,
                  and modules. Think of it as a subscription to a never-ending
                  supply of developer training.
                </span>
              </li>
              <p
                className="text-[14px] text-[#686f7a] font-normal"
                style={{ lineHeight: "1.8" }}
              >
                When you're learning to program you often have to sacrifice
                learning the exciting and current technologies in favor of the
                "beginner friendly" classes. With this course, you get the best
                of both worlds. This is a course designed for the complete
                beginner, yet it covers some of the most exciting and relevant
                topics in the industry.
              </p>
              <p className=" py-2">
                Throughout the course we cover tons of tools and technologies
                including:
              </p>
              <div className="space-y-3 font-semibold">
                <li>
                  <span>HTML5</span>
                </li>
                <li>
                  <span>CSS3</span>
                </li>
                <li>
                  <span>JavaScript</span>
                </li>
                <li>
                  <span>Bootstrap 4</span>
                </li>
                <li>
                  <span>SemanticUI</span>
                </li>
                <li>
                  <span>DOM Manipulation</span>
                </li>
                <li>
                  <span>jQuery</span>
                </li>
                <li>
                  <span>HTML5</span>
                </li>
                <li>
                  <span>CSS3</span>
                </li>
                <li>
                  <span>JavaScript</span>
                </li>
                <li>
                  <span>Bootstrap 4</span>
                </li>
                <li>
                  <span>SemanticUI</span>
                </li>
                <li>
                  <span>DOM Manipulation</span>
                </li>
                <li>
                  <span>jQuery</span>
                </li>
              </div>
              <p
                className="text-[14px] text-[#686f7a] font-normal"
                style={{ lineHeight: "1.8" }}
              >
                This course is also unique in the way that it is structured and
                presented. Many online courses are just a long series of "watch
                as I code" videos. This course is different. I've incorporated
                everything I learned in my years of teaching to make this course
                not only more effective but more engaging. The course includes:
              </p>

              <div className="space-y-2">
                <li>
                  <span>Lectures</span>
                </li>

                <li>
                  <span>Code-Alongs</span>
                </li>
                <li>
                  <span>Projects</span>
                </li>
                <li>
                  <span>Exercises</span>
                </li>

                <li>
                  <span>Research Assignments</span>
                </li>
                <li>
                  <span>Slides</span>
                </li>
                <li>
                  <span>Downloads</span>
                </li>
                <li>
                  <span>Readings</span>
                </li>
              </div>
              <p
                className="text-[14px] text-[#686f7a] font-normal"
                style={{ lineHeight: "1.8" }}
              >
                If you have any questions, please don't hesitate to contact me.
                I got into this industry because I love working with people and
                helping students learn. Sign up today and see how fun, exciting,
                and rewarding web development can be!
              </p>
              <div>
                <h3 className="text-[20px] font-medium text-[#333333]">
                  Who this course is for
                </h3>
                <div className="space-y-3">
                  <li>
                    <span>
                      This course is for anyone who wants to learn about web
                      development, regardless of previous experience
                    </span>
                  </li>

                  <li>
                    <span>
                      It's perfect for complete beginners with zero experience
                    </span>
                  </li>
                  <li>
                    <span>
                      It's also great for anyone who does have some experience
                      in a few of the technologies(like HTML and CSS) but not
                      all
                    </span>
                  </li>
                  <li>
                    <span>
                      If you want to take ONE COURSE to learn everything you
                      need to know about web development, take this course
                    </span>
                  </li>
                </div>
                <div className="mt-9 bg-white p-2">
                  <h3 className="text-[20px] text-[#333333] font-medium px-7 py-6">
                    What you'll learn
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 ml-7">
                    {[
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Nunc dapibus ligula sed justo porta, id volutpat odio iaculis.",
                      "Maecenas pharetra mi quis nisl mollis, molestie imperdiet lorem molestie.",
                      "Maecenas ultricies felis in pulvinar blandit.",
                      "Praesent ac libero consequat, efficitur tortor et, interdum sem.",
                      "Nullam non lacus nibh. Etiam et fringilla neque, ut vulputate sapien. Sed vitae tortor gravida, interdum felis at, pulvinar enim. Integer tempor urna leo.",
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                      "Donec ultricies elit porttitor, ultrices enim a, commodo dolor.",
                    ].map((text, index) => (
                      <div
                        key={index}
                        className="flex items-center col-span-1 gap-[4px] space-y-3"
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-black"
                        />
                        <span className="ml-2">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CoursesContent = () => {
    return (
      <div className="font-medium text-xl my-10 w-[1000px]">
        <div className="">
          <div className="flex pl-[30px] text-[#333333]">
            <div className=" gap-[650px] flex p-3">
              <span className="text-[20px] text-[#333333] w-[200px] ">
                Course Content
              </span>
              <div className="flex gap-2">
                <span className="text-[14px] text-[#333333] w-[90px]">
                  Expand All
                </span>
                <span className="text-[14px] text-[#333333] w-[90px]">
                  402 lectures
                </span>
                <span className="text-[14px] text-[#333333]">47:06:29</span>
              </div>
            </div>
          </div>

          <div className="mt-2 w-[1500px]">
            <Radio.Group
              onChange={onChange}
              value={value}
              style={{ marginBottom: 20 }}
            >
              <Menu
                className="custom-menu bg-transparent border-b-4 border-[#F7F7F7] w-[1100px] bg-white"
                mode="inline"
                defaultSelectedKeys={["11"]}
                selectedKeys={selectedKeys}
                openKeys={stateOpenKeys}
                onOpenChange={onOpenChange}
                onSelect={onSelect}
                items={items.map((item) => ({
                  ...item,
                }))}
              />
            </Radio.Group>
          </div>
        </div>
      </div>
    );
  };

  const Reviews = ({ sidebar }) => {
    const { reviews, loading, error } = useSelector((state) => state.review);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const reviewsToShow = 3;
    const userId = useSelector((state) => state.auth.id);

    useEffect(() => {
      if (userId){
      dispatch(getAllReviews(userId));
      }
    }, [dispatch, userId]);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (searchQuery) {
          console.log(searchQuery);
          dispatch(searchReview(userId, searchQuery));
        } else {
          dispatch(getAllReviews(userId));
        }
      }, 300);
  
      return () => clearTimeout(timer);
    }, [searchQuery, dispatch, userId]);
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };

    return (
        <div>
            <div className={`mt-[50px] text-black text-xl ${sidebar ? "w-[1200px]" : "w-[1400px]"}`}>
                <h1 className="ml-[-100px]"><StarOutlined /> All Review</h1>
            </div>
            <div className="flex gap-x-10 justify-center mt-8 ml-6">
            <div className={`bg-white h-[280px] ml-[-400px] mt-5 px-4  ${sidebar ? "w-[450px] " : "w-[500px] "}`}>
                    <div className='text-xl mt-4 ml-1'>
                        <h1>All Student Feedback</h1>
                    </div>
                    <div className='w-full h-14 bg-[#F7F7F7] border'>
                        <div className='ml-6 pt-4 text-yellow-500 text-[20px] flex gap-3'>
                            <h1 className='text-black mr-2 text-[16px] mt-1'>4.6</h1>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <p className='text-black ml-2 mt-1 font-medium text-[13px]'>All Rating</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex'>
                            <div className='relative w-full h-6 rounded-sm'>
                                <div className='absolute bg-red-500 w-[75%] h-6 z-10'></div>
                                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
                            </div>
                            <div className='ml-6 text-yellow-500 text-[20px] flex gap-1'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon className='text-[#F7F7F7]' icon={faStar} />
                                <p className='text-[#333333] font-medium text-[14px] ml-2'>70%</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative w-full h-6 rounded-sm'>
                                <div className='absolute bg-red-500 w-[37.5%] h-6 z-10'></div>
                                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
                            </div>
                            <div className='ml-6 text-yellow-500 text-[20px] flex gap-1'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className='text-[#F7F7F7] flex gap-1'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p className='text-[#333333] font-medium text-[14px] ml-2'>40%</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative w-full h-6 rounded-sm'>
                                <div className='absolute bg-red-500 w-[5%] h-6 z-10'></div>
                                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
                            </div>
                            <div className='ml-6 text-yellow-500 text-[20px] flex gap-1'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <div className='text-[#F7F7F7] flex gap-1'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p className='text-[#333333] font-medium text-[14px] ml-2 mt-1'>5%</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='relative w-full h-6 rounded-sm'>
                                <div className='absolute bg-red-500 w-0 h-6 z-10'></div>
                                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
                            </div>
                            <div className='ml-6 text-[#F7F7F7] text-[20px] flex gap-1'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <p className='text-[#333333] font-medium text-[14px] ml-2'>0%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`p-4 ${sidebar ? "w-[650px]" : "w-[700px]"}`}>
                    <div>
                        <div className='flex items-center'>
                            <h1 className='mt-1 mr-4'>All Reviews</h1>
                            <div className='flex items-center bg-[#F7F7F7] border-[#F7F7F7] relative w-[200px] ml-auto p-1'>
                                <input
                                    type='text'
                                    placeholder='Search reviews..'
                                    className='focus:outline-none w-full text-xs p-2 bg-white text-black'
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                />
                                <button className='bg-red-500 p-1.5 hover:bg-[#333333] transition duration-300'>
                                    <SearchOutlined style={{ color: 'white', fontSize: '16px' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-6 ">
              {loading ? (
                <div className="col-span-4 flex justify-center">
                  <Spinner animation="border" />
                </div>
              ) : error ? (
                <div className="col-span-4">
                  <Alert variant="danger">No reviews found</Alert>
                </div>
              ) : reviews.length === 0 ? (
                <div className="col-span-4">
                  <Alert variant="info">No reviews found</Alert>
                </div>
              ) : (
                reviews.slice(0, reviewsToShow).map((review, index) => (
                  <div key={index} className='bg-white w-full h-auto mt-8 pb-4'>
                    <div className='pt-4'>
                      <h1 className='text-xl ml-4'>Course Title Here</h1>
                      <hr className="my-2 w-full border-gray-300" />
                    </div>
                    <div>
                      <div className='flex gap-3 mt-6 ml-4'>
                        <div>
                          <img
                            src={review.avatar}
                            width={40}
                            alt='img'
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3>{review.username}</h3>
                          <div className="text-sm font-light text-gray-500">{review.time}</div>
                        </div>
                      </div>
                      <div className='ml-4 mt-4 text-yellow-500 text-[20px] flex gap-1'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon className='text-[#F7F7F7]' icon={faStar} />
                      </div>
                      <div className='ml-4 mt-4 leading-7'>
                        <p className='text-gray-400 text-[14px]'>{review.title}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
                </div>
            </div>
        </div>
    );
};

  return (
    <div className="mt-[65px] overflow-x-hidden">
      <div
        className={`bg-[#333333] h-[380px] flex gap-x-[50px] ${
          sidebar ? "w-[1457px]" : "w-[1690px]"
        }`}
      >
        <div className="mt-[20px] bg-white w-[400px] h-[240px] ml-[40px] relative rounded-md">
          <div className="w-full h-full relative">
            <div className="relative p-3">
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg"
                // src={course.thumbnail} // Replace with your image URL
                alt="Course Thumbnail"
                className="w-full h-full object-cover border border-gray-300"
              />
              <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                BESTSELLER
              </span>
              <div className=" h-[50px] absolute bottom-[-4px] left-0 right-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-medium  opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                Preview this course
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="flex gap-3 mt-6 text-white font-normal">
                <FontAwesomeIcon icon={faHeart} />
                <p>Save</p>
              </div>
              <div className="flex gap-3 mt-6 text-white font-normal">
                <FontAwesomeIcon icon={faFlag} />
                <p>Report abuse</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#333333] w-[700px] space-y-5 mt-5">
          <div>
            {/* <h2>{course.title}</h2> */}
            <h2 className="text-[24px] text-white">
              The Web Developer Bootcamp
            </h2>
            <span className="text-[14px] text-white font-medium">
              The only course you need to learn web development - HTML, CSS, JS,
              Node, and More!
            </span>
          </div>
          <div className=" inline-flex mt-2 gap-2">
            <div className=" top-2 left-2 bg-yellow-400 text-white text-sm font-medium gap-2 px-3 py-1 rounded">
              <FontAwesomeIcon icon={faStar} />
              {/* {course.rating} */}
              5.3.2
            </div>
            <div className="mt-1 text-[14px] text-white font-medium">
              {" "}
              (81,665 ratings)
            </div>
          </div>
          <div className="text-white  text-[14px] font-medium">
            114,521 students enrolled
          </div>
          <div className="flex mt-3 gap-4 text-white">
            <div className="flex gap-2">
              <FontAwesomeIcon icon={faComment} />
              <span className="text-[14px] font-medium">English</span>
            </div>
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faClosedCaptioning} />
              <span className="text-[14px] font-medium">
                English, Dutch 12 more
              </span>
            </div>
          </div>
          <div>
            <span className="text-[14px] font-medium text-white ">
              Last updated 1/2024
            </span>
          </div>
          <div className="space-x-5">
            <button className="text-white text-[14px] font-medium bg-red-600 px-6 py-3 rounded-sm">
              Add to cart
            </button>
            <button className="text-white text-[14px] font-medium bg-[#333333] hover:bg-red-600 px-6 py-3 rounded-sm outline outline-1 outline-white">
              Buy Now
            </button>
          </div>
          <span className="text-white text-[12px]">
            30-Day Money-Back Guarantee
          </span>
        </div>
      </div>

      <div className={`bg-white   ${sidebar ? "w-[1457px]" : "w-[1690px]"}`}>
        <div className="py-2 px-4 pt-8">
          <div className="flex justify-between">
            <div className="flex items-center ml-1">
              <a href="#">
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
                  className="size-[50px] mr-4"
                  alt="Profile"
                />
              </a>
              <div className="flex flex-col ">
                <a
                  href="#"
                  className="text-[16px] text-[#333333] font-medium mb-2"
                >
                  {/* {course.instructor} */}
                  Johnson Smith
                </a>
                <button className="px-3 py-2 bg-red-600 text-white text-[14px] rounded-sm">
                  Subscribed
                </button>
              </div>
            </div>
            <div className="flex mr-[200px] gap-1 ">
              {/* <div className="flex flex-col items-center rounded-sm border">
                <FontAwesomeIcon icon={faEye} className="size-[18px] px-5 py-3" />
                <span>142</span>
              </div> */}
              <div className="flex flex-col items-center rounded-sm border px-5 py-3">
                <FontAwesomeIcon icon={faEye} className="size-[18px]" />
                <span className="mt-[5px]">1452</span>
              </div>
              <div className="flex flex-col items-center rounded-sm border px-5 py-3">
                <FontAwesomeIcon icon={faThumbsUp} className="size-[18px]" />
                <span className="mt-[5px]">100</span>
              </div>
              <div className="flex flex-col items-center rounded-sm border px-5 py-3">
                <FontAwesomeIcon icon={faThumbsDown} className="size-[18px]" />
                <span className="mt-[5px]">20</span>
              </div>
              <div className="flex flex-col items-center rounded-sm border px-5 py-3">
                <FontAwesomeIcon icon={faShareNodes} className="size-[18px]" />
                <span className="mt-[5px]">9</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex gap-5 pt-3 ml-[500px]  ${
            sidebar ? "ml-28" : "ml-64"
          }`}
        >
          <Button
            className={`text-black font-medium text-[16px] ${
              activeTab === "About" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("About")}
          >
            About
          </Button>
          <Button
            className={`text-black font-medium text-[16px] ${
              activeTab === "Courses Content"
                ? "border-b-2 p-2 border-[#ed2a26]"
                : ""
            }`}
            onClick={() => setActiveTab("Courses Content")}
          >
            Courses Content
          </Button>
          <Button
            className={`text-black font-medium text-[16px] ${
              activeTab === "Review" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("Review")}
          >
            Reviews
          </Button>
        </div>
      </div>
      <div className={`mt-4 ${sidebar ? "ml-[115px]" : "ml-64"}`}>
        {activeTab === "About" && <About />}
        {activeTab === "Courses Content" && <CoursesContent />}
        {activeTab === "Review" && <Reviews />}
      </div>
    </div>
  );
};

export default CourseDetailView;
