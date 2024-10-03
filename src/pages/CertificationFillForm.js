import { useNavigate } from "react-router-dom";
import {
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Menu, Radio } from "antd";
import React, { useState } from "react";

const items = [
  {
    key: "1",
    label: <span style={{ fontWeight: "bold" }}>Development</span>,
    children: [
      { key: "2", label: <Radio value={2}>WordPress</Radio> },
      { key: "3", label: <Radio value={3}>HTML CSS</Radio> },
      { key: "4", label: <Radio value={4}>Full Time</Radio> },
      { key: "5", label: <Radio value={5}>MotoCMS 3</Radio> },
      { key: "6", label: <Radio value={6}>Full Time</Radio> },
      { key: "7", label: <Radio value={7}>Open Cart</Radio> },
      { key: "8", label: <Radio value={8}>WordPress Pro</Radio> },
      { key: "9", label: <Radio value={9}>WordPress Elementor</Radio> },
      { key: "10", label: <Radio value={10}>WordPress Elementor Pro</Radio> },
      { key: "11", label: <Radio value={11}>Presta Shop</Radio> },
    ],
  },
  {
    key: "12",
    label: <span style={{ fontWeight: "bold" }}>Finance & Accounting</span>,
    children: [
      { key: "13", label: <Radio value={13}>Accounting</Radio> },
      { key: "14", label: <Radio value={14}>Finance Fundamentals</Radio> },
      { key: "15", label: <Radio value={15}>Bookkeeping</Radio> },
      { key: "16", label: <Radio value={16}>Political Science</Radio> },
      { key: "17", label: <Radio value={17}>Finance</Radio> },
      { key: "18", label: <Radio value={18}>Cryptocurrency</Radio> },
    ],
  },
  {
    key: "19",
    label: <span style={{ fontWeight: "bold" }}>Design</span>,
    children: [
      { key: "20", label: <Radio value={20}>Adobe Photoshop</Radio> },
      { key: "21", label: <Radio value={21}>Adobe Illustrator</Radio> },
      { key: "22", label: <Radio value={22}>Adobe After Effects</Radio> },
      { key: "23", label: <Radio value={23}>Adobe InDesign</Radio> },
      { key: "24", label: <Radio value={24}>Unity</Radio> },
      { key: "25", label: <Radio value={25}>Drawing</Radio> },
      { key: "26", label: <Radio value={26}>Game Development Fundamentals</Radio> },
      { key: "27", label: <Radio value={27}>3D Modeling</Radio> },
      { key: "28", label: <Radio value={28}>Motion Graphics</Radio> },
      { key: "29", label: <Radio value={29}>2D Animation</Radio> },
      { key: "30", label: <Radio value={30}>T-Shirt Design</Radio> },
    ],
  },
  {
    key: "31",
    label: <span style={{ fontWeight: "bold" }}>Marketing</span>,
    children: [
      { key: "32", label: <Radio value={32}>Google Ads(Adwords)</Radio> },
      { key: "33", label: <Radio value={33}>Google Ads(AdWords) Certification</Radio> },
      { key: "34", label: <Radio value={34}>Social Marketing</Radio> },
      { key: "35", label: <Radio value={35}>Email Marketing</Radio> },
      { key: "36", label: <Radio value={36}>Business Strategy</Radio> },
      { key: "37", label: <Radio value={37}>SEO</Radio> },
      { key: "38", label: <Radio value={38}>PPC Advertising</Radio> },
      { key: "39", label: <Radio value={39}>Blogging</Radio> },
    ],
  },
  {
    key: "40",
    label: <span style={{ fontWeight: "bold" }}>Teaching & Academics</span>,
    children: [
      { key: "41", label: <Radio value={41}>Math</Radio> },
      { key: "42", label: <Radio value={42}>Humanities</Radio> },
      { key: "43", label: <Radio value={43}>Engineering</Radio> },
      { key: "44", label: <Radio value={44}>Science</Radio> },
      { key: "45", label: <Radio value={45}>Social Science</Radio> },
      { key: "46", label: <Radio value={46}>English Language</Radio> },
      { key: "47", label: <Radio value={47}>German Language</Radio> },
      { key: "48", label: <Radio value={48}>Sign Language</Radio> },
      { key: "49", label: <Radio value={49}>French Language</Radio> },
      { key: "50", label: <Radio value={50}>Spanish Language</Radio> },
      { key: "51", label: <Radio value={51}>English Grammar</Radio> },
      { key: "52", label: <Radio value={52}>IELTS</Radio> },
    ],
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 0) => {
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

const levelKeys = getLevelKeys(items);

const CertificationFillForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [stateOpenKeys, setStateOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleCertificationCenter = () => {
    navigate("/certificationcenter");
  };

  const handleAddCertificates3 = () => {
    const selectedItem = items.flatMap(item => item.children).find(child => child.key === String(value));
    const testTitle = selectedItem ? extractTextFromLabel(selectedItem.label) : "Default Test Title";
    navigate("/testview", { state: { testTitle } });
  };

  const handleHome = () => {
    navigate("/home");
  };

  const onChange = (e) => {
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

  const extractTextFromLabel = (label) => {
    if (React.isValidElement(label)) {
      const text = React.Children.toArray(label.props.children)
        .filter(child => typeof child === 'string')
        .join(''); 
      return text || "";
    }
    return "";
  };

  return (
    <div className="pb-[50px]">
      <div className="text-black bg-white">
        <div className="flex justify-between">
          <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
            <p onClick={handleHome}>Home /</p>
            <p onClick={handleCertificationCenter}>Certification Center /</p>
            <p className="text-[#787878]">Certification Fill Form</p>
          </div>
          <div
            className="text-black pt-[80px] pr-[12%] text-[14px] flex items-center text-center cursor-pointer"
            onClick={handleCertificationCenter}
          >
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <p className="pl-2">Back to Certification Center</p>
          </div>
        </div>
        <div className="pt-5 pb-3 pl-[11%] text-2xl">
          <h1>Certification Fill Form</h1>
        </div>
      </div>
      <div className="pl-[35%] pt-[50px] text-black">
        <div className="flex border p-[10px] rounded-sm shadow-md bg-white relative w-[550px] h-auto flex-col items-center">
          <div>
            <div className="text-2xl font-semibold pt-7 text-center">
              <p>Fill in before you start:</p>
            </div>
            <div className="flex flex-col gap-y-4 pt-5">
              <Input
                placeholder="Full Name"
                className="h-[35px] w-[450px] px-2 border border-gray-300 focus:border focus:border-black focus:outline-none"
              />
              <Input
                placeholder="Email Address"
                className="h-[35px] w-[450px] px-2 border border-gray-300 focus:border focus:border-black focus:outline-none"
              />
              <Input
                placeholder="Phone Number"
                className="h-[35px] w-[450px] px-2 border border-gray-300 focus:border focus:border-black focus:outline-none"
              />
            </div>
            <div className="pt-5 text-[18px]">
              <h2>Select Category</h2>
            </div>
            <div>
              <Radio.Group
                onChange={onChange}
                value={value}
                style={{ marginBottom: 20 }}
              >
                <Menu
                  mode="inline"
                  selectedKeys={selectedKeys}
                  openKeys={stateOpenKeys}
                  onOpenChange={onOpenChange}
                  onSelect={onSelect}
                  style={{ width: 450 }}
                  items={items}
                />
              </Radio.Group>
            </div>
            <div className="text-[14px] text-center pb-[20px]">
              <p>
                By signing up, you agree to our
                <a className="text-[#ED2A26] px-1 hover:text-black hover:underline cursor-pointer">
                  Privacy Policy
                </a>{" "}
                and
                <a className="text-[#ED2A26] px-1 hover:text-black hover:underline cursor-pointer">
                  Terms and Conditions.
                </a>
              </p>
            </div>
            <div className="bg-[#ED2A26] text-center py-3 mt-5 text-white hover:bg-black cursor-pointer" onClick={handleAddCertificates3}>
              <button>Let's Go</button>
            </div>
            <div className="text-[14px] text-center pt-[50px] pb-[20px]">
              <p>
                Please be ready to answer
                <a className="text-[#ED2A26] px-1">20 questions</a>
                and
                <a className="text-[#ED2A26] px-1">1 hour</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationFillForm;
