import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contactus = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home');
    };

    return (
        <div>
            <div className="bg-white text-black">
                <div className="flex justify-between">
                    <div className="flex gap-3 pt-20 pl-[11%] text-sm cursor-pointer">
                        <p onClick={handleHome}>Home /</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="pt-5 pb-3 pl-[11%] text-2xl">
                    <h1>Contact Us</h1>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    <a href="help.html" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4" style={{ width: '250px', height: '130px' }}>
                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/help_icon.svg" alt="Help Icon" className="w-12 h-12" />
                        <h4 className="text-xl font-semibold">Help Center</h4>
                    </a>
                    <a href="help.html" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4" style={{ maxWidth: '20rem' }}>
                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/blog_icon.svg" alt="Blog Icon" className="w-12 h-12" />
                        <h4 className="text-xl font-semibold">Blog</h4>
                    </a>
                    <a href="help.html" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4" style={{ maxWidth: '20rem' }}>
                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/career_icon.svg" alt="Careers Icon" className="w-12 h-12" />
                        <h4 className="text-xl font-semibold">Careers</h4>
                    </a>
                    <a href="help.html" className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4" style={{ maxWidth: '20rem' }}>
                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/developer_icon.svg" alt="Developer Icon" className="w-12 h-12" />
                        <h4 className="text-xl font-semibold">Developer Area</h4>
                    </a>
                </div>
            </div>

            <div className="flex justify-center mt-8" style={{ marginLeft: '180px' }}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,3fr] gap-8 max-w-7xl mx-auto">
                    <div className="w-full h-80 lg:h-80">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.1234567890123!2d75.857456!3d30.900123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910f123456789ab%3A0x8c9a987654321def!2sLudhiana%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sus!4v1625061234567!5m2!1sen!2sus"
                            width="1516"
                            height="700"
                            style={{ width: '700px', height: '350px', border: '10px' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="w-full lg:w-80">
                        <div className="bg-white-200 p-6 rounded-lg shadow-md">
                            <p className="text-xl font-semibold">Contact Information</p>
                            <p className="text-gray-600 whitespace-pre-line">Main Address: #1235 Sks Nagar St No. 8 Phase 3,
                                                                   Pakhowal Road, 141001, LDH, Punjab,
                                                                   India</p>
                            <p className="text-gray-600">Email Address: info@eduttsplus@gmail.com</p>
                            <p className="text-gray-600">Phone Number: +911234567890, 01610000000</p>

                            <div className="flex gap-2 mt-6">
                                <div>
                                    <img
                                        src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_960_720.png"
                                        className="w-10 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://cdn.pixabay.com/photo/2017/08/23/11/30/twitter-2672572_960_720.jpg"
                                        className="w-10 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://i1.wp.com/globalinfusion.org/wp-content/uploads/2018/01/ig-logo-email.png?ssl=1"
                                        className="w-10 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://1.bp.blogspot.com/-hY5-pNrOcKw/XeI_00cpCgI/AAAAAAAAF4A/J7jS49V8kNozycy0PgY6wfc7SUU9gulTgCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340.png"
                                        className="w-10 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactus;