import React from "react";
import safari from "../images/safariQuest.png";
import vista from "../images/vroomvista.png";
import uh from "../images/uh-page.png";
import linear from "../images/gradient.png";
import books from "../images/books.png";

export const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="container">
        <div className="card">
          <img src={safari} alt="" />
          <p>
            Safari Quest: A food and travel destination where captivating
            stories, stunning visuals, and delightful recipes take you on a
            global culinary journey. Explore diverse cultures and savor the
            universal language of food with every bite.
          </p>
          <button>
            <a href="https://margaretnannyonjo.github.io/Safari-Quest/">
              Live Demo
            </a>
          </button>
        </div>

        <div className="card">
          <img src={vista} alt="" />
          <p>
            VroomVista: Your go-to car rental platform for a seamless,
            hassle-free experience. Explore a diverse fleet, transparent
            policies, and competitive rates. Elevate your travel with effortless
            vehicle booking for business or leisure.
          </p>

          <button>
            <a href=" https://margaretnannyonjo.github.io/car-renting/">
              Live Demo
            </a>
          </button>
        </div>

        <div className="card">
          <img src={uh} alt="" />
          <p>
            Unity Hospital website: Your gateway to essential medical info,
            services, and resources. Explore healthcare options, find expert
            professionals, and discover patient-centric programs with ease.
          </p>

          <button>
            <a href=" https://margaretnannyonjo.github.io/hospital-landing_page/">
              Live Demo
            </a>
          </button>
        </div>

        <div className="card">
          <img src={linear} alt="" />

          <p>
            Color Wave Explorer: Dive into creativity with this project,
            enabling users to craft personalized gradient color combinations.
            Explore a spectrum of hues and witness real-time background changes.
            An intuitive tool for enhancing web designs and visual projects
            effortlessly.
          </p>

          <button>
            <a href=" https://margaretnannyonjo.github.io/make-your_gradients/">
              Live Demo
            </a>
          </button>
        </div>

        <div className="card">
          <img src={books} alt="" />
          <p>
            The Book Shelf: An online book store project offering a curated
            collection of literary wonders. Dive into a digital haven for book
            enthusiasts, featuring an extensive library, user-friendly browsing,
            and seamless transactions. Discover, explore, and embark on your
            reading journey with The Book Shelf.
          </p>
          <button>
            <a href=" https://margaretnannyonjo.github.io/book_store/">
              Live Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
