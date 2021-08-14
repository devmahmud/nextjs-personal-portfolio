import Particles from '../Particles';
import { FaGithub, FaLinkedinIn, FaStackOverflow } from 'react-icons/fa';

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
                      href="https://stackoverflow.com/users/10956991/mahmudul-alam?tab=profile"
                    >
                      <FaStackOverflow />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://fiverr.com/devmahmud"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g transform="translate(2.5 2)">
                          <path
                            d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"
                            fill="currentColor"
                          />
                          <circle
                            cx="14.375"
                            cy="1.875"
                            r="1.875"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
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
