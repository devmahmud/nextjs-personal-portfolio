import Head from 'next/head';
import Layout from '../components/Layout';
import { FaLink, FaGithub } from 'react-icons/fa';
import { projects } from './api/data';

const Portfolios = () => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Mahmudul Alam || Portfolios</title>
        </Head>
        <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <div className="mi-sectiontitle">
              <h2>Portfolios</h2>
              <span>Portfolios</span>
            </div>
            <div className="row mt-30-reverse">
              {projects.map((project, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12 mt-30">
                  <div className="mi-portfolio mi-portfolio-visible">
                    <div className="mi-portfolio-image">
                      <img src={project.feature_image} alt={project.title} />
                      <ul>
                        {project?.live_link && (
                          <li>
                            <a
                              rel="noopener noreferrer"
                              target="_blank"
                              href={project.live_link}
                            >
                              <FaLink />
                            </a>
                          </li>
                        )}

                        {project?.github_link && (
                          <li>
                            <a
                              rel="noopener noreferrer"
                              target="_blank"
                              href={project.github_link}
                            >
                              <FaGithub />
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                    <h5>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={project.live_link}
                      >
                        {project.title}
                      </a>
                    </h5>
                    <h6>{project.description}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Portfolios;
