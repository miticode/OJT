import { SettingOutlined } from '@ant-design/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {   message} from 'antd';
const CloseAccount = () => {
    const navigate = useNavigate();

  const handleAccount = () => {
    navigate("/setting");
  };
  const handleNoti = () => {
    navigate("/notification");
  };
  const handlePrivacy = () => {
    navigate("/privacy");
  };
  const handleBilling = () => {
    navigate("/billing");
  };
  const handleApiclients = () => {
    navigate("/apiclient")
  }
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Close Account Success and will log out automatically in 10s',
    });
  };
  return (
    <div className="mt-20 ml-5 bg-[#F7F7F7] ">
      <div className="flex gap-5 items-center  ">
        <SettingOutlined className="text-3xl" />
        <h3 className="text-2xl mt-2">Setting</h3>
      </div>
      <div className="mt-10 flex">
        <button
          className="p-2 rounded-md  font-medium "
          onClick={handleAccount}
        >
          Account
        </button>
        <button className="p-2 rounded-md  font-medium" onClick={handleNoti}>
          Notification
        </button>
        <button className="p-2 rounded-md  font-medium" onClick={handlePrivacy}>
          Privacy
        </button>
        <button
          className="p-2 rounded-md  font-medium "
          onClick={handleBilling}
        >
          Billing and Payouts
        </button>
        <button className="p-2 rounded-md  font-medium " onClick={handleApiclients}>
          API Clients
        </button>
        <button className="p-2 rounded-md  font-medium bg-[#ED2A26]  text-white">Close Account</button>
      </div>

      <h5 className="mt-12 text-xl">Close account</h5>
      <div className='flex gap-1 mt-3'>
        <h3>Warning:</h3>
        <div> If you close your account, you will be unsubscribed from all your 5 courses, and will lose access forever.</div>
      </div>
    <input placeholder='Enter your Password' className='w-[550px] border border-solid p-3 mt-5'/>
    <div></div>
    <span className='text-sm'>Are you sure you want to close your account?</span>
    <div></div>
    {contextHolder}
    <button className='mt-12 mb-12 bg-[#ED2A26] p-[10px] w-32 text-white font-medium rounded-sm hover:bg-black' onClick={success}>Close Account</button>
   
      {/* ///////////////////////////////// */}

     
      
      
    </div>
  )
}

export default CloseAccount