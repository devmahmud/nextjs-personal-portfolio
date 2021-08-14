import Head from 'next/head';
import Layout from '../components/Layout';
import AboutMe from '../components/About/AboutMe';
import Services from '../components/About/Services';
import Testimonial from '../components/About/Testimonial';

const About = () => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Mahmudul Alam || About</title>
        </Head>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <AboutMe />
          </div>
        </div>
        <div className="mi-service-area mi-section mi-padding-top">
          <div className="container">
            <Services />
          </div>
        </div>

        <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <div className="mi-sectiontitle">
              <h2>Reviews</h2>
              <span>Reviews</span>
            </div>
            <Testimonial />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
