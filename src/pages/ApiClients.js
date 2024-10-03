import { ExclamationCircleOutlined, SettingOutlined } from "@ant-design/icons";
import { Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApiClients = () => {
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
  const handleCloseAccount = () => {
    navigate("/closeAccount");
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
        <button className="p-2 rounded-md  font-medium bg-[#ED2A26]  text-white">
          API Clients
        </button>
        <button className="p-2 rounded-md  font-medium" onClick={handleCloseAccount}>Close Account</button>
      </div>

      <h5 className="mt-12 text-xl">Affiliate API</h5>
      <span className=" font-light">
        The Cursus Affiliate API exposes functionalities of Cursus to help
        developers build client applications and integrations with Cursus.
      </span>

      <div className="flex gap-1 mt-2">
        <span className=" font-light">
          To see more details, please visit Cursus Affiliate API
        </span>
        <a>Cursus Affilate API</a>
      </div>

      {/* ///////////////////////////////// */}
<button className="mt-12 mb-12 bg-white hover:bg-black text-black hover:text-white font-medium rounded-sm p-3"  onClick={showModal}>Request Affiliate API Client</button>
      
      <Modal
        title="Add API Client"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item label="Link" name="link">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea rows={4} />
          </Form.Item>
          
        </Form>
      </Modal>
      <div>
        <ExclamationCircleOutlined className="text-red-500" /> You don't have
        any API clients yet.
      </div>
    </div>
  );
};

export default ApiClients;
