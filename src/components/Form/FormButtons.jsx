import { Book, Download } from "lucide-react";
import React from "react";

const FormButtons = ({ onAddSubject, onGenerateMarksheet }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-6 py-4 flex-wrap">
      <button
        onClick={onAddSubject}
        className="flex-1 sm:flex-none bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 active:shadow-none transition-all duration-500 ease-in-out active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        <Book size={18} /> Add subject
      </button>

      <button
        onClick={onGenerateMarksheet}
        className="flex-1 sm:flex-none px-5 py-2 rounded-lg font-semibold text-white bg-linear-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 active:scale-95 active:shadow-none transition-all duration-500 ease-in-out focus:outline-none flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        <Download size={18} /> Generate Marksheet
      </button>
    </div>
  );
};

export default FormButtons;
