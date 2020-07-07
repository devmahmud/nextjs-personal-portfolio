import Particles from "../Particles";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <React.Fragment>
      <Particles />
      <div className="mi-home-area mi-padding-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am <span className="color-theme">Mahmudul Alam</span>
                </h1>
                <p>
                  I am a full stack web developer. I enjoy building everything
                  from small business sites to rich interactive web apps.
                </p>
                <ul className="mi-socialicons mi-socialicons-bordered">
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/devmahmud"
                    >
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/devmahmud"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://facebook.com/expeliermers"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
