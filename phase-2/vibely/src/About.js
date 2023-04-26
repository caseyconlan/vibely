import React from "react";
import "./App.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Quotely</h1>
      <p>
        Quotey is a website that generates random pictures and quotes to provide
        inspiration and encouragement to its users. Whether you want something to
        post to their social media pages, need a quote for a work presentation, or 
        just want to find the silliest combinations, our app has the right picture 
        and prosaic inspo for you!
      </p>
      <h2>Meet the Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img
            src={process.env.PUBLIC_URL + '/images/Derrick.jpeg'}
            alt="Team Member 1"
            className="team-member-image"
          />
          <h3>Derrick Cleavall</h3>
          <p>CEO</p>
          <p1>Knows all the lyrics to Billy Joel's "We Didn't Start the Fire"</p1>
        </div>
        <div className="team-member">
          <img
            src={process.env.PUBLIC_URL + '/images/Bruce.jpeg'}
            alt="Team Member 2"
            className="team-member-image"
          />
          <h3>Bruce Hillsworth</h3>
          <p>COO</p>
          <p1>Internationally ranked extreme couponer</p1>
        </div>
        <div className="team-member">
        <img
            src={process.env.PUBLIC_URL + '/images/Casey.jpg'}
            alt="Casey Conlan"
            className="team-member-image"
          />
          <h3>Casey Conlan</h3>
          <p>CFO</p>
          <p1>Banned from Area 51 for "Reasons Not Disclosed"</p1>
        </div>
      </div>
    </div>
  );
}

export default About;
