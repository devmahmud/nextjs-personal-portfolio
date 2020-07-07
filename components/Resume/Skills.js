import { useState, useEffect } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([
    { name: "HTML5", level: "0%" },
    { name: "CSS3", level: "0%" },
    { name: "Javascript", level: "0%" },
    { name: "jQuery", level: "0%" },
    { name: "ReactJS", level: "0%" },
    { name: "Next JS", level: "0%" },
    { name: "Python", level: "0%" },
    { name: "Django", level: "0%" },
    { name: "Django Rest Framework", level: "0%" },
    { name: "GraphQL", level: "0%" },
    { name: "Mysql", level: "0%" },
    { name: "Postgresql", level: "0%" },
  ]);

  useEffect(() => {
    setSkills([
      { name: "HTML5", level: "92%" },
      { name: "CSS3", level: "85%" },
      { name: "Javascript", level: "85%" },
      { name: "jQuery", level: "70%" },
      { name: "ReactJS", level: "75%" },
      { name: "Next JS", level: "80%" },
      { name: "Python", level: "80%" },
      { name: "Django", level: "87%" },
      { name: "Django Rest Framework", level: "77%" },
      { name: "GraphQL", level: "60%" },
      { name: "Mysql", level: "65%" },
      { name: "Postgresql", level: "72%" },
    ]);
  }, []);

  return (
    <div className="mi-skills-area mi-section mi-padding-top">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>My Skills</h2>
          <span>My Skills</span>
        </div>
        <div className="mi-skills">
          <div className="row mt-30-reverse">
            {skills &&
              skills.map((skill, i) => (
                <div className="col-lg-6 mt-30" key={i}>
                  <div className="mi-progress">
                    <h6 className="mi-progress-title">{skill.name}</h6>
                    <div className="mi-progress-inner">
                      <div className="mi-progress-percentage">
                        {skill.level}
                      </div>
                      <div className="mi-progress-container">
                        <span
                          className="mi-progress-active"
                          style={{ width: `${skill.level}` }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
