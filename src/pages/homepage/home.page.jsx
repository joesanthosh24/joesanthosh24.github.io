/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";

import "./home.styles.css";
import CustomLightboxModal from "../../components/custom-modal/custom-modal.component";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="headingContent">
        <div className="container">
          <h1>Welcome to Empower Ability Labs!</h1>
          <p>
            Empower Ability Labs is a hub for learning and empathy-building. We
            are on a mission to foster understanding and promote inclusive
            digital experiences for all. We offer a range of services designed
            to promote accessibility awareness, drive inclusivity, and enhance
            the user experience. And help you find answers on How do people with
            disabilities use technology and navigate the digital world? What
            tools do they employ?
          </p>
        </div>
      </div>

      <div className="container position-relative">
        {modalIsOpen && (
          <CustomLightboxModal
            hidden={!modalIsOpen}
            headingText="Community Steering Committee"
            closeModal={() => setModalIsOpen(false)}
            labelledBy="modal_label"
            describedBy="modal_content"
            isOpen={modalIsOpen}
          >
            <p>
              We get an aha! moments from product managers who try our services
              for the first time. We offered many lab days, workshops and
              offered usability testing services to many companies and
              organizations including:
            </p>
            <ul>
              <li>McGill University</li>
              <li>Walmart.ca</li>
              <li>Apple.ca</li>
              <li>Google.ca</li>
              <li>Government of Canada</li>
            </ul>
          </CustomLightboxModal>
        )}
        <button className="community" onClick={() => setModalIsOpen(true)}>
          Meet The Empower Community
        </button>
        <div className="row">
          <div className="col-md-4">
            <h2>Our Approach</h2>
            <p>
              Empower Ability Labs utilizes a hands-on approach to raise
              awareness and promote empathy. Our immersive workshops and lab
              days provide participants with a unique opportunity to step into
              the shoes of individuals with disabilities and navigate the world
              from their perspective.
            </p>
            <a
              href="https://www.google.com/search/howsearchworks/our-approach/"
              target="_blank"
              title="Our Approach"
              className="learnMoreLink"
            >
              Learn More
            </a>
          </div>
          <div className="col-md-4">
            <h2>Services</h2>
            <p>
              Promote accessibility awareness and enhance the user experience.
            </p>
            <ul className="pl-3">
              <li>Empathy lab days and workshops.</li>
              <li>Go beyond WCAG compliance!</li>
              <li>Inspirational speakers.</li>
            </ul>
            <a
              href="https://www.elevenways.be/en/services"
              target="_blank"
              title="Services"
              className="learnMoreLink"
            >
              Learn More
            </a>
          </div>
          <div className="col-md-4">
            <h2>Testimonials</h2>
            <p>
              Invite a speaker with disabilities to share their unique journey.
              This captivating addition to your upcoming event will offer
              insights that resonate, inspire, educate, and enrich your team’s
              understanding of inclusion.
            </p>
            <a
              href="https://dictionary.cambridge.org/us/dictionary/english/testimonial"
              target="_blank"
              title="Testimonials"
              className="learnMoreLink"
            >
              Learn More
            </a>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Home;
