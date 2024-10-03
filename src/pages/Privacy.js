import { SettingOutlined } from '@ant-design/icons'
import { Switch } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  message } from 'antd';
const Privacy = () => {
    const navigate = useNavigate();

    const handleAccount =()=> {
       
        navigate("/setting");
    };
    const handleNoti =()=> {
       
        navigate("/notification");
      
    };
    const handleBilling =()=> {
       
        navigate("/billing");
      
    };
    const handleApiclients = () => {
        navigate("/apiclient")
      }
      const handleCloseAccount = () => {
        navigate("/closeAccount");
      }
    const [checked, setChecked] = useState(false);
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setChecked(checked);
    };
   
    const [checkedd, setCheckedd] = useState(false);
    const onChangee = (checkedd) => {
        console.log(`switch to ${checkedd}`);
        setCheckedd(checkedd);
    };
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Save Changes Success',
      });
    };
    
  return (
    <div className='mt-20 ml-5 bg-[#F7F7F7] '>
        <div className='flex gap-5 items-center  '>
        <SettingOutlined className='text-3xl'/>
        <h3  className='text-2xl mt-2'>Setting</h3>
        </div>
        <div className='mt-10 flex'>
        <button className='p-2 rounded-md  font-medium ' onClick={handleAccount}>Account</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleNoti}>Notification</button>
        <button className='p-2 rounded-md  font-medium bg-[#ED2A26]  text-white' >Privacy</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleBilling}>Billing and Payouts</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleApiclients}>API Clients</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleCloseAccount}>Close Account</button>
    </div>

    
        <h5 className='mt-12 text-xl'>Privacy</h5>
        <span className=' font-light'>Modify your privacy settings here.</span>
        {/* ///////////////////////////////// */}
       <div className='mt-12'>
       <h5 className=' text-lg'>Profile page settings</h5>
       {/* ///////////////////////////////// */}
       <div className='flex gap-5'>
       <Switch  defaultChecked={checked} onChange={onChange}  className='w-[55px] '   style={{ backgroundColor: checked ? '#ED2A26' : '#CCCCCC ' }}  />
       <div className='flex flex-col'>
        <h3>Show your profile on search engines</h3>
        
       </div>
       </div>
      {/* ///////////////////////////////// */}
      <div className='flex gap-5 mt-10'>
       <Switch  defaultChecked={checkedd} onChange={onChangee} className='w-[55px] '   style={{ backgroundColor: checkedd ? '#ED2A26' : '#CCCCCC' }}  />
       <div className='flex flex-col'>
        <h3>Show courses you're taking on your profile page</h3>
        
       </div>
       </div>
        {/* ///////////////////////////////// */}
       
       </div>
       {/* ///////////////////////////////// */}
       {contextHolder}
       <button className='mt-12 mb-12 bg-[#ED2A26] p-[10px] w-32 text-white font-medium rounded-sm hover:bg-black'  onClick={success}>Save Changes</button>
        </div>
  )
}

export default Privacy