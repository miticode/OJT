import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUserRole } from '../redux/actions/auth.action';

const logoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg';
const signBackgroundUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/sign.svg';
const signLogoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/sign_logo.png';

const SignupStep = () => {
  const [isInstructor, setIsInstructor] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [bio, setBio] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false); // State for signup success notification
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!users || users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users]);

  const goToLogin = () => {
    navigate('/login');
  };

  const handleSignup = async () => {
    setLoading(true);

    try {
      const maxId = getMaxId(users);
      const role = isInstructor ? 'teacher' : 'student';
      await dispatch(updateUserRole(maxId, role));
      setSignupSuccess(true); // Set signup success state
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Failed to update user role:', error);
    }
  };

  const getMaxId = (users) => {
    const ids = users.map(user => parseInt(user.id));
    return Math.max(...ids);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src={signBackgroundUrl} alt="Sign Background" className="w-full h-full object-cover opacity-5" />
      </div>

      <div className="z-10 relative flex flex-col items-center py-8 max-w-md w-full">
        <img src={logoUrl} alt="Cursus Logo" className="w-32 h-8" />

        <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-full">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsInstructor(true)}
              className={`py-2 px-4 font-semibold ${isInstructor ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
            >
              {isLoading && isInstructor ? 'Signing Up...' : 'Instructor Sign Up Now'}
            </button>
            <button
              onClick={() => setIsInstructor(false)}
              className={`py-2 px-4 font-semibold ${!isInstructor ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
            >
              {isLoading && !isInstructor ? 'Signing Up...' : 'Student Sign Up Now'}
            </button>
          </div>

          {signupSuccess && (
            <p className="text-green-500 text-center my-2">Account created successfully!</p>
          )}

          {isInstructor ? (
            <div>
              <h2 className="text-center text-sm font-thin text-gray-900 mb-4">Sign Up and Create Course!</h2>
              <div className="mb-4">
                <select className="w-full px-3 py-2 border rounded">
                  <option>Select Category</option>
                  <option>Development</option>
                  <option>Business</option>
                  <option>Finance & Accounting</option>
                  <option>IT & Software</option>
                  <option>Office Productivity</option>
                  <option>Personal Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Lifestyle</option>
                  <option>Photography</option>
                  <option>Health & Fitness</option>
                  <option>Music</option>
                  <option>Teaching & Academics</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  id="description"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Write a little description about you..."
                  value={bio}
                  onChange={handleBioChange}
                ></textarea>
              </div>
              <p className="text-gray-500 mb-4">Your biography should have at least 10 characters.</p>
              <button
                onClick={handleSignup}
                className={`w-full bg-red-500 text-white py-2 rounded ${bio.length < 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={bio.length < 10 || isLoading || signupSuccess}
              >
                {isLoading ? 'Signing Up...' : (signupSuccess ? 'Signed Up!' : 'Instructor Sign Up Now')}
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-center text-sm font-thin text-gray-900 mb-4">Sign Up and Start Learning!</h2>
              <div className="mb-4">
                <textarea
                  id="description"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Write a little description about you..."
                  value={bio}
                  onChange={handleBioChange}
                ></textarea>
              </div>

              <p className="text-xxs font-thin text-gray-500 mb-4">Your biography should have at least 10 characters.</p>
              <button
                onClick={handleSignup}
                className={`w-full bg-red-500 text-white py-2 rounded ${bio.length < 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={bio.length < 10 || isLoading || signupSuccess}
              >
                {isLoading ? 'Signing Up...' : (signupSuccess ? 'Signed Up!' : 'Student Sign Up Now')}
              </button>
            </div>
          )}

          <p className="text-center my-4 text-xs">
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={goToLogin}>
              Log In
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 text-center mb-auto z-10">
        <img src={signLogoUrl} alt="Sign Logo" className="h-10 inline-block mr-2" />
        <p className="text-sm inline-block">© 2024 Cursus. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default SignupStep;
