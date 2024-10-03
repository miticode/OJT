import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddLiveStream = ({ sidebar }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("AddStreaming");

  const SettingStream = () => {
    return (
      <div className="mt-[20px]">
        <div className="bg-white rounded-lg p-8 w-[800px] ">
          <h1 className="text-[18px] font-medium">Live Streaming Setting</h1>
          <div className="py-[10px] ">
            <div className="flex py-3 gap-5">
              <label class="relative inline-flex cursor-pointer items-center">
                <input id="switch" type="checkbox" class="peer sr-only" />
                <label for="switch" class="hidden"></label>
                <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
              </label>
              <span className="text-[15px] text-[#333333] font-medium">
                Publish this as a continuous live video
              </span>
            </div>
            <div className="flex py-3 gap-5">
              <label class="relative inline-flex cursor-pointer items-center">
                <input id="switch" type="checkbox" class="peer sr-only" />
                <label for="switch" class="hidden"></label>
                <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
              </label>
              <span className="text-[15px] text-[#333333] font-medium">
                Allow embedding
              </span>
            </div>
            <div className="flex py-3 gap-5">
              <label class="relative inline-flex cursor-pointer items-center">
                <input id="switch" type="checkbox" class="peer sr-only" />
                <label for="switch" class="hidden"></label>
                <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
              </label>
              <span className="text-[15px] text-[#333333] font-medium">
                Unpublish after live video ends
              </span>
            </div>
            <div className="flex py-3 gap-5">
              <label class="relative inline-flex cursor-pointer items-center">
                <input id="switch" type="checkbox" class="peer sr-only" />
                <label for="switch" class="hidden"></label>
                <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
              </label>
              <span className="text-[15px] text-[#333333] font-medium">
                Allow viewers to rewind
              </span>
            </div>
            <div className="flex py-3 gap-5">
              <label class="relative inline-flex cursor-pointer items-center">
                <input id="switch" type="checkbox" class="peer sr-only" />
                <label for="switch" class="hidden"></label>
                <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
              </label>
              <span className="text-[15px] text-[#333333] font-medium">
                End broadcast when stream ends
              </span>
            </div>
            <div className="flex py-3 gap-5">
              <label class="relative inline-flex cursor-pointer items-center">
                <input id="switch" type="checkbox" class="peer sr-only" />
                <label for="switch" class="hidden"></label>
                <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
              </label>
              <span className="text-[15px] text-[#333333] font-medium">
                Publish as a test broadcast
              </span>
            </div>
            <div className="flex py-3 gap-5">
              <label class="relative inline-flex cursor-pointer items-center">
                <input id="switch" type="checkbox" class="peer sr-only" />
                <label for="switch" class="hidden"></label>
                <div class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
              </label>
              <span className="text-[15px] text-[#333333] font-medium">
                Turn off live commentary
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AddStreaming = () => {
    return (
      <div>
        <div className="bg-white rounded-lg p-8 w-[850px]">
          <h2 className="text-[18px] font-medium mb-4 text-center">
            Connect your live stream to the Live API
          </h2>
          <p className="mb-4 text-[14px] text-gray-500 font-medium text-center">
            Use live-streaming software or a hardware encoder.{" "}
            <a href="#" className="text-gray-700 hover:text-red-600">
              Learn More
            </a>
          </p>
          <div className="mb-4">
            <h2 className="text-[18px] font-medium py-3 ml-2 text-gray-700">
              Preview your broadcast with a stream key or paired encoder.
            </h2>
            <label className="block font-medium mb-2 ml-2">Server URL*</label>
            <div className="p-2 bg-white rounded-sm flex justify-between items-center">
              <span className="bg-[#F7F7F7] text-[13px] w-[800px] px-3 py-4">
                rtmps://live-api-s.edututs+.com:443/rtmp/
              </span>
              <Button className="bg-red-600 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-sm text-[13px]">
                Copy
              </Button>
            </div>
            <div className="mb-6 mt-7">
              <label className="block font-medium mb-2 ml-2">
                Persistent stream key*
              </label>
              <div className="p-2 bg-white rounded-sm flex justify-between items-center">
                <span className="bg-[#F7F7F7] w-[800px] text-[13px] px-3 py-4">
                  592030151361629?s_bl=1&s_ps=1&s_sw=065&s_vt=api-s&a=AbzB7xYk7XdnKpBf
                </span>
                <Button className="bg-red-600 hover:bg-gray-800 text-white py-2 px-4 rounded-sm text-[13px] font-medium">
                  Copy
                </Button>
              </div>
            </div>
            <div className="ml-2">
              <button className="bg-red-500 text-white text-[14px] font-medium rounded-sm px-[20px] py-3 ">
                <FontAwesomeIcon icon={faVideo} className="mr-2" />
                Go Live
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="ml-[130px]">
      <div
        className={`flex gap-5 mt-[100px] pt-6 ${
          sidebar ? "ml-[150px]" : "ml-[200px]"
        }`}
      >
        <Button
          className={`p-2 ml-[100px] rounded-sm  font-medium bg-red-600 hover:bg-gray-900 text-white text-[14px] px-[14px] py-[7px] ${
            activeTab === "AddStreaming" ? "" : ""
          }`}
          onClick={() => setActiveTab("AddStreaming")}
        >
          Add Streaming
        </Button>
        <Button
          className={`p-2 rounded-sm font-medium bg-red-600 hover:bg-gray-900 text-white  text-[14px] px-[14px] py-[7px] ${
            activeTab === "SettingStream" ? "" : ""
          }`}
          onClick={() => setActiveTab("SettingStream")}
        >
          Setting
        </Button>
      </div>
      <div className="p-4 border-white ">
        {activeTab === "AddStreaming" && <AddStreaming />}
        {activeTab === "SettingStream" && <SettingStream />}
      </div>
    </div>
  );
};

export default AddLiveStream;
