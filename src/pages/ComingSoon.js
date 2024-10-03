import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const logoUrl = 'https://gambolthemes.net/html-items/cursus-new-demo/images/ct_logo.svg';

const ComingSoon = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 365);
        const countdownDate = currentDate.getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        };

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#0f0f0f] text-white h-screen flex flex-col items-center justify-center relative">
            <div className="absolute top-8">
                <img src={logoUrl} alt="Cursus Logo" className="w-50 h-14 mb-4" />
            </div>
            <div className="flex space-x-2 text-8xl font-bold mt-8">
                <div className="flex flex-col items-center">
                    <div className=" px-4 py-2 rounded-lg">{days}</div>
                    <span className="text-xl font-medium">Days</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                    <div className="px-4 py-2 rounded-lg">{hours}</div>
                    <span className="text-xl font-medium">Hours</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                    <div className=" px-4 py-2 rounded-lg">{minutes}</div>
                    <span className="text-xl font-medium">Minutes</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                    <div className=" px-4 py-2 rounded-lg">{seconds}</div>
                    <span className="text-xl font-medium">Seconds</span>
                </div>
            </div>
            <p className="text-[#ABABAB] mt-8 mb-4 text-3xl md:mt-20">We'll be coming soon!</p>

            <div className="mt-16 md:mt-30 py-4">
    <input type="email" placeholder="Email address" className="bg-white text-white px-9 py-4 rounded-l-lg focus:outline-none text-xl" />
    <button className="bg-[#FF4500] hover:bg-[#E64400] text-white px-6 py-4 rounded-r-lg text-xl">Notify Me</button>
</div>


<div className="flex flex-col md:flex-row items-center justify-center mt-20">
    <nav className="flex flex-wrap justify-center text-gray-400 text-sm space-x-4">
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/press" className="hover:text-white">Press</Link>
        <Link to="/contactus" className="hover:text-white">Contact Us</Link>
        <Link to="/advertise" className="hover:text-white">Advertise</Link>
        <Link to="/developers" className="hover:text-white">Developers</Link>
        <Link to="/copyright" className="hover:text-white">Copyright</Link>
        <Link to="/privacypolicy" className="hover:text-white">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-white">Terms</Link>
    </nav>
    <p className="text-gray-400 text-sm mt-4 md:ml-16 text-lg">© 2024 Cursus. All Rights Reserved.</p>
</div>


        </div>
    );
};

export default ComingSoon;
