import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { CiCircleCheck } from 'react-icons/ci';
import { verifyCourse } from '../redux/actions/verification.action';

const Verification = () => {
  const dispatch = useDispatch();
  const { verifiedCourse, error } = useSelector((state) => state.verification);
  const [courseTitle, setCourseTitle] = useState('');
  const [document, setDocument] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyCourse(courseTitle));
  };

  return (
    <div>
      <div className="mt-20">
        <div className="flex items-center">
          <CiCircleCheck className="text-2xl mr-2 ml-7"/> 
          <h1 className="text-2xl mt-1">Verification</h1>
        </div>
      </div>

      {!verifiedCourse ? (
        <div>
          {/* Verification Form Section */}
          <div className="bg-white-100 shadow-md p-12 mt-4 w-[70rem] ml-[12rem]">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Verify Your ID
              </h3>
              <div className="mb-4">
                <label htmlFor="course-title" className="block text-sm font-medium text-gray-700">
                  Course Title*
                </label>
                <input
                  type="text"
                  id="course-title"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Enter course title"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="document" className="block text-sm font-medium text-gray-700">
                  Upload Document*
                </label>
                <input
                  type="file"
                  id="document"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                  onChange={(e) => setDocument(e.target.files[0])}
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 py-2 px-3 border border-transparent rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm w-full"
              >
                Verify Course
              </button>
            </form>

            {/* Display error message */}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      ) : (
        <div>
          {/* Display success message and sections */}
          <img
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/verified-account.svg"
            alt="Verification Logo"
            className="w-64 h-64 ml-[40rem] mt-30"
          />

          <div>
            <h3 className="text-4xl font-bold text-black-600 mt-9 ml-[35rem]">
              Verification with Edututs+
            </h3>
          </div>

          <div>
            <p className="text-gray-600 text-l ml-[14rem] mt-10">
              Praesent sed sapien gravida, tempus nunc nec, euismod turpis. Mauris quis scelerisque arcu. Quisque et aliquet nisl, id placerat est. Morbi quis imperdiet nulla.
            </p>
          </div>

          {/* Subscription Requirements Section */}
          <div className="grid grid-cols-2 gap-2 ml-[11rem]">
            {/* Box 1 */}
            <div className="bg-white shadow-md rounded-lg p-5 mt-5 w-85">
              <div className="flex items-center space-x-4 ml-[1rem]">
                <div className="flex-1 flex items-center">
                  <FontAwesomeIcon icon={faClock} className="text-red-500 w-9 h-9" />
                  <div className="ml-4 p-6">
                    <p className="text-l font-medium">14 subscribers</p>
                    <p className="text-gray-600 text-l">500 required</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white shadow-md rounded-lg p-5 mt-5 w-85">
              <div className="flex items-center space-x-4 ml-[1rem]">
                <div className="flex-1 flex items-center">
                  <FontAwesomeIcon icon={faClock} className="text-red-500 w-9 h-9" />
                  <div className="ml-4 p-6">
                    <p className="text-l font-medium">10 public watch hours</p>
                    <p className="text-gray-600 text-l">1,500 required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <CiCircleCheck className="text-2xl mr-2 ml-[35rem] mt-10" />
            <p className="text-gray-600 text-l mt-10 mb-2">
              We'll send you an email when you're eligible to apply
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verification;
