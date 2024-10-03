import { SettingOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/actions/user.action';
import Cookies from "js-cookie"; 

const SettingAccount = () => {
 
  const wordLimit = 36;

  

  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
  const [headline, setHeadline] = useState(localStorage.getItem('headline') || '');
  const [description, setDescription] = useState(localStorage.getItem('description') || '');
  const [mysite, setMysite] = useState(localStorage.getItem('mysite') || '');
  const [facebookprofile, setFacebookprofile] = useState(localStorage.getItem('facebookbprofile') || '');
  const [twitterprofile, setTwitterprofile] = useState(localStorage.getItem('twitterprofile') || '');
  const [linkedinprofile, setLinkedinprofile] = useState(localStorage.getItem('linkedinprofile') || '');
  const [youtubeprofile, setYoutubeprofile] = useState(localStorage.getItem('youtubeprofile') || '');

  useEffect(() => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('headline', headline);
    localStorage.setItem('description', description);
    localStorage.setItem('mysite', mysite);
    localStorage.setItem('facebookbprofile', facebookprofile);
    localStorage.setItem('twitterprofile', twitterprofile);
    localStorage.setItem('linkedinprofile', linkedinprofile);
    localStorage.setItem('youtubeprofile', youtubeprofile);
  }, [firstName, lastName, headline, description, mysite, facebookprofile, twitterprofile, linkedinprofile, youtubeprofile]);

  const navigate = useNavigate();

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
    navigate("/apiclient");
  };
  
  const handleCloseAccount = () => {
    navigate("/closeAccount");
  };

  const dispatch = useDispatch();
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, user } = userUpdate;

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Save Changes Success',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = Cookies.get('id');
    console.log('UserId:', userId);
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('HeadLine:', headline);
    console.log('Description:', description);
    console.log('Mysite:', mysite);
    console.log('Facebook:', facebookprofile);
    console.log('twitter:', twitterprofile);
    console.log('Linkedin:', linkedinprofile);
    console.log('Youtube:', youtubeprofile);

    dispatch(updateUser(userId, firstName, lastName, headline, description, mysite, facebookprofile, twitterprofile, linkedinprofile, youtubeprofile))
      .then(() => {
        success();
      })
      .catch((error) => {
        messageApi.open({
          type: 'error',
          content: `Error: ${error.message}`,
        });
      });
  };

  const handleHeadlineChange = (e) => {
    const words = e.target.value.split('');
    if (words.length <= wordLimit) {
      setHeadline(e.target.value);
    }
  };

  return (
    <div className='mt-20 ml-5 bg-[#F7F7F7] '>
      <div className='flex gap-5 items-center  '>
        <SettingOutlined className='text-3xl' />
        <h3 className='text-2xl mt-2'>Setting</h3>
      </div>
      <div className='mt-10 flex'>
        <button className='p-2 rounded-md bg-[#ED2A26] text-white font-medium'>Account</button>
        <button className='p-2 rounded-md font-medium' onClick={handleNoti}>Notification</button>
        <button className='p-2 rounded-md font-medium' onClick={handlePrivacy}>Privacy</button>
        <button className='p-2 rounded-md font-medium' onClick={handleBilling}>Billing and Payouts</button>
        <button className='p-2 rounded-md font-medium' onClick={handleApiclients}>API Clients</button>
        <button className='p-2 rounded-md font-medium' onClick={handleCloseAccount}>Close Account</button>
      </div>

      <h5 className='mt-12 text-xl'>Your Cursus Account</h5>
      <span className='font-light'>This is your public presence on Cursus. You need a account to upload your paid courses, comment on courses, purchased by students, or earning.</span>
      <div className='mt-12'>
        <h5 className='text-lg'>Basic Profile</h5>
        <span className='font-light'>Add information about yourself</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-5 mt-10'>
          <input placeholder='First Name' className='p-3 w-[550px] border border-solid' type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}></input>
          <input placeholder='Last Name' className='p-3 w-[500px] border border-solid' type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} ></input>
        </div>
        <div className='flex mt-10 items-center'>
          <input placeholder='Headline' className='p-3 w-[1070px] border border-solid object-cover' value={headline} onChange={handleHeadlineChange} />
          <div className='bg-[#DEDFE0] p-2 ml-[-40px] rounded-md '>{wordLimit}</div>
        </div>
        <h1 className='font-light'>Add a professional headline like, "Engineer at Cursus" or "Architect."</h1>
        <TextArea className='mt-10 text-lg' placeholder='write a little description about you...' rows={4} value={description}
          onChange={(e) => setDescription(e.target.value)} />
        <h1 className='font-light'>Links and coupon codes are not permitted in this section."</h1>
        <hr className='h-5 border-gray-400 mt-16' />
        <h5 className='mt-10 text-lg'>Profile Links</h5>
        <div className='flex mt-8'>
          <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://</div>
          <input placeholder='yoursite.com' className='p-3 border border-solid w-[1100px] rounded-tr-lg rounded-br-lg ' value={mysite}
            onChange={(e) => setMysite(e.target.value)} />
        </div>
        <div className='flex mt-8'>
          <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://facebook.com/</div>
          <input placeholder='Facebook Profile' className='p-3 border border-solid w-[995px] rounded-tr-lg rounded-br-lg ' value={facebookprofile}
            onChange={(e) => setFacebookprofile(e.target.value)} />
        </div>
        <h1 className='font-light'>Add your Facebook username (e.g. johndoe)."</h1>
        <div className='flex mt-8'>
          <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://twitter.com/</div>
          <input placeholder='Twitter Profile' className='p-3 border border-solid w-[1015px] rounded-tr-lg rounded-br-lg ' value={twitterprofile}
            onChange={(e) => setTwitterprofile(e.target.value)} />
        </div>
        <h1 className='font-light'>Add your Twitter username (e.g. johndoe)."</h1>
        <div className='flex mt-8'>
          <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://linkedin.com/</div>
          <input placeholder='linkedin Profile' className='p-3 border border-solid w-[1000px] rounded-tr-lg rounded-br-lg ' value={linkedinprofile}
            onChange={(e) => setLinkedinprofile(e.target.value)} />
        </div>
        <h1 className='font-light'>Input your LinkedIn resource id (e.g. in/johndoe)."</h1>
        <div className='flex mt-8'>
          <div className='p-3 bg-[#E8E8E8] font-medium rounded-sm'>https://youtube.com/</div>
          <input placeholder='youtube Profile' className='p-3 border border-solid w-[1000px] rounded-tr-lg rounded-br-lg ' value={youtubeprofile}
            onChange={(e) => setYoutubeprofile(e.target.value)} />
        </div>
        <h1 className='font-light'>Input your Youtube username (e.g. johndoe)."</h1>
        {contextHolder}
        <button className='mt-12 mb-12 bg-[#ED2A26] p-[10px] w-32 text-white font-medium rounded-sm hover:bg-black' type="submit" disabled={loading}>Save Changes</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {user && <p>Update Successful!</p>}
      </form>
    </div>
  )
}

export default SettingAccount;
