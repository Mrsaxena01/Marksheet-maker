import React from "react";

const StudentForm = ({
  studentName,
  fatherName,
  onImageChange,
  onInputChange,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-700 border-b-2 border-blue-500 pb-2">
        Student Information
      </h3>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="studentImage"
          className="font-semibold text-gray-600 text-sm"
        >
          Student's Image
        </label>
        <input
          type="file"
          accept="image/*"
          id="studentImage"
          name="studentImage"
          onChange={onImageChange}
          required
          className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-blue-400 focus:border-blue-500 transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="studentName"
          className="font-semibold text-gray-600 text-sm"
        >
          Student's Name
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={studentName}
          onChange={onInputChange}
          placeholder="Enter student's name"
          required
          className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-blue-400 focus:border-blue-500 transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="fatherName"
          className="font-semibold text-gray-600 text-sm"
        >
          Father's Name
        </label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          value={fatherName}
          onChange={onInputChange}
          placeholder="Enter student's father name"
          required
          className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-blue-400 focus:border-blue-500 transition"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="dob" className="font-semibold text-gray-600 text-sm">
            DOB
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            onChange={onInputChange}
            required
            className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-blue-400 focus:border-blue-500 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="gender"
            className="font-semibold text-gray-600 text-sm"
          >
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            onChange={onInputChange}
            className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-blue-400 focus:border-blue-500 transition"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="studentClass"
            className="font-semibold text-gray-600 text-sm"
          >
            Class
          </label>
          <input
            type="number"
            id="studentClass"
            name="studentClass"
            onChange={onInputChange}
            placeholder="Enter Class"
            required
            className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-blue-400 focus:border-blue-500 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="rollNo"
            className="font-semibold text-gray-600 text-sm"
          >
            Roll No.
          </label>
          <input
            type="number"
            id="rollNo"
            name="rollNo"
            onChange={onInputChange}
            placeholder="Enter Roll No."
            required
            className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-blue-400 focus:border-blue-500 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
