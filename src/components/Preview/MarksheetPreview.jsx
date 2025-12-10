import React from "react";
import SchoolHeader from "./SchoolHeader";
import StudentInfo from "./StudentInfo";
import SubjectPreview from "./SubjectPreview";
import ResultSummary from "./ResultSummary";

const MarksheetPreview = ({
  schoolLogo,
  schoolName,
  tagline,
  studentImage,
  studentName,
  fatherName,
  dob,
  gender,
  studentClass,
  rollNo,
  subjects,
  totalMarks,
  obtainedMarks,
  grade,
  percentage,
  schoolphoto,
  studentphoto,
}) => {
  return (
    <div
      className="bg-white h-auto rounded-xl border-rose-500 border-r-4 border-l-4 shadow-lg p-3 sm:p-4"
      style={{ pageBreakAfter: "avoid" }}
    >
      <h1 className="text-lg sm:text-2xl text-gray-600 font-bold text-center pt-3 sm:pt-4 border-b-2 border-gray-300 pb-2">
        Marksheet Preview
      </h1>

      <SchoolHeader
        schoolLogo={schoolLogo}
        schoolName={schoolName}
        tagline={tagline}
        schoolphoto={schoolphoto}
      />

      <StudentInfo
        studentImage={studentImage}
        studentName={studentName}
        fatherName={fatherName}
        dob={dob}
        gender={gender}
        studentClass={studentClass}
        rollNo={rollNo}
        studentphoto={studentphoto}
      />

      <SubjectPreview subjects={subjects} />

      <ResultSummary
        totalMarks={totalMarks}
        obtainedMarks={obtainedMarks}
        grade={grade}
        percentage={percentage}
      />
    </div>
  );
};

export default MarksheetPreview;
