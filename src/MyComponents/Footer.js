import React from "react";

export default function Footer() {
  return (
    <div className="card ">
      <div className="card-header text-center">
        Recipe Wave
      </div>
      <div className="card-body text-center">
        <figure className="mb-0">
          <blockquote className="blockquote">
            <p>
              “Love is the secret ingredient.”
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Thomas Keller in <cite title="Source Title">Food Culture</cite>
          </figcaption>
          <br></br>
          <figcaption className="blockquote-footer"><cite>Recipe Wave &copy; {new Date().getFullYear()} | All Rights Reserved | Created by Krishna Dani</cite> </figcaption> 
        </figure>
      </div>
    </div>
  );
}
