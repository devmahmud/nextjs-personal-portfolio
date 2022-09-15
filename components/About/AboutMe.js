const About = () => {
  return (
    <React.Fragment>
      <div className="mi-sectiontitle">
        <h2>About Me</h2>
        <span>About Me</span>
      </div>
      <div className="row">
        {/* <div className="col-lg-6">
          <div className="mi-about-image">
            <img alt="about" src="/images/about-image.jpg" />
          </div>
        </div> */}
        <div className="col-lg-12">
          <div className="mi-about-content">
            <h3>
              I am <span className="color-theme">Mahmudul Alam</span>
            </h3>
            <p>
              I'm a full-stack software developer with proven development experience spanning over 3
              years. With a knack for design & its tiniest details, I've been developing
              consumer-facing software for a good number of clients, companies & businesses. From
              analyzing high-level requirements for individual clients to developing & scaling
              business solutions like CRM & CMS for B2B service providers - I have a combined suite
              of strong engineering, designing, communication & professionalism. I'm proficient in
              libraries & frameworks of JavaScript & Python - ReactJS, React Native, NodeJS,
              Express, Django, Web3.js, and Ethers.js - to name a few. I focus on writing reusable
              components with a readable codebase in a clean architecture, heavily reflected in my
              open-source contributions.
            </p>
            {/* <ul>
              <li>
                <b>Full Name</b> Mahmudul Alam
              </li>
              <li>
                <b>Age</b> 24 Years
              </li>
              <li>
                <b>Nationality</b> Bangladeshi
              </li>
              <li>
                <b>Languages</b> English, Bengali
              </li>
              <li>
                <b>Address</b> Dhaka, Bangladesh
              </li>
              <li>
                <b>Freelance</b> Available
              </li>
            </ul> */}
            <a
              className="mi-button"
              target="_blank"
              href="https://drive.google.com/file/d/1Xp79ZiYGd2RvjEoWO63CTaFrQBASRiRx/view?usp=sharing"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
