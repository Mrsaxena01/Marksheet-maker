import React from "react";
import { pdf } from "@react-pdf/renderer";
import MarksheetPDF from "../components/MarksheetPDF";

const usePdfDownload = () => {
  const generatePdf = async (data, filename) => {
    try {
      // Create PDF document component
      const doc = (
        <MarksheetPDF
          studentName={data.studentName}
          fatherName={data.fatherName}
          dob={data.dob}
          gender={data.gender}
          studentClass={data.studentClass}
          rollNo={data.rollNo}
          schoolName={data.schoolName}
          tagline={data.tagline}
          subjects={data.subjects}
          totalMarks={data.totalMarks}
          obtainedMarks={data.obtainedMarks}
          grade={data.grade}
          percentage={data.percentage}
          studentImage={data.studentImage}
          schoolLogo={data.schoolLogo}
        />
      );

      // Generate PDF blob
      const pdfBlob = await pdf(doc).toBlob();

      // Create download link
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      return { success: true, message: "PDF downloaded successfully!" };
    } catch (error) {
      console.error("PDF generation error:", error);
      throw new Error("Failed to generate PDF. Please try again.");
    }
  };

  return { generatePdf };
};

export default usePdfDownload;

