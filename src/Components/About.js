import React from "react";

export const About = () => {
  return (
    <div className="aboutSkills">
      <div className="about">
        <div className="aboutSection">
          <div className="aboutimg">
            <h1>
              About <br />
              me
            </h1>
          </div>
        </div>
        <div className="aboutSection">
          <div className="aboutDiv">
            <p>
              I'm an Enthusiastic and dedicated individual with a passion for
              technology and a desire to excel in the field of software
              engineering.Eager to leverage my strong problem-solving skills,
              attention to detail, and commitment to continuous learning and
              contribute to innovative projects.
            </p>

            <p>
              Strong written and verbal communication skills developed through
              coursework and public speaking engagements. Self-motivated and
              eager to learn, with a demonstrated ability to quickly grasp new
              concepts and solid experience leveraging Artificial Intelligence,
              to enhance user experiences, optimize processes, and make
              data-driven decisions.
            </p>

            <button>Contact me</button>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>
          My Skills <i className="fa-solid fa-arrow-left" id="arrow"></i>
        </h1>

        <div className="skillIcons">
          <div className="icons">
            <i className="fa-brands fa-html5" id="icon"></i>
            <h4>HTML</h4>
          </div>

          <div className="icons">
            <i class="fa-brands fa-css3" id="icon"></i>
            <h4>CSS</h4>
          </div>

          <div className="icons">
            <i class="fa-brands fa-js" id="icon"></i>
            <h4>JavaScript</h4>
          </div>

          <div className="icons">
            <i class="fa-brands fa-react" id="icon"></i>
            <h4>React</h4>
          </div>

          <div className="icons">
            <i class="fa-brands fa-python" id="icon"></i>
            <h4>Python</h4>
          </div>

          <div className="icons">
            <i class="fa-brands fa-git" id="icon"></i>
            <h4>Git</h4>
          </div>

          <div className="icons">
            <i class="fa-brands fa-linux" id="icon"></i>
            <h4>Linux</h4>
          </div>

          <div className="icons">
            <i class="fa-solid fa-c" id="icon"></i>
            <h4>C</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
