import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { FaPhone, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import * as emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const service_id = 'service_dyjviuh';
const template_id = 'template_ejplu8c';
const user_id = 'user_jCfFcoh1IpIMrR48i02K8';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    reset();
    emailjs.send(service_id, template_id, data, user_id).then(
      function (response) {
        setLoading(false);
        toast.success(
          'I have received your email. I will get back to you soon.'
        );
      },
      function (error) {
        setLoading(false);
        toast.error('Error sending email. Please try again later');
      }
    );
  };

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
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mi-form mi-contact-form"
                  >
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-name">
                        Enter your name*
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: true })}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">
                        Enter your email*
                      </label>
                      <input
                        type="email"
                        {...register('email', {
                          required: true,
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        })}
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
                        {...register('message', { required: true })}
                      ></textarea>
                    </div>
                    <div className="mi-form-field">
                      <button
                        className="mi-button"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? 'Please wait...' : 'Send Mail'}
                      </button>
                    </div>
                  </form>
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
                      <p>Uttora, Dhaka-1230, Bangladesh</p>
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
