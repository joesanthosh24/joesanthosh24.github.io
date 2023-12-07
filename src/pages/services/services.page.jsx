import React from "react";

const Services = () => {
  return (
    <>
      <div className="headingContent">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Our Services</h1>
              <p>
                Dedicated space or programs designed to cultivate empathy and
                understanding among individuals towards the challenges faced by
                people with disabilities in using technology and interacting
                with various environments.
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img
                className="img-fluid"
                src="https://joesanthosh24.github.io/accessible_page/images/services.png"
                alt="Smiley Face doing thumbs up"
                tabIndex="0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="servicesContainer container">
        <div>
          <h2>Empathy Lab days and workshops</h2>
          <p>
            The lab days and workshops typically provide hands-on experiences,
            simulations, and interactions with assistive technologies, tools,
            and scenarios that replicate the obstacles individuals with
            disabilities encounter daily.
          </p>
        </div>
        <div>
          <h2>Inspirational speakers</h2>
          <p>
            Invite a speaker with disabilities to take share their unique
            journey. This captivating addition to your upcoming event will offer
            insights that resonate, inspire, educate, and enrich your team
            collective understanding of inclusion.
          </p>
        </div>
        <div>
          <h2>Usability testing</h2>
          <p>
            Go beyond WCAG! Involve individuals with disabilities in usability
            testing to gather valuable insights for refining product strategy
            and identifying accessibility concerns at an early stage when
            solutions are more feasible and cost-effective. You have access to a
            diverse community of people with disabilities, who use various
            assistive technologies. With technical expertise ranging from novice
            to expert, our community can support your product lifecycle from
            user research, to design, to QA.
          </p>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Services;
