import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import schoolphoto from "./assets/school.png";
import studentphoto from "./assets/student.jpg";
import StudentForm from "./components/Form/StudentForm";
import SchoolForm from "./components/Form/SchoolForm";
import SubjectTable from "./components/Form/SubjectTable";
import FormButtons from "./components/Form/FormButtons";
import MarksheetPreview from "./components/Preview/MarksheetPreview";
import usePdfDownload from "./hooks/usePdfDownload.jsx";

const App = () => {
  const { generatePdf } = usePdfDownload();
  const [subjects, setSubjects] = useState([]);
  const [studentImage, setStudentImage] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [schoolName, setSchoolName] = useState("");
  const [tagline, setTagline] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [rollNo, setRollNo] = useState(null);

  const totalMarks = subjects.reduce(
    (total, subject) => total + Number(subject.totalMarks || 0),
    0
  );

  const obtainedMarks = subjects.reduce(
    (total, subject) => total + Number(subject.obtainedMarks || 0),
    0
  );

  const handleAddSubject = () => {
    setSubjects([
      ...subjects,
      { subjectName: "", totalMarks: "100", obtainedMarks: "" },
    ]);
  };

  const removeSubject = (index) => {
    const updatedSubjects = subjects.filter((item, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const handleChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const inputValue = (e) => {
    const { name, value } = e.target;

    const inputHandlers = {
      schoolName: () => setSchoolName(value),
      studentName: () => setStudentName(value),
      fatherName: () => setFatherName(value),
      dob: () => setDob(value),
      gender: () => setGender(value),
      studentClass: () => {
        if (value >= 1 && value <= 12) {
          setStudentClass(value);
        } else if (value !== "") {
          toast.error("Please Enter a valid class (1-12)");
        }
      },
      rollNo: () => setRollNo(value),
      tagline: () => setTagline(value),
    };

    inputHandlers[name]?.();
  };

  const imagePreview = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const name = e.target.name;
    const url = URL.createObjectURL(file);

    const imageHandlers = {
      studentImage: () => setStudentImage(url),
      schoolLogo: () => setSchoolLogo(url),
    };

    imageHandlers[name]?.();
  };

  let grade = "";
  const percentage = (obtainedMarks / totalMarks) * 100;

  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B+";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 50) {
    grade = "C";
  } else if (percentage >= 40) {
    grade = "D";
  } else {
    grade = "F";
  }

  const handleGenerateMarksheet = async () => {
    if (!studentName || !schoolName) {
      toast.error("Please fill in student name and school name");
      return;
    }

    if (subjects.length === 0) {
      toast.error("Please add at least one subject");
      return;
    }

    const hasEmptySubjects = subjects.some(
      (subject) =>
        !subject.subjectName || !subject.totalMarks || !subject.obtainedMarks
    );

    if (hasEmptySubjects) {
      toast.error("Please fill in all subject details");
      return;
    }

    try {
      // Prepare data object for PDF generation
      const pdfData = {
        studentName,
        fatherName,
        dob,
        gender,
        studentClass,
        rollNo,
        schoolName,
        tagline,
        subjects,
        totalMarks,
        obtainedMarks,
        grade,
        percentage,
        studentImage,
        schoolLogo,
      };

      await generatePdf(pdfData, `${studentName}_Marksheet.pdf`);
      toast.success("Marksheet downloaded successfully!");
    } catch (error) {
      console.error("Error generating marksheet:", error);
      toast.error(error.message || "Error generating marksheet");
    }
  };
  return (
    <div className="bg-gray-300 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full min-h-screen py-4 px-4 sm:px-6">
      <div className="bg-white pb-4 h-auto rounded-xl border-rose-500 border-r-4 border-l-4 shadow-lg">
        <h1 className="text-xl sm:text-2xl text-gray-600 font-bold text-center pt-4 px-4">
          Marksheet Creator
        </h1>

        <div>
          <form action="">
            <div className="px-4 sm:px-6 pt-4 pb-6 space-y-6 border-t-2 border-gray-200">
              <StudentForm
                studentName={studentName}
                fatherName={fatherName}
                dob={dob}
                gender={gender}
                studentClass={studentClass}
                rollNo={rollNo}
                onImageChange={imagePreview}
                onInputChange={inputValue}
              />

              <div className="border-t pt-6"></div>

              <SchoolForm
                schoolName={schoolName}
                tagline={tagline}
                onImageChange={imagePreview}
                onInputChange={inputValue}
              />
            </div>
          </form>

          <FormButtons
            onAddSubject={handleAddSubject}
            onGenerateMarksheet={handleGenerateMarksheet}
          />

          <SubjectTable
            subjects={subjects}
            onSubjectChange={handleChange}
            onRemoveSubject={removeSubject}
          />
        </div>
      </div>

      <div className=" h-auto">
        <MarksheetPreview
          schoolLogo={schoolLogo}
          schoolName={schoolName}
          tagline={tagline}
          studentImage={studentImage}
          studentName={studentName}
          fatherName={fatherName}
          dob={dob}
          gender={gender}
          studentClass={studentClass}
          rollNo={rollNo}
          subjects={subjects}
          totalMarks={totalMarks}
          obtainedMarks={obtainedMarks}
          grade={grade}
          percentage={percentage}
          schoolphoto={schoolphoto}
          studentphoto={studentphoto}
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
