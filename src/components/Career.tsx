import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Analyst</h4>
                <h5>GrowByData</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked on cloud infrastructure monitoring and optimization. 
              Assisted in data analysis, automation, and performance tuning of cloud-based applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Researcher</h4>
                <h5>Everest Engineering College</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Conducting research on internet adoption in Nepal, focusing on 
              digital literacy, socio-economic factors, and technological infrastructure. 
              The study has been accepted for IEEE Conference 2025.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer & AI Enthusiast</h4>
                <h5>Independent Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing projects related to data engineering and AI. 
              Created an E-Notes platform for students and a web scraper for doctor schedules. 
              Exploring advanced data analytics and machine learning solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

