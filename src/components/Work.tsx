import { useEffect } from "react";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Work() {
  useEffect(() => {
    console.log("Work component mounted");

    let translateX: number = 0;

    // Function to set translateX based on the DOM
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return; // Ensure work-box exists before proceeding

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    // Delay the calculation to ensure the DOM is ready
    setTimeout(() => {
      setTranslateX();
      console.log("translateX calculated:", translateX); // Log translateX for debugging
    }, 50);

    // Create GSAP timeline with scroll trigger
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: "transform", // Pinning using transform for smoother scrolling
        id: "work",
        onEnter: () => console.log("ScrollTrigger entered"), // Debug when ScrollTrigger enters
      },
    });

    // Animation for work section
    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });

    // Cleanup ScrollTrigger when component unmounts
    return () => {
      // Ensure ScrollTrigger instance is properly killed
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      console.log("ScrollTrigger killed");
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {/* Project 1: E-Notes */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>E-Notes</h4>
                  <p>Web Application</p>
                </div>
              </div>
              <h4>Languages and Tools</h4>
              <p>HTML, CSS, PHP</p>
            </div>
          </div>

          {/* Project 2: Snake and Ladders */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Snake and Ladders</h4>
                  <p>Game Development</p>
                </div>
              </div>
              <h4>Languages and Tools</h4>
              <p>C++</p>
            </div>
          </div>

          {/* Project 3: Hello Doctor */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Hello Doctor</h4>
                  <p>Web Scraper</p>
                </div>
              </div>
              <h4>Languages and Tools</h4>
              <p>Python, BeautifulSoup</p>
            </div>
          </div>

          {/* Project 4: Final Year Project */}
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Classification Analysis-based Approach to Internet Adoption in Nepal</h4>
                  <p>Research</p>
                </div>
              </div>
              <h4>Conference</h4>
              <p>IEEE Conference 2025</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Work;
