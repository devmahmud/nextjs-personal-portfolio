import { work_experiences, educations } from "../../pages/api/data";

const Experiences = () => {
  return (
    <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>Resume</h2>
          <span>Resume</span>
        </div>
        <div className="mi-smalltitle">
          <span className="mi-smalltitle-icon">
            <i className="lni lni-briefcase size-md"></i>
          </span>
          <h4>Working Experience</h4>
        </div>
        <div className="mi-resume-wrapper">
          {work_experiences &&
            work_experiences.map((item, i) => (
              <div className="mi-resume mt-30" key={i}>
                <div className="mi-resume-summary">
                  <h6 className="mi-resume-year">
                    {item.from} - {item.to}
                  </h6>
                </div>
                <div className="mi-resume-details">
                  <h5>{item.title}</h5>
                  <h6 className="mi-resume-company">{item.company}</h6>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-30"></div>
        <div className="mi-smalltitle">
          <span className="mi-smalltitle-icon">
            <i className="lni lni-book size-md"></i>
          </span>
          <h4>Educational Qualifications</h4>
        </div>
        <div className="mi-resume-wrapper">
          {educations &&
            educations.map((item, i) => (
              <div className="mi-resume mt-30" key={i}>
                <div className="mi-resume-summary">
                  <h6 className="mi-resume-year">
                    {item.from} - {item.to}
                  </h6>
                </div>
                <div className="mi-resume-details">
                  <h5>{item.title}</h5>
                  <h6 className="mi-resume-company">{item.institute}</h6>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
