import React from "react";

const ResultSummary = ({ totalMarks, obtainedMarks, grade, percentage }) => {
  return (
    <div className="w-full p-3 sm:p-4">
      <h2 className="text-lg sm:text-xl font-bold text-center text-gray-700 mb-3 sm:mb-4">
        -: Result Summary :-
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center font-semibold text-gray-700">
        <div className="border-b sm:border-b-0 sm:border-r border-gray-400 py-2 sm:py-0">
          <p className="text-xs sm:text-sm">Total Marks</p>
          <span className="text-lg sm:text-xl font-bold text-blue-600">
            {totalMarks}
          </span>
        </div>

        <div className="border-b sm:border-b-0 sm:border-r border-gray-400 py-2 sm:py-0">
          <p className="text-xs sm:text-sm">Obtained Marks</p>
          <span className="text-lg sm:text-xl font-bold text-green-600">
            {obtainedMarks}
          </span>
        </div>

        <div className="py-2 sm:py-0">
          <p className="text-xs sm:text-sm">Grade</p>
          <span className="text-lg sm:text-xl font-bold text-yellow-600">
            {grade}
          </span>
        </div>
      </div>

      <div className="text-center text-gray-600 font-medium mt-3 sm:mt-4">
        <p className="text-sm sm:text-base">
          Percentage:{" "}
          <span className="font-semibold text-blue-500">
            {percentage ? percentage.toFixed(2) : 0}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResultSummary;
