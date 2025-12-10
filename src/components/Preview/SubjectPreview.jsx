import React from "react";

const SubjectPreview = ({ subjects }) => {
  return (
    <div className="w-full border-b border-gray-400 overflow-x-auto">
      <table className="w-full border-collapse text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 sm:p-3 text-left border-b border-gray-300">
              Subject Name
            </th>
            <th className="p-2 sm:p-3 text-center border-b border-gray-300">
              Total Marks
            </th>
            <th className="p-2 sm:p-3 text-center border-b border-gray-300">
              Obtained Marks
            </th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((subject, index) =>
            subject.subjectName ? (
              <tr
                key={index}
                className="hover:bg-gray-50 border-b border-gray-200"
              >
                <td className="p-2 sm:p-3 capitalize">{subject.subjectName}</td>
                <td className="p-2 sm:p-3 text-center">{subject.totalMarks}</td>
                <td className="p-2 sm:p-3 text-center">
                  {subject.obtainedMarks}
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectPreview;
