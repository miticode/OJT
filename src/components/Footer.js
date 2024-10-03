import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGooglePlusG,
  faLinkedin,
  faInstagram,
  faYoutube,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ sidebar }) => {
  const items = [
    { label: <a href="https://www.antgroup.com">English</a>, key: "0" },
    { label: <a href="https://www.aliyun.com">Danish</a>, key: "1" },
    { label: <a href="https://www.antgroup.com">Spanish</a>, key: "2" },
    { label: <a href="https://www.aliyun.com">Chinese</a>, key: "3" },
    { label: <a href="https://www.antgroup.com">French</a>, key: "4" },
    { label: <a href="https://www.aliyun.com">Greek</a>, key: "5" },
  ];

  return (
    <div className="relative bg-[#333333] w-[100%] mt-10">
      <div
        className={`relative ${
          sidebar ? "ml-64" : ""
        } transition-all duration-700`}
      >
        <div className="footer_section_padding relative bg-[#333333]">
          <div className=" flex gap-[170px] justify-center items-center flex-row flex-wrap w-full text-left mb-[10px] mt-[10px] py-[20px] ml-[-70px]">
            <div className="footer-links-div w-[60px] ml-[5px] justify-center flex-col text-white text-[14px]">
              <a href="/about">
                <p>About</p>
              </a>
              <a href="/blog">
                <p>Blog</p>
              </a>
              <a href="/careers">
                <p>Careers</p>
              </a>
              <a href="/press">
                <p>Press</p>
              </a>
            </div>
            <div className="footer-links-div w-[120px] m-[10px] justify-center flex-col text-white text-[14px]">
              <a href="/help">
                <p>Help</p>
              </a>
              <a href="/advertise">
                <p>Advertise</p>
              </a>
              <a href="/developers">
                <p>Developers</p>
              </a>
              <a href="/contactUs">
                <p>Contact Us</p>
              </a>
            </div>
            <div className="footer-links-div w-[120px] mr-[10px] justify-center flex-col text-white text-[14px]">
              <a href="/copyrightPolicy">
                <p>Copyright Policy</p>
              </a>
              <a href="/terms">
                <p>Terms</p>
              </a>
              <a href="/privacyPolicy">
                <p>Privacy Policy</p>
              </a>
              <a href="/sitemap">
                <p>Sitemap</p>
              </a>
            </div>
            <div className="footer-links-div w-[150px]">
              <button className="bg-red-600 hover:bg-red-800 text-white flex text-[14px] rounded-sm px-5 py-3 font-medium">
                Teach On Curcus
              </button>
              <button className="text-white flex text-[14px] px-4 py-0 mt-[20px] border border-white rounded-sm">
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <div className="gap-[10px] flex">
                        <FontAwesomeIcon icon={faGlobe} className="mt-[10px]" />
                        <p className="mt-[8px] font-medium">Language</p>
                        <DownOutlined />
                      </div>
                    </Space>
                  </a>
                </Dropdown>
              </button>
            </div>
          </div>
          <hr className="border-[#444444] w-[90%] ml-[50px] mr-[80px] " />
          <div className="flex justify-center  gap-[620px]  mt-4 p-4 ml-[-1px] ">
            <div className="flex items-center text-white text-sm">
              <img
                className="w-8 mr-4 mb-3"
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo1.svg"
                alt="Cursus Logo"
              />
              <p>
                &copy; {new Date().getFullYear()} Cursus. All Rights Reserved.
              </p>
            </div>
            <div className="flex space-x-3 ">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white w-6 h-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300 "
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white w-6 h-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <FontAwesomeIcon
                icon={faGooglePlusG}
                className="text-white w-6 h-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white w-6 h-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white w-6 h-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white w-6 h-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
              />
              <FontAwesomeIcon
                icon={faPinterestP}
                className="text-white w-6 h-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
