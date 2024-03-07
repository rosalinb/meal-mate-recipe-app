import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <article className="footer-wrapper">
      <section className="footer-info">
        <h6>Some facts about us & MealMate</h6>
        <p>
          This application is build with React & Typscript as final project at
          General Assembly.
        </p>
        <p>Do you admire our application! & would you like to build one?</p>
        <p>
          If your are looking for the source code, visit
          <a
            href="https://github.com/rosalinb/meal-mate/tree/main/meal-mate"
            target="blank"
          >
            <span> my Github repo.</span>
          </a>
        </p>
        <p>
          If want to learn about coding, best place to begin with is
          <a
            href="http://generalassemb.ly/education/software-engineering-immersive/sydney"
            target="blank"
          >
            <span> GA.</span>
          </a>
        </p>
        <a
          href="https://github.com/rosalinb/meal-mate/tree/main/meal-mate"
          target="blank"
        ></a>
      </section>

      <section className="social-media-container">
        <h3>Get to know us more:</h3>
        <div className="social-media">
          <a
            href="https://www.facebook.com/Masala-Pinch-109511260758031"
            target="blank"
          >
            <FaFacebook />
          </a>

          <a href="https://tweetit-tweeter.herokuapp.com/" target="blank">
            <FaTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/dev-rosalin-biswal/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </article>
  );
}
