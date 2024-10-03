import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Upload,  message, Card,  } from "antd";
import TextArea from "antd/es/input/TextArea";

import React, { useState } from "react";
import { Image } from "react-bootstrap";

const SendFeedback2 = ({sidebar}) => {
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
      newFileList = newFileList.slice(-5); // Limit the number of uploaded files to 5
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
    <div className="min-h-screen ml-10 mt-[100px] py-3">
      <div className={`flex gap-2 mt-[2px] mb-8 relative pt-1 group-focus-within:border-black ${
            sidebar ? "w-[1400px]" : "w-[1640px]"
          }`}>
        <FontAwesomeIcon icon={faMessage} className="mt-1 gap-1"/>
        <h1 className="text-[20px] font-medium">Send Feedback</h1>
      </div>
      <div className="py-[10px] gap-3">
  <div className="w-[600px] mb-10"> {/* Tăng khoảng cách dưới lên */}
    <Input className="rounded-sm outline-black hover:border-black border-gray-300 py-[9px]" placeholder="Email Address" />
  </div>
  <div className="w-[600px] hover:border-black">
    <TextArea className="rounded-sm outline-black hover:border-black focus:border-black border-gray-300 py-[11px] px-[14px]" rows={4} placeholder="Describe your issues or share your ideas" maxLength={6} />
  </div>
</div>

     <div className="mt-[20px]">
     <h2 className="text-[14px] font-medium">Add Screenshots</h2>
      <Card className="w-[600px] h-[150px] flex items-center justify-center rounded-sm  border-2 mt-[20px]">
        <Upload {...uploadProps}>
          <div className="text-center">
            <Image
              className="mx-auto mb-2"
              src={require("../../src/assets/cloud-computing.png")}
              alt="Upload"
              width={30}
              height={30}
            />
            <h2 className="text-[16px] font-medium">Select Screenshots to upload</h2>
            <p className="text-[13px] text-gray-500 font-medium">or drag and drop screenshots</p>
          </div>
        </Upload>
      </Card>
     </div>
    <button className=" mt-12 rounded-[3px] px-[20px] py-[12px]  bg-red-600 outline-none hover:bg-[#333333] text-white text-[14px] font-medium ">Send Feedback</button>
    </div>
  );
}

export default SendFeedback2;
