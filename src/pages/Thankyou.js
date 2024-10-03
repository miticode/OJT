import React from 'react';
import { Link } from 'react-router-dom';

const Thankyou = () => {
  const logoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/ct_logo.svg';

  return (
    <div className="bg-[#0f0f0f] text-white h-screen flex flex-col items-center justify-center relative">
      {/* Logo section */}
      <div className="absolute top-8">
        <img src={logoUrl} alt="Cursus Logo" className="w-50 h-14 mb-4" />
      </div>

      {/* Content section */}
      <div className="flex flex-col items-center justify-center z-10 bg-opacity-20 bg-glow-center p-8 rounded-lg">
        <h1 className="font-bold text-center" style={{ fontSize: '10rem', textShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' }}>Thank You</h1>
        <p className="text-4xl text-center mt-4 mb-8" style={{ textShadow: "0 1px 10px rgba(0, 0, 0, 0.2)" }}>
          Your Order is Confirmed!
        </p>
        
        <p className="text-xl text-center mt-4 mb-8" style={{ textShadow: "0 1px 10px rgba(0, 0, 0, 0.2)" }}>
          Top Print Your Booking Order No. 
          <span className="text-red-500"> #ABE-ME-12345678 </span> (Invoice) - 
          <Link to="/invoice" className="text-red-500 cursor-pointer">
            Click Here
          </Link>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center mt-20">
          <nav className="flex flex-wrap justify-center text-gray-400 text-xl space-x-4">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/press" className="hover:text-white">Press</Link>
            <Link to="/contactus" className="hover:text-white">Contact Us</Link>
            <Link to="/advertise" className="hover:text-white">Advertise</Link>
            <Link to="/developers" className="hover:text-white">Developers</Link>
            <Link to="/copyright" className="hover:text-white">Copyright</Link>
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </nav>
          <p className="text-gray-400 text-xl mt-4 md:ml-16">© 2024 Cursus. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
