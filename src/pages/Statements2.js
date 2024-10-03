import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { getStatements } from "../redux/actions/statements.action";
import { Link } from 'react-router-dom';

const Statements2= ({ sidebar }) => {
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const { statements, loading } = useSelector((state) => state.statements);

  const [monthFilter, setMonthFilter] = useState("This Month");
  const [filteredStatements, setFilteredStatements] = useState([]);
  const [searchDocNumber, setSearchDocNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (userId) {
      dispatch(getStatements());
    }
  }, [dispatch, userId]);

  useEffect(() => {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString('default', { month: 'long' });

    const filtered = statements.filter((statement) => {
      const statementMonth = new Date(statement.date).toLocaleString('default', { month: 'long' });

      const matchesMonth = monthFilter === "This Month"
        ? statementMonth === currentMonth
        : statementMonth === lastMonth;

      const matchesSearch = searchTerm
        ? statement.orderId.includes(searchTerm)
        : true;

      return matchesMonth && matchesSearch && statement.role === "teacher";
    });

    setFilteredStatements(filtered);
  }, [statements, monthFilter, searchTerm]);

  const handleSearch = () => {
    if (!searchDocNumber.trim()) {
      setFilteredStatements(statements.filter(statement => statement.role === "teacher"));
      return;
    }

    const searchDate = new Date(searchDocNumber);

    const filtered = statements.filter((statement) => {
      const statementDate = new Date(statement.date);

      return (
        statementDate.getDate() === searchDate.getDate() &&
        statementDate.getMonth() === searchDate.getMonth() &&
        statementDate.getFullYear() === searchDate.getFullYear() &&
        statement.role === "teacher"
      );
    });

    setFilteredStatements(filtered);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-12 ml-5">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold mb-6 flex items-center justify-center p-3">
          <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
          Statements
        </h1>
      </div>

      <div className="grid grid-cols-1">
        <div className="flex flex-col md:flex-row gap-6 p-3">
          <div className="md:w-2/3 rounded-sm bg-white text-black font-medium p-4">
            <h2 className="text-xl font-semibold mb-4">Earnings</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <p>My funds</p>
                <p className="text-lg font-bold">$289.64</p>
              </div>
              <div className="col-span-1 px-2">
                <p>Earnings</p>
                <p className="text-lg font-bold text-green-600">+ $458.00</p>
              </div>
              <div className="col-span-1 pl-2">
                <p>Cursus Fees</p>
                <p className="text-lg font-bold text-red-600">- $154.86</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 rounded-sm bg-white text-black font-medium p-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">View Invoices</h2>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-grow">
                  <select className="w-full px-3 py-2 border rounded">
                    <option>Select Invoices</option>
                    <option>May 2024</option>
                    <option>June 2024</option>
                    <option>July 2024</option>
                  </select>
                </div>
                <button className="bg-red-600 text-white rounded px-3 py-2 flex justify-center items-center">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 11-2 0V5H5v10h4a1 1 0 110 2H4a1 1 0 01-1-1V4z" clipRule="evenodd" />
                    <path d="M9 11a1 1 0 000 2h3a1 1 0 100-2H9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center py-3 px-4">
        <button
          className={`text-gray-800 bg-black text-white rounded px-3 py-2 flex justify-center mr-3 ${
            monthFilter === "This Month" ? "bg-blue-600" : ""
          }`}
          onClick={() => setMonthFilter("This Month")}
        >
          This Month
        </button>
        <button
          className={`text-gray-800 bg-gray-500 text-white rounded px-3 py-2 flex justify-center ${
            monthFilter === "Last Month" ? "bg-blue-600" : ""
          }`}
          onClick={() => setMonthFilter("Last Month")}
        >
          Last Month
        </button>
        <div className="px-4 flex items-center">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Document Number"
            value={searchDocNumber}
            onChange={(e) => setSearchDocNumber(e.target.value)}
          />
          <button
            className="bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-md ml-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className={`mt-4 ml-5 ${sidebar ? "w-[1200px]" : "w-[1200px]"}`}>
        <div className="bg-[#ffecec] flex items-center h-[60px] border-1 border-[#f7f7f7]">
          <h1 className="ml-5">Date</h1>
          <h1 className="ml-[200px]">Order ID</h1>
          <h1 className="ml-[100px]">Type</h1>
          <h1 className="ml-[100px]">Title</h1>
          <h1 className="ml-[190px]">Amount</h1>
          <h1 className="ml-[120px]">Fees</h1>
          <h1 className="ml-[100px]">Invoice</h1>
        </div>

        {filteredStatements.map((statement, index) => (
          <div
            key={index}
            className="bg-white flex items-center h-[60px] border-[1px] border-[#f7f7f7] mt-[0.5px]"
          >
            <h1 className="ml-5">{statement.date}</h1>
            <h1 className="ml-[160px]">{statement.orderId}</h1>
            <h1 className="ml-[110px]">{statement.type}</h1>
            <h1 className="ml-[100px]">{statement.title}</h1>
            <h1 className="ml-[110px]">{statement.amount}</h1>
            <h1 className="ml-[160px]">{statement.fees}</h1>
            <Link to="/invoice">
              <h1 className="ml-[120px] text-blue-500">{statement.invoice}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statements2;
