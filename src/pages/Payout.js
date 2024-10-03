import { CreditCardOutlined } from "@ant-design/icons";
import React from "react";

const Payout = ({ sidebar }) => {
  return (
    <div
      className={`mt-20 ml-5 bg-[#F7F7F7] transition-all duration-700 ${
        sidebar ? "" : ""
      }`}
    >
      <div className="flex gap-5 items-center  ">
        <CreditCardOutlined className="text-3xl" />
        <h3 className="text-2xl mt-2"> Payout</h3>
      </div>
      {/* ///////////////////////////////// */}
      <div
        className={` flex gap-6 mt-10 ${sidebar ? "w-[1400px]" : "w-[1640px]"}`}
      >
        <div
          className={`bg-[#FFFFFF] border border-solid ${
            sidebar ? "w-[520px]" : "w-[700px]"
          }`}
        >
          <h3 className="p-5 border border-solid mb-0">Next payout</h3>
          <div className="p-5 border-l-[1px] border-r-[1px] border-solid">
            <h3 className="text-[#B2B2B2] text-2xl">$4568.50</h3>
            <h1 className="text-sm font-semibold">via Payoneer </h1>
          </div>
          <div className="flex gap-1 p-5 border border-solid text-sm">
            <div>Your payout will be processed on</div>
            <h1>April 15, 2020</h1>
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="flex-1 flex-col h-auto w-[500px] ">
          <div className="flex justify-between p-3 bg-[#FFECEC]">
            <h1>Amount</h1>
            <h1>Payout Method</h1>
            <h1>Date Processed</h1>
          </div>
          <div className="flex justify-between p-3 border-b-[1px]">
            <div>$2550.54</div>
            <div>Payoneer</div>
            <div>15 Mar 2020</div>
          </div>
          <div className="flex justify-between p-3 border-b-[1px]">
            <div>$1950.14</div>
            <div>Payoneer</div>
            <div>15 Feb 2020</div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#FFFFFF]  border border-solid mt-10 ${
          sidebar ? "w-[520px]" : "w-[700px]"
        }`}
      >
        <h3 className="p-5 border border-solid mb-0">Payout account</h3>
        <div className="p-5 border-l-[1px] border-r-[1px] border-solid">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/11/Payoneer_logo_logotype.png"
            alt="svg"
            width={90}
          />
          <div className="flex gap-1 py-2">
            <h1>Added:</h1>
            <div> 01 Mar 2020</div>
          </div>
        </div>
        <div className=" p-5 border border-solid ">
          <button className="bg-[#ED2A26] hover:bg-black p-3 w-[475px] text-white font-medium rounded-sm">
            Set Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payout;
