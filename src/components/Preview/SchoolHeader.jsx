import React from "react";

const SchoolHeader = ({ schoolLogo, schoolName, tagline, schoolphoto }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-2 sm:p-3 border-b-2 border-gray-300">
      <img
        src={schoolLogo || schoolphoto}
        alt="School Logo"
        className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-gray-300 p-1 object-cover rounded-lg shrink-0"
      />

      <div className="text-center sm:text-left flex-1">
        <h2 className="text-xl sm:text-2xl font-bold capitalize">
          {schoolName || "Mithilanchal Public School"}
        </h2>
        <p className="text-sm sm:text-base font-medium capitalize text-gray-600">
          {tagline || "Vidya Ka Mandir"}
        </p>
      </div>
    </div>
  );
};

export default SchoolHeader;
