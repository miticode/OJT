import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { signup, checkEmail } from "../redux/actions/auth.action";

const logoUrl = "https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg";
const signBackgroundUrl = "https://gambolthemes.net/html-items/cursus-new-demo/images/sign.svg";
const signLogoUrl = "https://gambolthemes.net/html-items/cursus-new-demo/images/sign_logo.png";

const SignupScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { emailExists, loading: checkingEmail } = useSelector((state) => state.auth);

  const handleSignup = async (values) => {
    setLoading(true);
    try {
      // Check if email already exists
      await dispatch(checkEmail(values.email));

      if (emailExists) {
        setLoading(false);
        alert("Email already exists. Please enter a different email.");
        return;
      }

      // Proceed with signup if email is not taken
      await dispatch(signup(values.fullname, values.email, values.password));
      setLoading(false);
      navigate("/signupstep");
    } catch (error) {
      setLoading(false);
      console.error("Signup error:", error);
    }
  };

  const validateEmail = (rule, value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!value || regex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a valid Gmail address!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={signBackgroundUrl}
          alt="Sign Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="z-10 relative flex flex-col items-center py-8 max-w-md w-full">
        <img src={logoUrl} alt="Cursus Logo" className="w-32 h-8" />

        <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-full">
          <h2 className="text-2xl font-bold mb-2 text-center text-black">
            Welcome to Cursus
          </h2>
          <p className="text-center mb-3 text-sm">
            Sign Up and Start Learning!
          </p>

          <Form onFinish={handleSignup} className="w-full">
            <Form.Item
              name="fullname"
              rules={[
                { required: true, message: "Please input your full name!" },
                { min: 6, message: "Full name must be at least 6 characters!" }
              ]}
            >
              <Input placeholder="Full Name" className="w-full" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { validator: validateEmail }
              ]}
            >
              <Input placeholder="Email Address" className="w-full" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 6, message: "Password must be at least 6 characters!" }
              ]}
            >
              <Input.Password placeholder="Password" className="w-full" />
            </Form.Item>

            <Form.Item>
              <Checkbox>
                <span className="text-xs">
                  I'm in for emails with exciting discounts and personalized
                  recommendations
                </span>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading || checkingEmail}
                block
                className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Next
              </Button>
            </Form.Item>
          </Form>

          <p className="text-center my-2 text-xs">
            <span className="text-black">By signing up, you agree to our</span>{" "}
            <Link to="/term" className="text-red-500 ml-1">
              Terms of Use
            </Link>{" "}
            <span className="text-black">and</span>{" "}
            <Link to="/term" className="text-red-500 ml-1">
              Privacy Policy
            </Link>
            <span className="text-black">.</span>
          </p>

          <p className="text-center my-4 text-xs">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>
              Log In
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 text-center mb-auto z-10">
        <img
          src={signLogoUrl}
          alt="Sign Logo"
          className="h-10 inline-block mr-2"
        />
        <p className="text-sm inline-block">
          © 2024 Cursus. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
