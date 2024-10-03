import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEarning } from "../redux/actions/earning.action";


const Earning = ({ sidebar }) => {
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const { earning , loading } = useSelector((state) => state.earning);
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [totalEarning, setTotalEarning] = useState(0);
  const [totalEarningBeforeTax, setTotalEarningBeforeTax] = useState(0);
  const taxRate = 0.15; // ví dụ thuế là 15%

  useEffect(() => {
    if (userId) {
      dispatch(getEarning(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (earning) {
      const total = earning.reduce((acc, item) => acc + parseFloat(item.earning.replace('$', '')), 0);
      setTotalEarning(total.toFixed(2));
      const beforeTax = total / (1 + taxRate);
      setTotalEarningBeforeTax(beforeTax.toFixed(2));
    }
  }, [earning]);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const data1 = [
    { key: "1", country: "United States", price: "$48" },
    { key: "2", country: "Bulgaria", price: "$35" },
    { key: "3", country: "Dominica", price: "$25" },
    { key: "4", country: "Italy", price: "$18" },
    { key: "5", country: "Korea, Republic of", price: "$18" },
    { key: "6", country: "Malaysia", price: "$35" },
    { key: "7", country: "Netherlands", price: "$8" },
    { key: "8", country: "Thailand", price: "$5" },
  ];

 

  return (
    <div
      className={`mt-[100px] mr-5 ml-5 transition-all duration-1000 ${
        sidebar ? "ml-[50px]" : "ml-[-150px]"
      }`}
    >
      <div className="flex mb-5 gap-4">
        <FontAwesomeIcon icon={faDollarSign} className="size-6" />
        <h1 className="text-[20px]">Earning</h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 rounded-sm bg-[#333333] text-white font-medium p-6">
          <div className="flex flex-col justify-between h-full">
            <p className="text-[14px] font-normal text-center">
              Sales earnings this month (April), after edututs+ fees, & before
              taxes:
            </p>
            <p className="text-[30px] font-bold text-center">${totalEarning}</p>
          </div>
        </div>
        <div className="col-span-1 rounded-sm bg-[#333333] text-white font-medium p-6">
          <div className="flex flex-col justify-between h-full">
            <p className="text-[14px] font-normal text-center">Your balance:</p>
            <p className="text-[30px] font-bold text-center">${totalEarning}</p>
          </div>
        </div>
        <div className="col-span-1 rounded-sm bg-[#333333] text-white font-medium p-6">
          <div className="flex flex-col justify-between h-full">
            <p className="text-[14px] font-normal text-center">
              Total value of your sales, before taxes:
            </p>
            <p className="text-[30px] font-bold text-center">${totalEarningBeforeTax}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-12">
        <div className="col-span-1 bg-white h-[360px]">
          <table className="min-w-full bg-white shadow-md rounded-sm">
            <thead>
              <tr className="border-b bg-blue-gray-100 text-gray-700 text-[16px] font-medium">
                <th className="py-3 px-4 text-left">Your Top Countries</th>
                <th className="py-3 px-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="text-blue-gray-900">
              {data1.map((item) => (
                <tr
                  key={item.key}
                  className="border-b border-blue-gray-200 text-[14px] font-medium"
                >
                  <td className="py-3 px-4 text-[#686f7a]">{item.country}</td>
                  <td className="py-3 px-4 text-right text-[#686f7a]">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className={`col-span-2 bg-[#F7F7F7] transition-all duration-1000 ${
            sidebar ? "w-[800px]" : "w-[930px]"
          }`}
        >
          <div className="mb-2">
            <div className="mb-[30px] flex gap-3">
              <div
                className="relative inline-block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  id="dropdownHoverButton"
                  className="text-black bg-white rounded-sm shadow-sm hover:outline-red-100 text-sm px-8 py-2.5 text-center inline-flex items-center font-normal"
                  type="button"
                >
                  Total Sales
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    id="dropdownHover"
                    className="absolute z-10 bg-white  rounded-sm w-32  outline outline-1 outline-offset-0  hover:outline-blue-100 text-black"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <li>
                        <p className="block px-4 py-2 text-black hover:bg-gray-100 font-medium">
                          Total Sales
                        </p>
                      </li>
                      <li>
                        <p className="block px-4 py-2 text-black hover:bg-gray-100">
                          2020
                        </p>
                      </li>
                      <li>
                        <p className="block px-4 py-2 text-black hover:bg-gray-100">
                          2021
                        </p>
                      </li>
                      <li>
                        <p className="block px-4 py-2 text-black hover:bg-gray-100">
                          2022
                        </p>
                      </li>
                      <li>
                        <p className="block px-4 py-2 text-black hover:bg-gray-100">
                          2023
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex gap-2 pt-2">
                <div>
                  <a href="#" className="text-blue-400 hover:text-gray-400">
                    All time /
                  </a>
                </div>
                <div>
                  <a href="#" className="text-blue-400 hover:text-gray-400">
                    2020 /
                  </a>
                </div>
                <div>
                  <p>April</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <table className="min-w-full shadow-sm rounded-xl">
              <thead className="bg-red-200">
                <tr className="text-gray-700 border-b text-[14px] font-medium">
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Item Sales Count</th>
                  <th className="py-3 px-4 text-left">Earning</th>
                  <th className="py-3 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {earning.map((earning,index) => (
                  <tr
                    key={index}
                    className="border-b border-blue-gray-200 text-[14px] font-normal"
                  >
                    <td className="py-3 px-4">{earning.date}</td>
                    <td className="py-3 px-4">{earning.itemsalecount}</td>
                    <td className="py-3 px-4">${earning.earning}</td>
                  </tr>
                ))}
                <tr className="border-b border-blue-gray-200 bg-[#333333] text-white">
                  <td className="py-3 px-4 font-medium">Total</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4 font-medium">${totalEarning}</td>
                  <td className="py-3 px-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
