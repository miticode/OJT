import React from "react";

const Paid = ({ sidebar, courseData, setCourseData, setCurrent }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
    console.log(value);
    console.log(value);
  };
  return (
    <div className="h-[300px]">
      <div className="-ml-[100px]">
        <p className="text-[14px] font-semibold">Regular Price*</p>
        <div className="flex items-center">
          <input
            name="price"
            type="number"
            placeholder="$0"
            className="border w-[360px] pl-3 h-10 object-cover"
            onChange={handleChange}
            value={courseData.price}
          />
          <p className="bg-[#F7F7F7] ml-[-45px] mt-2 p-2 rounded-sm text-[12px] font-bold">
            USD
          </p>
        </div>
      </div>
      <div className="-ml-[100px] mt-5">
        <p className="text-[14px] font-semibold">Discount Price*</p>
        <div className="flex items-center">
          <input
            name="discountPrice"
            type="number"
            placeholder="$0"
            className="border w-[360px] pl-3 h-10 object-cover"
            value={courseData.discountPrice}
            onChange={handleChange}
          />
          <p className="bg-[#F7F7F7] ml-[-45px] mt-2 p-2 rounded-sm text-[12px] font-bold">
            USD
          </p>
        </div>
      </div>
    </div>
  );
};
export default Paid;
