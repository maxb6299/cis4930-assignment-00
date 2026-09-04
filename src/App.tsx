import React from "react";
import "./App.css";

import profile from "./assets/profile.png";

function App() {
  return (
    <div className="App">
      <title>Max Boyington | About Me</title>
      <header className="header">
        <nav>
          <a href="#about">Home</a>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            I'm a neuroscience researcher from Miami, Florida. I am finishing my
            bachelor's in computer science at Florida State. Afterwards, I plan
            to pursue a PhD in neuroscience, where I can continue my work in
            creating brain-computer interfaces and neurofeedback systems.
          </p>
          <p>
            Outside of my work, I enjoy reading, rock climbing, hiking, cooking,
            fashion and more.{" "}
          </p>
          <img className="profile" src={profile} alt="Picture of Max" />
        </section>
        <br />

        <section id="experience">
          <h2>Experiences</h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3>
                Thesis on EEG-Based Classification of Mind-Wandering in
                Meditators
              </h3>
              <div>September 2025 - Present</div>
              <p>
                An early stage of a neurofeedback system I plan to create.
                Exploring latest techniques in EEG machine-learning for
                subjective brain states like meditation.
              </p>
            </div>
            <div className="experience-item">
              <h3>Research Assistant in Boulder, CO</h3>
              <div>Summer 2026</div>
              <p>
                Implemented a computational biophysical simulation of the brain
                to explore how certain brain waves affect memory consolidation.
                Got to present my findings at a small conference.
              </p>
            </div>
            <div className="experience-item">
              <h3>Research Assistant in Tallahassee, FL</h3>
              <div>February 2025 - March 2026</div>
              <p>
                Got my feet wet with neuroscience. Mostly did EEG analysis and
                attended journal clubs.
              </p>
            </div>
            <div className="experience-item">
              <h3>Web Developer, Remote</h3>
              <div>February 2024 - February 2025</div>
              <p>Made a website for a startup company.</p>
            </div>
          </div>
        </section>
        <br />

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: mrb22p (at) fsu (dot) edu</p>
          <p>
            <a href="https://linkedin.com/in/max-boyington">LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/maxb6299/">GitHub</a>
          </p>
        </section>
        <br />
      </main>
    </div>
  );
}

export default App;
