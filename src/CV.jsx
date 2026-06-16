
import React from "react";
import {
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function CV() {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial,sans-serif;
        }

        body{
          background:#d9d9d9;
        }

        .resume{
          width:1000px;
          margin:20px auto;
          display:flex;
          background:white;
          box-shadow:0 0 15px rgba(0,0,0,0.1);
        }

        .left{
          width:35%;
          background:#dcdcdc;
          padding:30px;
        }

        .right{
          width:65%;
          background:white;
        }

        .profile{
          text-align:center;
          margin-bottom:30px;
        }

        .profile img{
          width:150px;
          height:150px;
          border-radius:50%;
          object-fit:cover;
          border:5px solid white;
        }

        .section{
          margin-bottom:30px;
        }

        .section h2{
          font-size:20px;
          margin-bottom:15px;
          border-bottom:2px solid #1f2937;
          padding-bottom:5px;
        }

        .skill{
          margin-bottom:15px;
        }

        .bar{
          width:100%;
          height:8px;
          background:#e5e7eb;
          margin-top:5px;
        }

        .fill{
          height:100%;
          background:#1f2937;
        }

        .english{
          width:60%;
        }

        .japanese{
          width:50%;
        }

        .telugu{
          width:80%;
        }

        .header{
          padding:30px;
          border-bottom:1px solid #ddd;
        }

        .header h1{
          font-size:50px;
          color:#111827;
          margin-bottom:10px;
        }

        .header p{
          margin:8px 0;
        }

        .content-section{
          padding:30px;
          border-bottom:1px solid #ddd;
        }

        .content-section h2{
          margin-bottom:15px;
          color:#111827;
        }

        .content-section p{
          line-height:1.8;
        }

        ul{
          padding-left:20px;
        }

        li{
          margin-bottom:12px;
        }

        .download{
          text-align:center;
          padding:25px;
        }

        button{
          background:#111827;
          color:white;
          border:none;
          padding:12px 25px;
          border-radius:5px;
          cursor:pointer;
        }

        button:hover{
          background:#374151;
        }

        @media(max-width:900px){
          .resume{
            width:95%;
            flex-direction:column;
          }

          .left,.right{
            width:100%;
          }
        }

        @media print{
          button{
            display:none;
          }

          body{
            background:white;
          }

          .resume{
            box-shadow:none;
          }
        }
      `}</style>

      <div className="resume">
        <div className="left">

          <div className="profile">
            <img
              src="https://i.pravatar.cc/300?img=12"
              alt="profile"
            />
          </div>

          <div className="section">
            <h2>SKILLS</h2>
            <ul>
              <li>Problem Solving</li>
              <li>Full Stack Development</li>
              <li>Java</li>
              <li>Python</li>
              <li>React</li>
              <li>Spring Boot</li>
            </ul>
          </div>

          <div className="section">
            <h2>LANGUAGES</h2>

            <div className="skill">
              English
              <div className="bar">
                <div className="fill english"></div>
              </div>
            </div>

            <div className="skill">
              Japanese
              <div className="bar">
                <div className="fill japanese"></div>
              </div>
            </div>

            <div className="skill">
              Telugu
              <div className="bar">
                <div className="fill telugu"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">

          <div className="header">
            <h1>SHAIK ABDULLA</h1>

            <p>Software Engineer</p>

            <p>
              <FaEnvelope /> shaikabdulla2k6@gmail.com
            </p>

            <p>
              <FaPhone /> +91 9390971929
            </p>
          </div>

          <div className="content-section">
            <h2>SUMMARY</h2>

            <p>
              As a dedicated and enthusiastic Computer Science student,
              I am eager to contribute my skills and passion to a dynamic
              environment. My commitment to excellence and continuous
              learning makes me a strong candidate for software
              development and technology-focused roles.
            </p>
          </div>

          <div className="content-section">
            <h2>EXPERIENCE</h2>

            <h4>Student, KL University, Vaddeswaram</h4>

            <p>Aug 2025 – Present</p>

            <ul>
              <li>Developed leadership skills through team projects.</li>
              <li>Improved communication through collaborations.</li>
              <li>Achieved strong academic performance.</li>
              <li>Built multiple software and database projects.</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>EDUCATION</h2>

            <h4>B.Tech CSE (AI & ML)</h4>

            <p>KL University, Vaddeswaram</p>

            <ul>
              <li>Specialization in Artificial Intelligence & Machine Learning</li>
              <li>Strong focus on Programming and Databases</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>PROJECTS</h2>

            <ul>
              <li>Job Portal System using React, FastAPI, Spring Boot and PostgreSQL</li>
              <li>IBM HR Analytics Employee Attrition Analysis</li>
              <li>Tourist Route Planner using AI Search Algorithms</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>HOBBIES & INTERESTS</h2>

            <ul>
              <li>Travelling</li>
              <li>Watching Movies</li>
              <li>Competitive Programming</li>
              
            </ul>
          </div>

          <div className="download">
            <button onClick={() => window.print()}>
              Download CV
            </button>
          </div>

        </div>
      </div>
    </>
  );
}