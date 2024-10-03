import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Upload,  message, Card,  } from "antd";
import { Image } from "react-bootstrap";
import TextArea from "antd/es/input/TextArea";

const JobApply = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/home');
  };

  const handleCareer = () => {
    navigate("/career");
  };

  const handleChange = (event) => {
    console.log(`selected ${event.target.value}`);
  };

  const [fileList, setFileList] = useState([]);

  const uploadProps = {
    name: 'file',
    accept: 'image/*',
    multiple: true,
    fileList: fileList,
    beforeUpload: file => {
      const isImage = file.type.startsWith('image/');
      if (!isImage) {
        message.error('You can only upload image files!');
      }
      return isImage || Upload.LIST_IGNORE;
    },
    onChange(info) {
      let newFileList = [...info.fileList];
      newFileList = newFileList.slice(-5); 
      setFileList(newFileList);

      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove(file) {
      setFileList(prevFileList => prevFileList.filter(item => item.uid !== file.uid));
    }
  };

  return (
    <div>
      <div className="text-black bg-white">
        <div className="flex justify-between">
          <div className="text-black pt-[80px] pl-[11%] flex gap-3 text-[14px] cursor-pointer">
            <p onClick={handleHome}>Home /</p>
            <p onClick={handleCareer}>Career /</p>
            <p className="text-[#787878]">Data Engineer</p>
          </div>
          <div
            className="text-black pt-[80px] pr-[12%] text-[14px] flex items-center text-center cursor-pointer"
            onClick={handleCareer}
          >
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <FontAwesomeIcon className="text-[7px] pb-3" icon={faChevronLeft} />
            <p className="pl-2">Back to Career</p>
          </div>
        </div>
        <div className="pt-5 pb-3 pl-[11%] text-2xl">
          <h1>Data Engineer</h1>
        </div>
      </div>
      <div className="flex relative w-[700px] h-auto flex-col ml-[430px] mt-10  p-5">
        <div>
          <button className="mt-2 bg-[#ed2a26] text-white text-[15px] px-7 py-3 hover:bg-[#333333] transition duration-300 rounded-lg">
            Apply For This Job
          </button>
        </div>
        <hr className="my-2 w-full border-gray-300 mt-5" />
        <p className='text-[#686f7a] text-[14px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat maximus pellentesque. Integer sem enim, luctus at nibh at, condimentum sagittis sapien. Sed tempus ipsum erat, sit amet efficitur velit interdum eu. Vestibulum hendrerit id dolor eu scelerisque. Phasellus ex dui, consequat nec feugiat eu, dapibus eget ante. Sed sodales interdum dui, at euismod mi feugiat hendrerit. Suspendisse auctor libero in tempor mollis. Nulla et dolor velit. Aliquam sit amet luctus quam.
        </p>
        <h2 className='text-black text-[16px] mt-5'>What you’ll be doing</h2>
        <p className='text-[#686f7a] text-[14px]'>
          Nam a egestas libero, eget eleifend turpis. Sed id ipsum a ipsum aliquam laoreet sit amet sit amet nibh. Proin dapibus, libero sed posuere rhoncus, orci mi cursus enim, at accumsan eros massa lacinia mi. Nunc eget finibus felis, volutpat malesuada sem. Aliquam ac nisl pellentesque, varius neque sit amet, porttitor nunc. Nullam elit tellus, dapibus non eleifend sed, hendrerit eget velit. Aliquam ut felis dictum, tincidunt magna vitae, aliquam massa. In porttitor tristique quam, non dignissim sapien pharetra ultrices. Cras non ante non velit mollis mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.
        </p>
        <p className='text-[#686f7a] text-[14px]'>
          Etiam lobortis dictum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ultricies efficitur dui, suscipit tempus elit condimentum quis. Duis sed vestibulum tortor, eget cursus odio.
        </p>
        <h2 className='text-black text-[16px] mt-5'>What we’re looking for</h2>
        <div className='ml-4'>
          <p className='text-[#686f7a] text-[14px]'>
            1. Work closely with other data engineers to enhance infrastructure, improve reliability, and strengthen database performance
          </p>
          <p className='text-[#686f7a] text-[14px]'>
            2. Collaborate with data scientists, product managers, marketers and other data-driven internal stakeholders to identify opportunities for better data access and usage
          </p>
          <p className='text-[#686f7a] text-[14px]'>
            3. Contribute to the ongoing development of the data warehouse ecosystem
          </p>
          <p className='text-[#686f7a] text-[14px]'>
            4. Become the expert on all aspects of Edututs+'s data reporting and analytics infrastructure
          </p>
          <p className='text-[#686f7a] text-[14px]'>
            5. Develop and maintain data definitions for internally available data sources
          </p>
        </div>
        <h2 className='text-black text-[16px] mt-5'>Who should apply?</h2>
        <p className='text-[#686f7a] text-[14px]'>
          Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.
        </p>
        <h2 className='text-black text-[16px] mt-5'>What next?</h2>
        <p className='text-[#686f7a] text-[14px]'>
          Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.
        </p>
        <hr className="my-2 w-full border-gray-300 mt-5" />
        <div>
          <h2 className='text-black text-[18px] mt-3'>Submit Your Application</h2>
          <div className="flex flex-col gap-y-4 pt-5">
            <input
              placeholder="Full Name"
              className="h-[35px] w-full px-3 border border-gray-300 focus:border-black focus:outline-none rounded-lg"
            />
            <input
              placeholder="Email Address"
              className="h-[35px] w-full px-3 border border-gray-300 focus:border-black focus:outline-none rounded-lg"
            />
            <input
              placeholder="Phone Number"
              className="h-[35px] w-full px-3 border border-gray-300 focus:border-black focus:outline-none rounded-lg "
            />
          </div>
          <select
            defaultValue="Gender"
            className="w-full h-[35px] px-3 border border-gray-300 focus:border-black focus:outline-none rounded-lg mt-4 text-[#686f7a]"
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
            <div>
                <h2 className='text-black text-[18px] mt-6'>Resume/CV*</h2>
                <div >
                    <Card className="w-full h-[150px] flex items-center justify-center rounded-sm  border-2 mt-[20px]">
                        <Upload {...uploadProps}>
                            <div className="text-center">
                                <Image
                                className="mx-auto mb-2"
                                src={require("../assets/cloud-computing.png")}
                                alt="Upload"
                                width={30}
                                height={30}
                                />
                                <h2 className="text-[16px] font-medium">Attach Resume/CV</h2>
                            </div>
                        </Upload>
                    </Card>
                </div>
                <hr className="my-2 w-full border-gray-300 mt-8" />
            </div>
            <h2 className='text-black text-[18px] mt-6'>Links</h2>
            <div className="flex flex-col gap-y-4 pt-5">
                <input
                placeholder="LinkedIn URL"
                className="h-[35px] w-full px-3 border border-gray-300 focus:border-black focus:outline-none rounded-lg"
                />
                <input
                placeholder="Twitter URL"
                className="h-[35px] w-full px-3 border border-gray-300 focus:border-black focus:outline-none rounded-lg"
                />
                <input
                placeholder="Portfolio URL"
                className="h-[35px] w-full px-3 border border-gray-300 focus:border-black focus:outline-none rounded-lg "
                />
                <input
                placeholder="Other Website URL"
                className="h-[35px] w-full px-3 border border-gray-300 focus:border-black focus:outline-none rounded-lg "
                />
            </div>
            <hr className="my-2 w-full border-gray-300 mt-8" />
            <h2 className='text-black text-[18px] mt-6'>Additional Information</h2>
            <div className="w-full hover:border-black mt-5">
                <TextArea className="rounded-sm outline-black hover:border-black focus:border-black border-gray-300 py-[11px] px-[14px]" rows={4} placeholder="Add a cover letter or anything else you want to share." maxLength={6} />
            </div>
            <button className="mt-8 bg-[#ed2a26] text-white text-[15px] px-7 py-3 hover:bg-[#333333] transition duration-300 rounded-lg">
                Submit Application
            </button>
        </div>
      </div>
    </div>
  );
}

export default JobApply;
