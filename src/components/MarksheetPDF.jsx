import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  schoolLogo: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  schoolInfo: {
    flex: 1,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  tagline: {
    fontSize: 11,
    color: "#555",
  },
  studentSection: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  studentImage: {
    width: 70,
    height: 90,
    marginRight: 15,
  },
  studentDetails: {
    flex: 1,
  },
  detailRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 6,
  },
  detailLabel: {
    fontWeight: "bold",
    width: "35%",
  },
  detailValue: {
    width: "65%",
  },
  subjectTable: {
    marginBottom: 20,
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    paddingBottom: 8,
    marginBottom: 8,
    fontWeight: "bold",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 6,
    marginBottom: 6,
  },
  tableCol: {
    flex: 1,
    paddingRight: 10,
  },
  tableColNum: {
    flex: 0.8,
    textAlign: "right",
  },
  resultSummary: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  resultBox: {
    textAlign: "center",
  },
  resultLabel: {
    fontSize: 9,
    color: "#555",
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});

const MarksheetPDF = ({
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
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* School Header */}
        <View style={styles.header}>
          {schoolLogo && <Image src={schoolLogo} style={styles.schoolLogo} />}
          <View style={styles.schoolInfo}>
            <Text style={styles.schoolName}>{schoolName}</Text>
            <Text style={styles.tagline}>{tagline}</Text>
          </View>
        </View>

        {/* Student Information */}
        <View style={styles.studentSection}>
          {studentImage && (
            <Image src={studentImage} style={styles.studentImage} />
          )}
          <View style={styles.studentDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Student Name:</Text>
              <Text style={styles.detailValue}>{studentName}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Father's Name:</Text>
              <Text style={styles.detailValue}>{fatherName}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>DOB:</Text>
              <Text style={styles.detailValue}>{dob}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Gender:</Text>
              <Text style={styles.detailValue}>{gender}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Class:</Text>
              <Text style={styles.detailValue}>{studentClass}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Roll No:</Text>
              <Text style={styles.detailValue}>{rollNo}</Text>
            </View>
          </View>
        </View>

        {/* Subjects Table */}
        <View style={styles.subjectTable}>
          <View style={styles.tableHeader}>
            <Text style={{ ...styles.tableCol }}>Subject Name</Text>
            <Text style={{ ...styles.tableColNum }}>Total</Text>
            <Text style={{ ...styles.tableColNum }}>Obtained</Text>
          </View>
          {subjects.map((subject, index) =>
            subject.subjectName ? (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCol}>{subject.subjectName}</Text>
                <Text style={styles.tableColNum}>{subject.totalMarks}</Text>
                <Text style={styles.tableColNum}>{subject.obtainedMarks}</Text>
              </View>
            ) : null
          )}
        </View>

        {/* Result Summary */}
        <View style={styles.resultSummary}>
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Total Marks</Text>
            <Text style={styles.resultValue}>{totalMarks}</Text>
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Obtained Marks</Text>
            <Text style={styles.resultValue}>{obtainedMarks}</Text>
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Percentage</Text>
            <Text style={styles.resultValue}>
              {percentage ? percentage.toFixed(2) : 0}%
            </Text>
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Grade</Text>
            <Text style={styles.resultValue}>{grade}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MarksheetPDF;
