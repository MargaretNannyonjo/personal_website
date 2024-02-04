import React from "react";
import myimage from "../images/picture.jpeg";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeSection1">
          <h2>FRONT END DEVELOPER</h2>
          <h1>
            <em>
              Margaret <br /> Nannyonjo
            </em>
          </h1>

          <p> Based in Uganda</p>
        </div>

        <div className="homeSection2">
          <img src={myimage} alt="" />
        </div>

        <div className="socials">
          <a href="https://www.linkedin.com/in/margaret-nannyonjo-b150b0233/">
            <i className="fab fa-linkedin" id="media"></i>
          </a>

          <a href="https://twitter.com/Leaney27">
            <i className="fa-brands fa-twitter" id="media"></i>
          </a>
          <a href="https://github.com/MargaretNannyonjo">
            <i className="fa-brands fa-github" id="media"></i>
          </a>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
};
