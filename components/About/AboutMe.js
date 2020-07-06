import "./aboutMe.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="mi-sectiontitle">
        <h2>About Me</h2>
        <span>About Me</span>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="mi-about-image">
            <img alt="about" src="/images/about-image.jpg" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mi-about-content">
            <h3>
              I am <span className="color-theme">Mahmudul Alam</span>
            </h3>
            <p>
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more &amp; more interactive
              with web animations.
            </p>
            <ul>
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
            </ul>
            <a className="mi-button" href="/files/mahmudul.pdf">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
