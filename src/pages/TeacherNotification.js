import { SettingOutlined } from '@ant-design/icons'
import React from 'react'

const TeacherNotification = () => {
  return (
    <div className='mt-20 ml-5 bg-[#F7F7F7]'>
       <div className='flex gap-5 items-center  '>
        <SettingOutlined className='text-3xl'/>
        <h3  className='text-2xl mt-2'> Notifications</h3>
        </div>
        <button className='mt-12  bg-[#ED2A26] p-[10px]  text-white font-medium rounded-sm hover:bg-black' >Notification Setting</button>
        <div className='mt-10 w-[1600px]'>
        <div className="  flex gap-3 p-10 bg-white hover:bg-[#FFECEC] border border-solid rounded-sm">
          <div>
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
              width={40}
              alt='img1'
            />
          </div>
          <div className="flex flex-col">
            <h3>Rock William</h3>
           
            <div className=" ">Like Your Comment On Video How to create sidebar menu.</div>
            <div className="text-sm font-light text-gray-500">2 min ago</div>
          </div>
          {/* //////////////////////////// */}
        </div>
        <div className="  flex gap-3 p-10 bg-white hover:bg-[#FFECEC] border border-solid rounded-sm">
          <div>
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg"
              width={40}
              alt='img2'
            />
          </div>
          <div className="flex flex-col">
            <h3>Jassica Smith</h3>
           
            <div className=" ">Add New Review In Video Full Stack PHP Developer.</div>
            <div className="text-sm font-light text-gray-500">12 min ago</div>
          </div>
        </div>
         {/* //////////////////////////// */}
        <div className="  flex gap-3 p-10 bg-white hover:bg-[#FFECEC] border border-solid rounded-sm">
          <div>
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg"
              width={40}
              alt='img9'
            />
          </div>
          <div className="flex flex-col">
            <h3>Edututs+</h3>
           
            <div className=" ">Your Membership Approved Upload Video.</div>
            <div className="text-sm font-light text-gray-500">20 min ago</div>
          </div>
        </div>
 {/* //////////////////////////// */}
        <div className="  flex gap-3 p-10 bg-white hover:bg-[#FFECEC] border border-solid rounded-sm">
          <div>
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-9.jpg"
              width={40}
              alt='img9'
            />
          </div>
          <div className="flex flex-col">
            <h3>Edututs+</h3>
           
            <div className=" ">Your Membership Approved Upload Video.</div>
            <div className="text-sm font-light text-gray-500">20 min ago</div>
          </div>
        </div>
        </div>
       
    </div>
  )
}

export default TeacherNotification