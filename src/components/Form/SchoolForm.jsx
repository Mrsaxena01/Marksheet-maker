import React from "react";

const SchoolForm = ({ schoolName, tagline, onImageChange, onInputChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-700 border-b-2 border-purple-500 pb-2">
        School Information
      </h3>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="schoolLogo"
          className="font-semibold text-gray-600 text-sm"
        >
          School's Logo
        </label>
        <input
          type="file"
          accept="image/*"
          id="schoolLogo"
          name="schoolLogo"
          onChange={onImageChange}
          required
          className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-purple-400 focus:border-purple-500 transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="schoolName"
          className="font-semibold text-gray-600 text-sm"
        >
          School's Name
        </label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={schoolName}
          placeholder="Enter School's Name"
          onChange={onInputChange}
          required
          className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-purple-400 focus:border-purple-500 transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="tagline"
          className="font-semibold text-gray-600 text-sm"
        >
          School's Tagline
        </label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={tagline}
          placeholder="Enter School's Tagline"
          onChange={onInputChange}
          required
          className="border-2 border-gray-300 p-2 rounded-lg outline-none hover:border-purple-400 focus:border-purple-500 transition"
        />
      </div>
    </div>
  );
};

export default SchoolForm;
