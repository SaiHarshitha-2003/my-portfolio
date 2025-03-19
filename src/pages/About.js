import React from "react";
import "../style-about.css";
import java from "../assets/java.png";
import apsche from "../assets/apsche.png";
import pmkvy from "../assets/pmkvy.png";
import wipro from "../assets/wipro.png";
import email from "../assets/email.jpg";
import linkedin from "../assets/linkedin.png";

const About = () => {
  const resume = "https://drive.google.com/file/d/19z-XB8EJXK4KUvKkeKRLnd1QzHfT3VKH/view?usp=drive_link"
  return (
    <div className="about-container">
      <div className="career">
      {/* Career Objective */}
      <h2>Career Objective</h2>
      <p>Hi, I'm Sai Harshitha Tummala, a passionate Software Engineer/Developer eager to explore and grow in the worls of IT industry. Seeking an entry-level position in a dynamic organization where I can leverage my technical skills, contribute to innovative projects, and grow my expertise in emerging technologies.</p>
      </div>

      {/* Education */}
      <div className="education-section">
      <h2>Education</h2>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Course</th>
              <th>Institute</th>
              <th>Year of Passing</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>1.</td>
            <td>Bachelor of Technology</td>
            <td>KKR & KSR INSTITUTE OF TECHNOLOGY AND SCIENCES</td>
            <td>2025</td>
            <td>8.85</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Intermediate</td>
            <td>BHASHYAM JUNIOR COLLEGE</td>
            <td>2021</td>
            <td>10.0</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>SSC</td>
            <td>BHASHYAM HIGH SCHOOL</td>
            <td>2019</td>
            <td>10.0</td>
          </tr>
          </tbody>
        </table>
      </div>

      {/* Technical Skills */}
      <div className="technical">
      <h2>Technical Skills</h2>
      <div className="skill">
        <span>C</span>
        <span className="stars">★★★★☆</span>
      </div>
      <div className="skill">
        <span>Java</span>
        <span className="stars">★★★★☆</span>
      </div>
      <div className="skill">
        <span>Python</span>
        <span className="stars">★★★☆☆</span>
      </div>
      <div className="skill">
        <span>HTML</span>
        <span className="stars">★★★★☆</span>
      </div>
      <div className="skill">
        <span>CSS</span>
        <span className="stars">★★★☆☆</span>
      </div>
      <div className="skill">
        <span>MongoDB</span>
        <span className="stars">★★★☆☆</span>
      </div>
      </div>

      {/* Certifications */}
      <div className="certification">
        <h2>Certifications</h2>
        <div className="row">
          <div className="cert">
          <h3 className="cert-title">NPTEL Java Certification</h3>
          <p>The Java Elite NPTEL Certification is awarded by NPTEL (National Programme on Technology Enhanced Learning) for successfully completing the Java Programming course with a high score. This certification covers core Java concepts, object-oriented programming (OOP), exception handling, multithreading, collections, and Java frameworks. It is recognized for validating strong programming skills and problem-solving abilities in Java.</p>
          <img src={java} alt="Java" className="cert-img"></img><br></br><br></br>
          <a href="https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs74/Course/NPTEL23CS74S9363133120342896.pdf">Click here for more details</a>
          </div>

          <div className="cert">
          <h3 className="cert-title">APSCHE Full Stack Development using Python Internship</h3>
          <p>The APSCHE Full Stack Development using Python Internship is a training program organized by the Andhra Pradesh State Council of Higher Education (APSCHE) to equip students with hands-on experience in full-stack development. The program covers front-end technologies like HTML, CSS, JavaScript, and frameworks like React, along with back-end development using Python and Django. Participants gain practical experience in making them industry-ready for software development roles.</p>
          <img src={apsche} alt="Apsche" className="cert-img"></img><br></br><br></br>
          <a href="https://drive.google.com/file/d/1qhojY6p-iaiWP1T7uYNzH-LIIyr1Cz3g/view?usp=sharing">Click here for more details</a>
          </div>
        </div>

        <div className="row">
          <div className="cert">
          <h3 className="cert-title">PMKVY Software Programmer Certification</h3>
          <p>The PMKVY (Pradhan Mantri Kaushal Vikas Yojana) Software Programmer Certification is a government-recognized training program aimed at equipping individuals with software development skills. It covers programming languages, database management, web development, and software lifecycle processes. The certification validates proficiency in coding, debugging, and application development, enhancing employability in IT and software industries.</p>
          <img src={pmkvy} alt="PMKVY" className="cert-img"></img><br></br><br></br>
          <a href="https://drive.google.com/file/d/1OJ-eZRzSAMMEDi7GUMsqlfZQqL62SUJs/view?usp=sharing">Click here for more details</a>
          </div>

          <div className="cert">
          <h3 className="cert-title">WIPRO TalentNext Java Full Stack</h3>
          <p>The WIPRO TalentNext Java Full Stack Certification is a professional training program designed to equip individuals with full-stack development skills using Java. It covers front-end technologies like HTML, CSS, JavaScript, React/Angular, back-end development with Java, Spring Boot, and database management SQL/MongoDB. The program focuses on hands-on projects and software development methodologies to prepare candidates for real-world full-stack developer roles in the IT industry.</p>
          <img src={wipro} alt="Wipro" className="cert-img"></img><br></br><br></br>
          <a href="https://cert.diceid.com/cid/llz7opTsHb?verify=true">Click here for more details</a>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <h3>For more details</h3>
      <div className="contact-info">
        <img src={email} alt="Email" className="email-img"></img>
        <a href="mailto:21jr1a05f5@gmail.com" className="mail-id">21jr1a05f5@gmail.com</a>
      </div>
      <div className="contact-info">
        <img src={linkedin} alt="LinkedIn" className="linked-in"></img>
        <a href="https://www.linkedin.com/in/sai-harshitha-tummala-035444257/" className="linked" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </div>
      <div className="contact-info">
        <a href={resume} target="_blank" rel="noopener noreferrer">
        <button className="resume-btn">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default About;