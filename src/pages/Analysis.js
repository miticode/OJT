import { ArrowDownOutlined, ArrowUpOutlined, StockOutlined } from "@ant-design/icons";
import { Statistic, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,

  Line,
  LineChart,
  
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getAllCourses } from "../redux/actions/course.action";
import { fetchAnalysisData } from "../redux/actions/analysis.action";

const Analysis = () => {
  const dispatch = useDispatch();
  
  const analysisState = useSelector((state) => state.analysis || {});
  const courses = useSelector((state) => state.enrolledCourses.courses || []);
  const [activeTab, setActiveTab] = useState("User");
  const { data = {}, status, error } = analysisState;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAnalysisData());
    }
  }, [status, dispatch]);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  const { avePageData, userData, SessionsData, BounceRateData, SessionDurationData, VisitorsData, saleData, SaveYearData, dataa } = data;
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error}</div>;
  const User = () => {
    return (
      <div className="relative" style={{ height: 400 }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          pointerEvents: "none",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userData}>
          <XAxis dataKey="name" />
          <YAxis ticks={[0, 50, 100, 150, 200]} />
            <Tooltip content={renderTooltipUV} />
            <Line
              type="linear"
              dataKey="uv"
              stroke="#FFC136"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ pointerEvents: "auto" }}
              strokeDasharray="1 1"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          pointerEvents: "none",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userData}>
          <XAxis dataKey="name" />
          <YAxis  ticks={[0, 50, 100, 150, 200]}  />
            <Tooltip content={renderTooltipPV} />
            <Line
              type="linear"
              dataKey="pv"
              stroke="#ED2A26"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ pointerEvents: "auto" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
  };
  const Sessions = () => {
    return (
      <div className="relative" style={{ height: 400 }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          pointerEvents: "none",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={SessionsData}>
          <XAxis dataKey="name" />
          <YAxis ticks={[0, 50, 100, 150, 200]} />
            <Tooltip content={renderTooltipUV} />
            <Line
              type="linear"
              dataKey="uv"
              stroke="#FFC136"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ pointerEvents: "auto" }}
              strokeDasharray="1 1"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          pointerEvents: "none",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={SessionsData}>
          <XAxis dataKey="name" />
          <YAxis  ticks={[0, 50, 100, 150, 200]}  />
            <Tooltip content={renderTooltipPV} />
            <Line
              type="linear"
              dataKey="pv"
              stroke="#ED2A26"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ pointerEvents: "auto" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
  };
  const BounceRate = () => {
    return (
      <div className="relative" style={{ height: 400 }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          pointerEvents: "none",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={BounceRateData}>
          <XAxis dataKey="name" />
          <YAxis ticks={[0, 50, 100, 150, 200]} />
            <Tooltip content={renderTooltipUV} />
            <Line
              type="linear"
              dataKey="uv"
              stroke="#FFC136"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ pointerEvents: "auto" }}
              strokeDasharray="1 1"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          pointerEvents: "none",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={BounceRateData}>
          <XAxis dataKey="name" />
          <YAxis  ticks={[0, 50, 100, 150, 200]}  />
            <Tooltip content={renderTooltipPV} />
            <Line
              type="linear"
              dataKey="pv"
              stroke="#ED2A26"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ pointerEvents: "auto" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
  };
  const SessionDuration = () => {
    return (
      <div className="relative" style={{ height: 400 }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          pointerEvents: "none",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={SessionDurationData}>
          <XAxis dataKey="name" />
          <YAxis ticks={[0, 50, 100, 150, 200]} />
            <Tooltip content={renderTooltipUV} />
            <Line
              type="linear"
              dataKey="uv"
              stroke="#FFC136"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ pointerEvents: "auto" }}
              strokeDasharray="1 1"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "400px",
          pointerEvents: "none",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={SessionDurationData}>
          <XAxis dataKey="name" />
          <YAxis  ticks={[0, 50, 100, 150, 200]}  />
            <Tooltip content={renderTooltipPV} />
            <Line
              type="linear"
              dataKey="pv"
              stroke="#ED2A26"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ pointerEvents: "auto" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
    );
  };
  
  const renderTooltipContent = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip rounded-sm">
          <p className="label">{`Month: ${payload[0].payload.name}`}</p>
          <p className="uv">{`Subscribe: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  const renderTooltipUV = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const uvData = payload.find((entry) => entry.dataKey === "uv");
      if (uvData) {
        return (
          <div className="custom-tooltip rounded-sm">
            <p className="label">{`${payload[0].payload.name}`}</p>
            <p className="uv">{`Old: ${uvData.value}`}</p>
          </div>
        );
      }
    }
    return null;
  };

  const renderTooltipPV = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const pvData = payload.find((entry) => entry.dataKey === "pv");
      if (pvData) {
        return (
          <div className="custom-tooltip rounded-sm">
            <p className="label">{`${payload[0].payload.name}`}</p>
            <p className="uv">{`New: ${pvData.value}`}</p>
          </div>
        );
      }
    }
    return null;
  };
  const renderTooltipSale = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip rounded-sm">
          <p className="label">{` ${payload[0].payload.name}`}</p>
          <p className="uv">{`Sale: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  const renderTooltipYearly = (props) => {
    const { active, payload, label } = props;
    if (active && payload && payload.length) {
      const uv = payload[0].value;
      return (
        <div className="custom-tooltip rounded-sm bg-white p-2 shadow-md">
          <p className="label font-medium">{` ${label}`}</p>
          <p className="value">{` $${uv}`}</p>
        </div>
      );
    }
    return null;
  };
  const renderTooltipAvePage = (props) => {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      const uv = payload[0].value;
      return (
        <div className="custom-tooltip rounded-sm bg-white p-2 shadow-md">
          <p className="label font-medium">{`${payload[0].payload.name}`}</p>
          <p className="value">{` ${uv}`}</p>
        </div>
      );
    }
    return null;
  };
  
  
  const dataSource = courses.map((course, index) => ({
    key: index,
    itemNo: index + 1,
    Thumbnail: course.thumbnail, 
    Title: course.title,         
    Purchases: course.purchases, 
    Comments: course.comments,   
    Views: course.views,        
  }));
  
  const columns = [
    {
      title: 'Item No.',
      dataIndex: 'itemNo',
      key: 'itemNo',
    },
    {
      title: 'Thumbnail',
      dataIndex: 'Thumbnail',
      key: 'Thumbnail',
      render: (text) => <img src={text} alt="thumbnail" style={{ width: 150, height: 100 }} />
    },
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Purchases',
      dataIndex: 'Purchases',
      key: 'Purchases',
    },
    {
      title: 'Comments',
      dataIndex: 'Comments',
      key: 'PComments',
    },
    {
      title: 'Views',
      dataIndex: 'Views',
      key: 'Views',
    },
  ];
  return (
    <div className="mt-20 ml-5 bg-[#F7F7F7]">
      <div className="flex gap-5 items-center">
        <StockOutlined className="text-3xl" />
        <h3 className="text-2xl mt-2">Analysis</h3>
      </div>
      <div className="mt-10 flex gap-5">
        <div className="w-[500px] bg-[#FFFFFF] p-5">
          <h1 className="text-2xl">839</h1>
          <div className="text-lg">Subscribers</div>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart
              width={450}
              height={100}
              data={data}
              margin={{ right: 10, left: 10 }}
            >
              <Tooltip
                content={renderTooltipAvePage}
                wrapperStyle={{ backgroundColor: "rgba(255,255,255,0.9)" }}
              />
              <Bar dataKey="uv" fill="#ED2A26" barSize={15} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* //////////////////////////////// */}
        <div className="w-[500px] bg-[#FFFFFF] p-5">
          <h1 className="text-2xl">950</h1>
          <div className="text-lg">Weekly Visitors</div>
          <div className="relative" style={{ height: 100 }}>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100px",
                pointerEvents: "none",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={VisitorsData}>
                  <Tooltip content={renderTooltipUV} />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#FFC136"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                    dot={{ pointerEvents: "auto" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100px",
                pointerEvents: "none",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={VisitorsData}>
                  <Tooltip content={renderTooltipPV} />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#ED2A26"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                    dot={{ pointerEvents: "auto" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* //////////////////////////////// */}
        <div className="w-[500px] bg-[#FFFFFF] p-5">
          <h1 className="text-2xl">20</h1>
          <div className="text-lg">Weekly Sales</div>
          <div style={{ width: "100%", height: 100 }}>
            <ResponsiveContainer>
              <AreaChart data={saleData}>
                <Tooltip content={renderTooltipSale} />
                <Area
                  type="linear"
                  dataKey="uv"
                  stroke="#FFA052"
                  fill="#FFE9D8"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                  dot={{ r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* //////////////////////////////// */}
      <div className=" border border-solid mt-10 bg-[#FFFFFF]">
        <h1 className="text-xl p-5">Sales Of The Year</h1>
        <hr />
        <div style={{ width: "100%" }} className="mt-6">
          <ResponsiveContainer width="100%" height={500}>
            <LineChart
              width={500}
              height={300}
              data={SaveYearData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 0"
                style={{ display: "none" }}
              />
              <XAxis dataKey="name" />
              <YAxis ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000]} />
              <Tooltip content={renderTooltipYearly} />

              <Line
                type="monotone"
                dataKey="uv"
                stroke="#ED2A26"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
       {/* //////////////////////////////// */}
       <div className="flex w-[1600px] mt-10 border border-solid bg-[#FFFFFF]">
        <div className="w-[1100px]">
          <h1 className="text-xl p-5">User Activity</h1>
          <hr/>
          <div className="flex">
            <div  className={`flex flex-col justify-center items-center w-[275px] p-5 cursor-pointer ${
              activeTab === "User" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("User")}>
              <div>User</div>
              <div className="flex items-center gap-1 ">
                <h1>5248</h1>
                <Statistic
        
          value={5}
          precision={0}
          valueStyle={{ color: '#3f8600', fontSize: '20px' }} 
        prefix={<ArrowUpOutlined style={{ fontSize: '20px' }} />}
          suffix="%"
          className="mt-[-10px]"
        />
              </div>
            </div>
              {/* //////////////////////////////// */}
              <div  className={`flex flex-col justify-center items-center w-[275px] p-5 cursor-pointer ${
              activeTab === "Session" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("Session")}>
              <div>Sessions</div>
              <div className="flex items-center gap-1 ">
                <h1>638</h1>
                <Statistic
        
          value={20}
          precision={0}
          valueStyle={{ color: '#3f8600', fontSize: '20px' }} 
        prefix={<ArrowUpOutlined style={{ fontSize: '20px' }} />}
          suffix="%"
          className="mt-[-10px]"
        />
              </div>
            </div>
            {/* //////////////////////////////// */}
            <div className={`flex flex-col justify-center items-center w-[275px] p-5 cursor-pointer ${
              activeTab === "BounceRate" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("BounceRate")}>
              <div>Bounce Rate</div>
              <div className="flex items-center gap-1 ">
                <h1>36.9%</h1>
                <Statistic
        
          value={7}
          precision={0}
          valueStyle={{  color: '#cf1322', fontSize: '20px' }} 
       
        prefix={<ArrowDownOutlined style={{ fontSize: '20px' }} />}
          suffix="%"
          className="mt-[-10px]"
        />
              </div>
            </div>
             {/* //////////////////////////////// */}
             <div className={`flex flex-col justify-center items-center w-[275px] p-5 cursor-pointer ${
              activeTab === "SessionDuration" ? "border-b-2 p-2 border-[#ed2a26]" : ""
            }`}
            onClick={() => setActiveTab("SessionDuration")}>
              <div>Session Duration</div>
              <div className="flex items-center gap-1 ">
                <h1>4m49s</h1>
                <Statistic
        
          value={15}
          precision={0}
          valueStyle={{ color: '#3f8600', fontSize: '20px' }} 
        prefix={<ArrowUpOutlined style={{ fontSize: '20px' }} />}
          suffix="%"
          className="mt-[-10px]"
        />
              </div>
            </div>
          </div>
           {/* //////////////////////////////// */}
           <div >
        {activeTab === "User" && <User/>}
        {activeTab === "Session" && <Sessions/>}
        {activeTab === "BounceRate" && <BounceRate/>}
        {activeTab === "SessionDuration" && <SessionDuration/>}
      </div>
            {/* //////////////////////////////// */}
           
        </div>
        {/* //////////////////////////////// */}
        <div className="flex-1 border border-solid ">
        <h1 className="text-xl p-5">Current Users</h1>
        <hr/>
        <div className="p-3 flex flex-col gap-3 ">
          <div>Ave Page views per minute</div>
          <h1>09</h1>
        </div>
        <div style={{ width: "100%" }} className="mt-6">
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={450}
              height={400}
              data={avePageData}
            
            >
              <YAxis ticks={[0, 10, 20, 30, 40, 50, 60]} />
              <Tooltip
                content={renderTooltipAvePage}
                wrapperStyle={{ backgroundColor: "rgba(255,255,255,0.9)" }}
              />
              <Bar dataKey="uv" fill="#ED2A26" barSize={15} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        </div>
     
       
       </div>
       <div className="w-[1600px] flex border border-solid bg-[#FFFFFF]">
            <h1 className="p-5  w-[1100px] ">AUDIENCE OVERVIEW</h1>
            <h1 className="p-5  flex-1 ">AUDIENCE OVERVIEW</h1>
           </div>
           <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Analysis;