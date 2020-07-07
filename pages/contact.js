import Head from "next/head";
import Layout from "../components/Layout";
import { FaPhone, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Mahmudul Alam || Contact</title>
        </Head>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <div className="mi-sectiontitle">
              <h2>Contact Me</h2>
              <span>Contact Me</span>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <h4>Get In Touch</h4>
                  <form action="#" className="mi-form mi-contact-form">
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-name">
                        Enter your name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="contact-form-name"
                        required
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">
                        Enter your email*
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="contact-form-email"
                        required
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-subject">
                        Enter your subject*
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="contact-form-subject"
                        required
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-message">
                        Enter your Message*
                      </label>
                      <textarea
                        name="message"
                        id="contact-form-message"
                        cols="30"
                        rows="6"
                        required
                      ></textarea>
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">
                        Send Mail
                      </button>
                    </div>
                  </form>
                  <div className="alert alert-danger mt-4">
                    Name is required
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-contact-info">
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <FaPhone />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Phone</h6>
                      <p>
                        <a href="+8801719058105">+880-1719058105</a>
                      </p>
                    </div>
                  </div>
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <FaRegEnvelope />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Email</h6>
                      <p>
                        <a href="mailto:expelmahmud@gmail.com">
                          expelmahmud@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <FaMapMarkerAlt />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Address</h6>
                      <p>69 Sukrabad, Dhaka-1207, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
