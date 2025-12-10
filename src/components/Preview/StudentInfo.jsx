import React from "react";

const StudentInfo = ({
  studentImage,
  studentName,
  fatherName,
  dob,
  gender,
  studentClass,
  rollNo,
  studentphoto,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-2 sm:p-3 border-b-2 border-gray-300">
      <img
        src={studentImage || studentphoto}
        alt="Student"
        className="w-24 h-28 sm:w-28 sm:h-32 border-2 border-gray-300 p-1 object-cover rounded-lg shrink-0"
      />

      <div className="w-full space-y-3 text-gray-700 text-sm sm:text-base">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-b-2 border-gray-300 py-2 gap-2">
          <div>
            <span className="font-semibold">Student's Name:</span>
            <span className="capitalize ml-2">{studentName || "John Doe"}</span>
          </div>
          <div>
            <span className="font-semibold">Father's Name:</span>
            <span className="capitalize ml-2">{fatherName || "Mr. Doe"}</span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-b-2 border-gray-300 py-2 gap-2">
          <div>
            <span className="font-semibold">DOB:</span>
            <span className="ml-2">{dob || "01/01/2000"}</span>
          </div>
          <div>
            <span className="font-semibold">Gender:</span>
            <span className="capitalize ml-2">{gender || "Male"}</span>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <span className="font-semibold">Class:</span>
            <span className="ml-2">
              {studentClass || "10"}
              <sup>th</sup>
            </span>
          </div>

          <div>
            <span className="font-semibold">Roll No.:</span>
            <span className="ml-2">{rollNo || "23"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
