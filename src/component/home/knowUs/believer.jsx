import React from "react";
import "./Beliver.css";
export default function believer() {
  return (
    <>
    <section className="Beleiver">
      <p className="BelievePTag">
        What we <span>believe</span> in...
        <span id="appleIcon">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/48/thinking-face_1f914.png"
            alt=""
          />
        </span>
      </p>
      <div className="believeCenterDiv">
        <div className="believeCenterCol">
          <p>
            Being a <span>forum for young entrepreneurs</span> and assisting
            them in launching their businesses via providing useful information
            that indicates an organization's ability to{" "}
            <span> function as a cohesive one.</span>
          </p>
        </div>
        {/* <div class="believeCenterCol">
                  <p>
                      Providing useful information that indicates an organization's ability to <span>function as a
                          cohesive one.</span>
                  </p>
              </div> */}
        <div className="believeCenterCol">
          <p>
            Organizing entrepreneurial activities to
            <span> boost the confidence</span> of aspiring entrepreneurs.
          </p>
        </div>
        <div className="believeCenterCol">
          <p>
            Implementing an <span>industry-focused mindset</span> with a
            distinct perspective on things.
          </p>
        </div>
        <div className="believeCenterCol">
          <p>
            Aiming in
            <span> providing a hospitable and welcoming environment</span> among
            team members, collaborators, and participants.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
