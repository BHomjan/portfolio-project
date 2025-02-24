import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MANISH
              <br />
              <span>BHOMJAN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">DATA-ENGINEER</div>
              <div className="landing-h2-2">AI-ENTHUSIAST</div>
            </h2>
            <h2>
              <div className="landing-h2-info">DATA-ENGINEER</div>
              <div className="landing-h2-info-1">AI-ENTHUSIAST</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
