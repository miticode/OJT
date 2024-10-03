import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReportHistory = ({ sidebar }) => {
  return (
    <div
      className={`flex gap-2 mt-[2px] mb-8  pt-1 group-focus-within:border-black ${
        sidebar ? "w-[1400px]" : "w-[1640px]"
      }`}
    >
      <div className="h-[75vh] bg-[#F7F7F7]  mt-0   ">
        <div className="bg-[#F7F7F7] p-8 rounded-lg ">
          {" "}
          <div className="flex mt-16 py-2 px-1 gap-2">
            <FontAwesomeIcon icon={faFlag} className="mr-2 mt-1" />
            <h1 className="text-[20px] font-medium">Report history</h1>
          </div>
          <p className="mb-4 text-[16px] py-[10px] font-medium">
            Thanks for reporting
          </p>
          <p
            className={`mb-4 text-sm text-gray-500 ${
              sidebar ? "w-[1400px]" : "w-[1640px]"
            }`}
          >
            Any member of the Cursus community can flag content to us that they
            believe violates our Community Guidelines. When something is
            flagged, it’s not automatically taken down. Flagged content is{" "}
            reviewed in line with the following guidelines:
          </p>
          <ul className="list-disc list-inside mb-4 text-sm font-normal text-gray-500">
            <li className="text-gray-500">
              Content that violates our{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-gray-500 no-underline hover:underline"
              >
                Community Guidelines
              </a>{" "}
              is removed from Edututs+.
            </li>
            <li className="text-gray-500">
              Content that may not be appropriate for all younger audiences may
              be age-restricted.
            </li>
          </ul>
          <div className="py-[15px]">
            <a
              href="#"
              className="text-blue-500 font-normal hover:text-gray-500 no-underline hover:underline "
            >
              Learn more about reporting content on Cursus.
            </a>
          </div>
          <div
            className={`mt-6 text-gray-500 text-center py-[50px] ${
              sidebar ? "w-[1400px]" : "w-[1640px]"
            }`}
          >
            You haven't submitted any reports.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportHistory;
