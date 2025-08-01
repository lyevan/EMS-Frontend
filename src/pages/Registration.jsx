import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FileUser, BookUser, Siren, Users, GraduationCap } from "lucide-react";
import axios from "axios";



// Database Schema for Registration

//   -- Basic Info
//   first_name VARCHAR(100),
//   middle_name VARCHAR(100),
//   last_name VARCHAR(100),
//   suffix VARCHAR(10),
//   nickname VARCHAR(50),
//   gender VARCHAR(10),
//   birth_date DATE,
//   birth_place VARCHAR(255),
//   civil_status VARCHAR(50), -- Single, Married, Widowed, etc.
//   nationality VARCHAR(100),
//   religion VARCHAR(100),

//   -- Contact Info
//   email VARCHAR(255) UNIQUE,
//   phone VARCHAR(20),
//   alternate_phone VARCHAR(20),
//   present_address TEXT,
//   permanent_address TEXT,

//   -- Government IDs
//   sss_number VARCHAR(20),
//   pagibig_number VARCHAR(20),
//   philhealth_number VARCHAR(20),
//   tin_number VARCHAR(20),

//   -- Employment Info
//   department VARCHAR(100),
//   position VARCHAR(100),
//   employment_type VARCHAR(50), -- Full-time, Part-time, Contractual
//   expected_salary NUMERIC(10, 2),
//   resume_link TEXT, -- Optional: for resume file location (S3, Firebase, etc.)

//   -- Emergency Contact
//   emergency_contact_name VARCHAR(100),
//   emergency_contact_relationship VARCHAR(50),
//   emergency_contact_phone VARCHAR(20),
//   emergency_contact_address TEXT,

//   -- Family Background
//   spouse_name VARCHAR(100),
//   spouse_occupation VARCHAR(100),
//   father_name VARCHAR(100),
//   mother_name VARCHAR(100),

//   -- Education
//   highest_education VARCHAR(100),
//   school_name VARCHAR(255),
//   course_or_major VARCHAR(100),
//   graduation_year INT,

//   -- Bank Details
//   bank_name VARCHAR(100),
//   bank_account_number VARCHAR(30),

//   -- System Fields
//   status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
//   token UUID DEFAULT gen_random_uuid(),
//   submitted_at TIMESTAMP DEFAULT NOW()

//     email,
//     phone,
//     department,
//     position,
//     hourly_rate,
//     hire_date,
//     status = "active",
//     account_type = "employee",

const Registration = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  // Verify first before displaying the form
  //   useEffect(() => {
  //     const verifyToken = async () => {
  //       try {
  //         const result = await axios.get(
  //           `/invite/complete-registration/${token}`
  //         );
  //         console.log("Result:", result.data?.valid);
  //       } catch (error) {
  //         console.error("Error displaying registration form:", error.message);
  //         if (!error.response.data.valid) {
  //           navigate("/unauthorized");
  //         }
  //       }
  //     };
  //     verifyToken();
  //   }, []);

  console.log(token);
  return (
    <div>
      <div>
        <ul className="steps steps-vertical">
          <li className="step step-warning">
            <span className="step-icon">
              <FileUser size={20} />
            </span>
            Basic
          </li>
          <li className="step">
            <span className="step-icon">
              <BookUser size={20} />
            </span>
            Contact
          </li>
          <li className="step">
            <span className="step-icon">
              <GraduationCap size={20} />
            </span>
            Education
          </li>
          <li className="step">
            <span className="step-icon">
              <Users size={20} />
            </span>
            Family Background
          </li>
          <li className="step">
            <span className="step-icon">
              <Siren size={20} />
            </span>
            Emergency Contact
          </li>
        </ul>
      </div>
      <form></form>
    </div>
  );
};

export default Registration;
