import { ShoppingCartOutlined } from "@ant-design/icons";
import { faStar, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteShoppingCartItem,
  getShoppingCart,
} from "../redux/actions/course.action";
import { Image } from "react-bootstrap";

const ShoppingCart = () => {
  const CourseCard = ({
    courseId,
    thumbnail,
    rate,
    title,
    category,
    instructor,
    hours,
    discountPrice,
    price,
    views,
    date,
    index,
    hoveredCourse,
    handleMouseEnter,
    handleMouseLeave,
    handleRemoveCourse,
  }) => (
    <div
      className="flex border p-[10px] rounded-sm shadow-md relative"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-[350px] h-full">
        <div>
          <Image
            src={thumbnail || ""}
            className="w-[350px] h-[180px] object-cover rounded-sm"
            alt={title}
          />
        </div>
        <span className="absolute top-2 left-2 bg-yellow-400 text-white text-sm font-medium gap-2 px-3 py-1 rounded">
          <FontAwesomeIcon icon={faStar} />
          {rate}
        </span>
        {/* Replace with actual logic for BESTSELLER */}
        <span className="absolute top-2 right-0 bg-[#fa8305] text-white text-[10px] font-medium text-xs px-2 py-1 rounded-sm">
          BESTSELLER
        </span>
        <span className="absolute bottom-2 right-2 bg-[#505050] text-white text-[12px] font-medium px-[10px] py-[5px] rounded-[3px]">
          {hours} hours
        </span>
      </div>
      <div className="ml-4 flex flex-col justify-between w-[60%]">
        <div className="flex justify-between items-center mt-2">
          <span className="text-[#686f7a] text-[12px]">
            {views} • {date}
          </span>
        </div>
        <div>
          <h2 className="text-[16px] font-medium mt-2">{title}</h2>
          <p className="text-[#686f7a] font-normal text-[13px] pt-[2px]">
            {category}
          </p>
        </div>
        <div className="flex justify-between items-center mb-10">
          <p className="text-gray-500 text-[14px]">
            By{" "}
            <span className="text-[14px] text-black font-medium">
              {instructor}
            </span>
          </p>
          <div
            className={`flex  ${
              index === hoveredCourse ? "block ml-[250px]" : "hidden"
            }`}
          >
            <button onClick={() => handleConfirmDelete(courseId)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
          <div>
            <div className="text-[18px] font-bold">${price}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const userId = useSelector((state) => state.auth.id);
  const shoppingCourses = useSelector(
    (state) => state.enrolledCourses.shoppingCourses
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout", { state: { totalPrice } });
  };

  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (userId) {
      dispatch(getShoppingCart(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    const newTotal = shoppingCourses.reduce((total, course) => {
      const price = course.price ? course.price.toString() : "0";
      const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, "")) || 0;

      return total + numericPrice;
    }, 0);
    setTotalPrice(newTotal);
  }, [shoppingCourses]);

  const handleConfirmDelete = (id) => {
    dispatch(deleteShoppingCartItem(userId, id));
  };

  const handleBackClick = () => {
    navigate("/home");
  };

  const handleMouseEnter = (index) => {
    setHoveredCourse(index);
  };

  const handleMouseLeave = () => {
    setHoveredCourse(null);
  };

  return (
    <div>
      <div className="p-4 z-50 flex items-center justify-between bg-white h-[60px] w-full fixed top-0 left-0 ">
        <button
          onClick={handleBackClick}
          className="bg-white text-black border border-black py-1.5 px-4 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 text-base"
        >
          Back to Cursus
        </button>
        <button onClick={handleBackClick} className="ml-22">
          <img
            className="w-[120px] h-[30px]"
            src={require("../assets/logo.png")}
            alt="hehe"
          />
        </button>
        <img
          className="w-[40px] h-[40px] rounded-full border border-gray-300 ml-8 "
          src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
          alt="Cursus"
        />
      </div>
      {/* ///////////////////////////////// */}
      <div className="pt-[60px] flex flex-col gap-8 bg-[#FFFFFF] pl-80">
        <div className="flex mt-10 text-black ">
          <h3 onClick={handleBackClick} className="cursor-pointer">
            Home
          </h3>
          <div>/</div>
          <div>Shopping Cart</div>
        </div>
        <h1 className="font-semibold text-2xl text-black">Shopping Cart</h1>
      </div>

      <div className="bg-[#F7F7F7] flex gap-10 justify-center pt-20">
        <div className="w-[800px]">
          <div className="col-span-2 space-y-6 text-black">
            {shoppingCourses && shoppingCourses.length > 0 ? (
              shoppingCourses.map((course, index) =>
                course ? (
                  <CourseCard
                    key={course.id}
                    courseId={course.id}
                    thumbnail={course.thumbnail}
                    rate={course.rate}
                    title={course.title}
                    category={course.category}
                    instructor={course.instructor}
                    hours={course.hours}
                    price={course.price}
                    views={course.views}
                    date={course.date}
                    index={index}
                    discountPrice={course.discountPrice}
                    hoveredCourse={hoveredCourse}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    handleConfirmDelete={handleConfirmDelete}
                  />
                ) : null
              )
            ) : (
              <div>No courses found in your shopping cart.</div>
            )}
          </div>
        </div>
        {/* ///////////////////////////////// */}
        <div className="w-[400px] p-5 flex flex-col gap-5 bg-white h-[550px]">
          <h3 className="text-2xl text-black">Total</h3>
          <hr className="h-[2px] bg-[#ED2A26] w-14" />
          <div className="flex items-center justify-between ">
            <h3 className="text-xl text-black">Original Price</h3>
            <h5 className="text-xl">${totalPrice.toFixed(2)}</h5>
          </div>
          <hr className="bg-gray-400" />
          <div className="flex items-center justify-between">
            <h3 className="text-xl ">Discount Price</h3>
            <h5 className="text-xl">$0</h5>
          </div>
          <hr />
          <div className="flex items-center justify-between text-black">
            <h3 className="text-2xl">Total</h3>
            <h3 className="text-2xl">${(totalPrice - 0).toFixed(2)}</h3>
          </div>
          <hr />
          <div className="text-black">Learn now is applied</div>
          <div className="flex justify-center">
            <input
              placeholder="Enter Coupon Code"
              className="p-3 border border-solid"
            />
            <button className="bg-[#ED2A26] hover:bg-black p-3 rounded-sm text-white font-medium">
              Apply
            </button>
          </div>
          <button
            className="bg-[#ED2A26] hover:bg-black p-3 rounded-sm text-white font-medium "
            onClick={handleCheckout}
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
