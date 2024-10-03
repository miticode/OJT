import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StarOutlined, SearchOutlined } from '@ant-design/icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllReviews, searchReview } from '../redux/actions/review.action';
import { Spinner, Alert } from 'react-bootstrap';

const Review = ({ sidebar }) => {
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
      <div className={`mt-[100px] ml-6 text-black text-xl ${sidebar ? "w-[1200px]" : "w-[1400px]"}`}>
        <h1><StarOutlined /> All Review</h1>
      </div>
      <div className="flex gap-x-10 justify-center mt-8 ml-6">
        <div className={`bg-white h-[320px] mt-5 p-4 ${sidebar ? "w-[600px]" : "w-[700px]"}`}>
          <div className='text-xl mt-4 ml-1'>
            <h1>All Student Feedback</h1>
          </div>
          <div className={`h-12 bg-[#F7F7F7] border ${sidebar ? "w-[550px]" : "w-[650px]"}`}>
            <div className='ml-6 pt-3 text-yellow-500 text-[20px] flex gap-1'>
              <h1 className='text-black mr-2'>4.6</h1>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <p className='text-black text-[16px] ml-2'>All Rating</p>
            </div>
          </div>
          <div className='mt-5'>
            <div className='flex'>
              <div className='relative w-full h-6 rounded-sm'>
                <div className='absolute bg-red-500 w-[75%] h-6 z-10'></div>
                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
              </div>
              <div className='ml-6 text-yellow-500 text-[25px] flex gap-1'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon className='text-[#F7F7F7]' icon={faStar} />
                <p className='text-black text-[20px] ml-2'>70%</p>
              </div>
            </div>
            <div className='flex'>
              <div className='relative w-full h-6 rounded-sm'>
                <div className='absolute bg-red-500 w-[37.5%] h-6 z-10'></div>
                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
              </div>
              <div className='ml-6 text-yellow-500 text-[25px] flex gap-1'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <div className='text-[#F7F7F7] flex gap-1'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className='text-black text-[20px] ml-2'>40%</p>
              </div>
            </div>
            <div className='flex'>
              <div className='relative w-full h-6 rounded-sm'>
                <div className='absolute bg-red-500 w-[5%] h-6 z-10'></div>
                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
              </div>
              <div className='ml-6 text-yellow-500 text-[25px] flex gap-1'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <div className='text-[#F7F7F7] flex gap-1'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className='text-black text-[20px] ml-2 mt-1'>5%</p>
              </div>
            </div>
            <div className='flex'>
              <div className='relative w-full h-6 rounded-sm'>
                <div className='absolute bg-red-500 w-0 h-6 z-10'></div>
                <div className='absolute bg-[#F7F7F7] w-full h-6'></div>
              </div>
              <div className='ml-6 text-[#F7F7F7] text-[25px] flex gap-1'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <p className='text-black text-[20px] ml-2'>0%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`p-4 ${sidebar ? "w-[600px]" : "w-[700px]"}`}>
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
                <button 
                  className='bg-red-500 p-1.5 hover:bg-[#333333] transition duration-300'
                >
                  <SearchOutlined style={{ color: 'white', fontSize: '16px' }} />
                </button>

              </div>
            </div>
          
          <div>
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
    </div>
  );
};

export default Review;
