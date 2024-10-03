import { CreditCardOutlined } from "@ant-design/icons";
import { Select } from "antd";
import React from "react";

const Credits = ({ sidebar }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    
    <div
      className={`mt-20 ml-5 bg-[#F7F7F7] transition-all duration-700 ${
        sidebar ? "" : ""
      }`}
    >
      <div className="flex gap-5 items-center  ">
        <CreditCardOutlined className="text-3xl" />
        <h3 className="text-2xl mt-2">Credits</h3>
      </div>
      {/* ///////////////////////////////// */}
      <div
        className={` flex gap-6 mt-10 ${sidebar ? "w-[1400px]" : "w-[1640px]"}`}
      >
        <div
          className={`bg-[#FFFFFF] border border-solid h-[240px] ${
            sidebar ? "w-[520px]" : "w-[700px]"
          }`}
        >
          <h3 className="p-5 border border-solid mb-0">Added Credits</h3>
          <div className="p-5 border-l-[1px] border-r-[1px] border-solid">
            <h3 className="text-[#B2B2B2] text-2xl">$100</h3>
            <h1 className="text-sm font-semibold">via Mastercard </h1>
          </div>
          <div className="flex gap-1 p-5 border border-solid text-sm">
            <div>Your payout will be processed on</div>
            <h1> purchase courses</h1>
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="flex-1 flex-col h-auto w-[500px] ">
        <div
        className={`bg-[#FFFFFF]  border border-solid  ${
          sidebar ? "flex-1" : "flex-1"
        }`}
      >
        <h3 className="p-5 border border-solid mb-0">Add Credit Balance</h3>
       <div>
        <div className="flex flex-col p-5 ">
          <h1>Add Balance</h1>
          <div className="flex">
            <div className="p-3 font-medium border-t border-b border-l ">$</div>
            <input placeholder="0" className="  w-[770px] p-3 border-t border-b border-r border-solid"/>
          </div>
        </div>
        <div className="flex  p-5  gap-3">
          <div className="flex flex-col w-[400px] ">
            <h1>Holder Name</h1>
            <input placeholder="Enter Holder Name" className="border border-solid p-3"/>
          </div>
          <div className="flex flex-col w-[390px]">
            <h1>Card Number</h1>
            <input placeholder="Card #"  className="border border-solid p-3"/>
          </div>
        </div>
        <div className="flex justify-between p-5">
          <div className="flex flex-col">
            <h1>Expiration Month</h1>
            <Select
      defaultValue="August"
      style={{
        width: 200,
        height: 45,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'January',
          label: 'January',
        },
        {
          value: 'Feburary',
          label: 'February',
        },
        {
          value: 'March',
          label: 'March',
        },
        {
          value: 'May',
          label: 'May',
          
        },
        {
          value: 'June',
          label: 'June',
          
        },
        {
          value: 'July',
          label: 'July',
          
        },
        {
          value: 'August',
          label: 'August',
          
        },
        {
          value: 'September',
          label: 'September',
          
        },
        {
          value: 'October',
          label: 'October',
          
        },
        {
          value: 'November',
          label: 'November',
          
        },
        {
          value: 'December',
          label: 'December',
          
        },
      ]}
    />
          </div>
          <div className="flex flex-col">
            <h1>Expiration Year</h1>
            <input placeholder="Year" className="p-3 border border-solid"/>
          </div>
          <div className="flex flex-col " >
            <h1>Expiration Year</h1>
            <input placeholder="cvc" className="p-3 border border-solid"/>
          </div>
        </div>
       </div>
        <div className=" p-5 border border-solid ">
          <button className="bg-[#ED2A26] hover:bg-black p-3 w-[800px] text-white font-medium rounded-sm">
            Add Credit
          </button>
        </div>
      </div>
         <div>
         <div className="flex justify-between p-3 bg-[#FFECEC]">
            <h1>Amount</h1>
            <h1>Credit Method</h1>
            <h1>	Date Processed</h1>
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


      </div>
      <div
        className={`bg-[#FFFFFF]  border border-solid mt-[-350px] ${
          sidebar ? "w-[520px]" : "w-[700px]"
        }`}
      >
        <h3 className="p-5 border border-solid mb-0">Saved Cards</h3>
        <div className="p-5 border-l-[1px] border-r-[1px] border-solid">
          <img
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/Mastercard.svg"
            alt="svg"
            width={90}
          />
          <div className="flex gap-1 py-2">
            <h1>Added:</h1>
            <div> 25 Mar 2020</div>
          </div>
        </div>
        <div className=" p-5 border border-solid ">
          <button className="bg-[#ED2A26] hover:bg-black p-3 w-[475px] text-white font-medium rounded-sm">
            Change Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Credits;
