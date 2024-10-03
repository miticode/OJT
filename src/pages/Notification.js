import { SettingOutlined } from '@ant-design/icons'
import { Switch } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  message } from 'antd';
const Notification = () => {
    const navigate = useNavigate();

    const handleAccount =()=> {
       
        navigate("/setting");
    };
    const handlePrivacy =()=> {
       
        
        navigate("/privacy");
    };
    const handleApiclients = () => {
        navigate("/apiclient")
      }
      const handleCloseAccount = () => {
        navigate("/closeAccount");
      }
      const handleBilling =()=> {
       
        navigate("/billing");
      
    };
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
    const [checkeddd, setCheckeddd] = useState(false);
    const onChangeee = (checkeddd) => {
        console.log(`switch to ${checkeddd}`);
        setCheckeddd(checkeddd);
    };
    const [checkedddd, setCheckedddd] = useState(false);
    const onChangeeee = (checkedddd) => {
        console.log(`switch to ${checkedddd}`);
        setCheckedddd(checkedddd);
    };
    const [checkeddddd, setCheckeddddd] = useState(false);
    const onChangeeeee = (checkeddddd) => {
        console.log(`switch to ${checkeddddd}`);
        setCheckeddddd(checkeddddd);
    };
    const [checkedddddd, setCheckedddddd] = useState(false);
    const onChangeeeeee = (checkedddddd) => {
        console.log(`switch to ${checkedddddd}`);
        setCheckedddddd(checkedddddd);
    };
    const [checkeddddddd, setCheckeddddddd] = useState(false);
    const onChangeeeeeee = (checkeddddddd) => {
        console.log(`switch to ${checkeddddddd}`);
        setCheckeddddddd(checkeddddddd);
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
        <button className='p-2 rounded-md bg-[#ED2A26] text-white font-medium' >Notification</button>
        <button className='p-2 rounded-md  font-medium' onClick={handlePrivacy}>Privacy</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleBilling}>Billing and Payouts</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleApiclients}>API Clients</button>
        <button className='p-2 rounded-md  font-medium' onClick={handleCloseAccount}>Close Account</button>
    </div>

    
        <h5 className='mt-12 text-xl'>Notifications - Choose when and how to be notified</h5>
        <span className=' font-light'>Select push and email notifications you'd like to receive</span>
        {/* ///////////////////////////////// */}
       <div className='mt-12'>
       <h5 className=' text-lg'>Choose when and how to be notified</h5>
       {/* ///////////////////////////////// */}
       <div className='flex gap-5'>
       <Switch  defaultChecked={checked} onChange={onChange}  className='w-[55px] '   style={{ backgroundColor: checked ? '#ED2A26' : '#CCCCCC ' }}  />
       <div className='flex flex-col'>
        <h3>Subscriptions</h3>
        <span className='text-sm'>Notify me about activity from the profiles I'm subscribed to</span>
       </div>
       </div>
      {/* ///////////////////////////////// */}
      <div className='flex gap-5 mt-10'>
       <Switch  defaultChecked={checkedd} onChange={onChangee} className='w-[55px] '   style={{ backgroundColor: checkedd ? '#ED2A26' : '#CCCCCC' }}  />
       <div className='flex flex-col'>
        <h3>Recommeneded Courses</h3>
        <span className='text-sm'>Notify me of courses I might like based on what I watch</span>
       </div>
       </div>
        {/* ///////////////////////////////// */}
        <div className='flex gap-5 mt-10'>
       <Switch  defaultChecked={checkeddd} onChange={onChangeee} className='w-[55px] '   style={{ backgroundColor: checkeddd ? '#ED2A26' : '#CCCCCC' }}  />
       <div className='flex flex-col'>
        <h3>Activity on my comments</h3>
        <span className='text-sm'>Notify me about activity on my comments on others’ courses</span>
       </div>
       </div>
        {/* ///////////////////////////////// */}
        <div className='flex gap-5 mt-10'>
       <Switch  defaultChecked={checkedddd} onChange={onChangeeee} className='w-[55px] '   style={{ backgroundColor: checkedddd ? '#ED2A26' : '#CCCCCC' }}  />
       <div className='flex flex-col'>
        <h3>Replies to my comments</h3>
        <span className='text-sm'>Notify me about replies to my comments</span>
       </div>
       </div>
        {/* ///////////////////////////////// */}
       </div>
       <hr className='h-5 border-gray-400 mt-16'/>
        
        {/* ///////////////////////////////// */}
       <h5 className='mt-10 text-lg'>Email notifications</h5>
       <span className=' font-light'>Select push and email notifications you'd like to receive</span>
        {/* ///////////////////////////////// */}
       <div className='flex gap-5 mt-10'>
       <Switch  defaultChecked={checkeddddd} onChange={onChangeeeee} className='w-[55px] '   style={{ backgroundColor: checkeddddd ? '#ED2A26' : '#CCCCCC' }}  />
       <div className='flex flex-col'>
        <h3>Send me emails about my Curcus activity and updates I requested</h3>
        <span className='text-sm'>If this setting is turned off, Cursus may still send you messages regarding your account, required service announcements, legal notifications, and privacy matters</span>
       </div>
       </div>
       {/* ///////////////////////////////// */}
       <div className='flex gap-5 mt-10'>
       <Switch  defaultChecked={checkedddddd} onChange={onChangeeeeee} className='w-[55px] '   style={{ backgroundColor: checkedddddd ? '#ED2A26' : '#CCCCCC' }}  />
       <div className='flex flex-col'>
        <h3>Promotions, course recommendations, and helpful resources from Curcus</h3>
        
       </div>
       </div>
       {/* ///////////////////////////////// */}
       <div className='flex gap-5 mt-10'>
       <Switch  defaultChecked={checkeddddddd} onChange={onChangeeeeeee} className='w-[55px] '   style={{ backgroundColor: checkeddddddd ? '#ED2A26' : '#CCCCCC' }}  />
       <div className='flex flex-col'>
        <h3>Announcements from instructors whose course(s)I'm enrolled in.</h3>
        <span className='text-sm'>To adjust this preference by course, leave this box checked and go to the course dashboard and click on "Options" to opt in or out of specific announcements.</span>
       </div>
       </div>
       {/* ///////////////////////////////// */}
       {contextHolder}
       <button className='mt-12 mb-12 bg-[#ED2A26] p-[10px] w-32 text-white font-medium rounded-sm hover:bg-black'onClick={success}>Save Changes</button>
        </div>
  )
}

export default Notification