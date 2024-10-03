import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { login } from "../redux/actions/auth.action";
import { socialLogin } from '../authSlice'; 

import Cookies from "js-cookie";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaEnvelope,
  FaKey,
} from "react-icons/fa";

const logoUrl =
  "https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg";
const signBackgroundUrl =
  "https://gambolthemes.net/html-items/cursus-new-demo/images/sign.svg";
const signLogoUrl =
  "https://gambolthemes.net/html-items/cursus-new-demo/images/sign_logo.png";

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [form] = Form.useForm(); // Khởi tạo biến form
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      form.setFieldsValue({
        email: savedEmail,
        password: savedPassword,
      });
      setRememberMe(true);
    }
  }, [form]);

  const handleLogin = async (values) => {
    setLoading(true);
    await dispatch(login(values.email, values.password));
    setLoading(false);

    if (Cookies.get("token")) {
      Cookies.set("token", token, { expires: 7 });
      if (rememberMe) {
        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
      navigate("/home");
    }
  };

  const handleSocialLogin = async (providerName) => {
    setLoading(true);
    try {
      // Gửi yêu cầu đăng nhập qua mạng xã hội
      const resultAction = await dispatch(socialLogin({ providerName })).unwrap();
      if (resultAction) {
        const { token, user } = resultAction;
  
        // Lưu token vào Cookies
        Cookies.set("token", token, { expires: 7 });
  
        // Lưu thông tin người dùng vào localStorage hoặc Redux store nếu cần
        localStorage.setItem("user", JSON.stringify(user));
  
        // Chuyển hướng đến trang home
        navigate("/home", { replace: true });
      }
    } catch (error) {
      console.error("Social login error:", error);
    } finally {
      setLoading(false);
    }
  };
  
  

  const goToSignUp = () => {
    navigate("/signup");
  };
  

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 relative">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={signBackgroundUrl}
          alt="Sign Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="z-10 relative flex flex-col items-center py-8 max-w-md w-full">
        <img
          src={logoUrl}
          alt="Cursus Logo"
          style={{ width: "135px", height: "32px" }}
        />
        {/* Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-8 w-full">
          <h2 className="text-2xl font-bold mb-2 text-center text-black">
            Welcome Back
          </h2>
          <p className="text-center mb-3 text-sm">
            Log In to Your Cursus Account!
          </p>

          <div className="flex flex-col space-y-3 mb-4">
            <Button
              className="text-white flex items-center justify-center"
              style={{ backgroundColor: "#3B5998", height: "40px" }}
              onClick={() => handleSocialLogin("Facebook")}
            >
              <FaFacebook className="mr-2" /> Continue with Facebook
            </Button>
            <Button
              className="text-white flex items-center justify-center"
              style={{ backgroundColor: "#1DA1F2", height: "40px" }}
              onClick={() => handleSocialLogin("Twitter")}
            >
              <FaTwitter className="mr-2" /> Continue with Twitter
            </Button>
            <Button
              className="text-white flex items-center justify-center"
              style={{ backgroundColor: "#34A853", height: "40px" }}
              onClick={() => handleSocialLogin("Google")}
            >
              <FaGoogle className="mr-2" /> Continue with Google
            </Button>
          </div>

          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

          <Form form={form} onFinish={handleLogin} className="w-full">
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
                {
                  pattern: /^[\w-\.]+@gmail\.com$/,
                  message: 'Please enter a valid Gmail address!',
                },
              ]}
            >
              <Input
                prefix={<FaEnvelope className="mr-2 text-gray-500" />}
                placeholder="Gmail Address"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<FaKey className="mr-2 text-gray-500" />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              >
                Remember Me
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                style={{
                  backgroundColor: "#FF0000",
                  borderColor: "#FF0000",
                  color: "#FFFFFF",
                }}
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>

          <p className="text-center my-2">
            <span className="text-black">or </span>
            <Link to="/forgot-password" className="text-red-500">
              Forgot Password
            </Link>{" "}
          </p>

          {/* Sign Up Link */}
          <p className="text-center my-4">
            Don't have an account?{" "}
            <span className="text-red-600 cursor-pointer" onClick={goToSignUp}>
              Sign Up
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 text-center mb-auto z-10">
        <img
          src={signLogoUrl}
          alt="Sign Logo"
          style={{
            height: "40px",
            display: "inline-block",
            marginRight: "8px",
          }}
        />
        <p className="text-sm inline-block">
          © 2024 Cursus. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
