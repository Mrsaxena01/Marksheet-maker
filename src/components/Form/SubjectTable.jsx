import { Trash } from "lucide-react";
import React from "react";

const SubjectTable = ({ subjects, onSubjectChange, onRemoveSubject }) => {
  return (
    <div className="px-4 sm:px-6 pt-4 overflow-x-auto">
      <table className="w-full border rounded-lg border-gray-400 border-separate border-spacing-2 text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 sm:p-3 text-left">Subject Name</th>
            <th className="p-2 sm:p-3 text-center">Total Marks</th>
            <th className="p-2 sm:p-3 text-center">Obtained Marks</th>
            <th className="p-2 sm:p-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index} className="hover:bg-gray-50 border-b">
              <td className="p-2 sm:p-3">
                <input
                  type="text"
                  value={subject.subjectName}
                  placeholder="Subject name"
                  required
                  onChange={(e) =>
                    onSubjectChange(index, "subjectName", e.target.value)
                  }
                  className="w-full border-2 border-gray-300 p-1.5 rounded-lg outline-none capitalize focus:border-blue-500 transition"
                />
              </td>
              <td className="p-2 sm:p-3">
                <input
                  type="number"
                  value={subject.totalMarks}
                  placeholder="Total"
                  required
                  onChange={(e) =>
                    onSubjectChange(index, "totalMarks", e.target.value)
                  }
                  className="w-full border-2 border-gray-300 p-1.5 rounded-lg outline-none focus:border-blue-500 transition text-center"
                />
              </td>
              <td className="p-2 sm:p-3">
                <input
                  type="number"
                  value={subject.obtainedMarks}
                  placeholder="Obtained"
                  required
                  min={0}
                  max={100}
                  onChange={(e) =>
                    onSubjectChange(index, "obtainedMarks", e.target.value)
                  }
                  className="w-full border-2 border-gray-300 p-1.5 rounded-lg outline-none focus:border-blue-500 transition text-center"
                />
              </td>
              <td className="p-2 sm:p-3 text-center">
                <button
                  type="button"
                  onClick={() => onRemoveSubject(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition"
                  title="Delete subject"
                >
                  <Trash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTable;
