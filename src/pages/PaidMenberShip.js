import { DownOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaidMembership = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home');
    };

    const Paid = [
        {
            title: "Your own Shop",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
        {
            title: "Online courses",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
        {
            title: "Email marketing",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
        {
            title: "Messaging",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
        {
            title: "Zero charges  comissions 30 sales",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
        {
            title: "7-days-a-week support",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
        {
            title: "Memberships",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
        {
            title: "Blog",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
        {
            title: "Affiliate marketings",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
        {
            title: "Third-party code",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid le VHS."
        },
    ]

    const FAQ =[
        {
            title: "Is it easy to change plans?",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS."
        },
        {
            title: "Can I cancel at any time?",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS."
        },
        {
            title: "Are there any credit card or PayPal fees?",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS."
        },
        {
            title: "Do I have to choose my plan before I start my trial?",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS."
        },
        {
            title: "Edututs+ isn’t for me. Can I have a refund?",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS."
        },
        {
            title: "How do I get my money?",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS."
        },
        {
            title: "Do I need a credit card to sign up?",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS."
        },
        {
            title: "Is Edututs+ safe and secure for online transactions?",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS."
        },
        {
            title: "I still have questions. HELP!",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.le VHS."
        },
    ]

    return (
        <div>
            <div className="text-black bg-white">
                <div className="flex justify-between">
                    <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
                        <p onClick={handleHome}>Home /</p>
                        <p>Paid Membership</p>
                    </div>
                </div>
                <div className="pt-5 pb-3 pl-[11%] text-2xl">
                    <h1>Paid Membership</h1>
                </div>
            </div>
            <div className='flex justify-center gap-x-10 mt-16'>
                <div className='bg-white w-[500px] h-auto'>
                    <div className='ml-6 flex items-center'>
                        <div className=''>
                            <h2 className='text-black text-[22px] mt-6'>Baby Plan</h2>
                            <h2 className='text-[#ED2A26] text-[18px] mt-6'>$49/month</h2>
                            <p className='text-[#686F7A] text-[16px] mt-3'>Save $79 when paid annually</p>
                        </div>
                        <div className='ml-auto mr-7 mt-2'>
                            <img
                                className="w-[100px] h-[100px]"
                                src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/icon-1.svg"
                                alt="paid membership1"
                            />
                        </div>
                    </div>
                    <div className='ml-6 mt-10'>
                        <p className='text-[#686f7a] text-[16px]'>For instructors launching their first digital products.</p>
                    </div>
                    <div className='mt-8'>
                        {Paid.slice(0, 6).map((item, index) => (
                            <div key={index} className='relative w-auto overflow-hidden'>
                                <input
                                    type='checkbox'
                                    className='peer absolute top-0 inset-x-0 w-full h-10 z-10 cursor-pointer opacity-0'
                                />
                                <div className='bg-white h-10 w-full pl-5 flex items-center'>
                                    <h1 className='text-lg font-semibold text-black'><CheckOutlined className='text-red-500'/> {item.title}</h1>
                                </div>
                                <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                    <DownOutlined className='w-5 h-5' />
                                </div>
                                <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                    <div className='p-5 text-[#686F7A]'>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                                <div className='ml-5'>
                                    <hr className="my-2 w-[460px] border-gray-300 mt-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='bg-white h-10 w-full pl-5 flex items-center'>
                            <h1 className='text-lg font-semibold text-[#686F7A]'><CloseOutlined  className='text-[#686F7A]'/> Memberships</h1>
                        </div>
                        <div className='ml-5'>
                            <hr className="my-2 w-[460px] border-gray-300 mt-3" />
                        </div>
                    </div>
                    <div>
                        <div className='bg-white h-10 w-full pl-5 flex items-center'>
                            <h1 className='text-lg font-semibold text-[#686F7A]'><CloseOutlined  className='text-[#686F7A]'/> Blog</h1>
                        </div>
                        <div className='ml-5'>
                            <hr className="my-2 w-[460px] border-gray-300 mt-3" />
                        </div>
                    </div>
                    <div>
                        <div className='bg-white h-10 w-full pl-5 flex items-center'>
                            <h1 className='text-lg font-semibold text-[#686F7A]'><CloseOutlined  className='text-[#686F7A]'/> Affiliate marketings</h1>
                        </div>
                        <div className='ml-5'>
                            <hr className="my-2 w-[460px] border-gray-300 mt-3" />
                        </div>
                    </div>
                    <div>
                        <div className='bg-white h-10 w-full pl-5 flex items-center'>
                            <h1 className='text-lg font-semibold text-[#686F7A]'><CloseOutlined  className='text-[#686F7A]'/> Third-party code</h1>
                        </div>
                        <div className='ml-5'>
                            <hr className="my-2 w-[460px] border-gray-300 mt-3" />
                        </div>
                    </div>
                    <button className="mt-4 ml-5 bg-[#ed2a26] text-white text-[14px] w-[460px] py-2 hover:bg-[#333333] transition duration-300">
                        Learn More and Apply
                    </button>
                </div>
                <div className='bg-white w-[500px] h-auto pb-4'>
                    <div className='ml-6 flex items-center'>
                        <div className=''>
                            <h2 className='text-black text-[22px] mt-6'>Business Plan</h2>
                            <h2 className='text-[#ED2A26] text-[18px] mt-6'>$99/month</h2>
                            <p className='text-[#686F7A] text-[16px] mt-3'>Save $189 when paid annually</p>
                        </div>
                        <div className='ml-auto mr-7 mt-2'>
                            <img
                                className="w-[100px] h-[100px]"
                                src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/icon-2.svg"
                                alt="paid membership2"
                            />
                        </div>
                    </div>
                    <div className='ml-6 mt-10'>
                        <p className='text-[#686f7a] text-[16px]'>For instructors who are ready to grow their business.</p>
                    </div>
                    <div className='mt-8'>
                        {Paid.slice(0, 10).map((item, index) => (
                            <div key={index} className='relative w-auto overflow-hidden'>
                                <input
                                    type='checkbox'
                                    className='peer absolute top-0 inset-x-0 w-full h-10 z-10 cursor-pointer opacity-0'
                                />
                                <div className='bg-white h-10 w-full pl-5 flex items-center'>
                                    <h1 className='text-lg font-semibold text-black'><CheckOutlined className='text-red-500'/> {item.title}</h1>
                                </div>
                                <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                    <DownOutlined className='w-5 h-5' />
                                </div>
                                <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                    <div className='p-5 text-[#686F7A]'>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                                <div className='ml-5'>
                                    <hr className="my-2 w-[460px] border-gray-300 mt-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-4 ml-5 bg-[#ed2a26] text-white text-[14px] w-[460px] py-2 hover:bg-[#333333] transition duration-300">
                        Learn More and Apply
                    </button>
                </div>
            </div>
            <div className='text-black text-center mt-10'>
                <h1 className='text-2xl'>Membership FAQ</h1>
                <h3 className='text-[#686F7A]'>Wait, what about…</h3>
            </div>
            <div className='bg-white w-[1030px] h-auto mx-auto my-auto mt-16 pt-5'>
            <div className=''>
                        {FAQ.slice(0, 10).map((item, index) => (
                            <div key={index} className='relative w-auto overflow-hidden'>
                                <input
                                    type='checkbox'
                                    className='peer absolute top-0 inset-x-0 w-full h-10 z-10 cursor-pointer opacity-0'
                                />
                                <div className='bg-white h-10 w-full pl-5 flex items-center '>
                                    <h1 className='text-lg font-semibold text-black'> {item.title}</h1>
                                </div>
                                <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                    <DownOutlined className='w-5 h-5' />
                                </div>
                                <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                                    <div className='p-5 text-[#686F7A]'>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                                <div className='ml-5'>
                                    <hr className="my-2 w-[995px] border-gray-300 mt-3" />
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    );
}

export default PaidMembership;
