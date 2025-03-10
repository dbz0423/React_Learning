import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const query = new URLSearchParams(useLocation().search);
  const username = query.get("username");
  const age = query.get("age");
  return (
    <div>
      <h2>About page</h2>
      <h3>username:{username}</h3>
      <h3>age:{age}</h3>
    </div>
  );
};

export default About;
