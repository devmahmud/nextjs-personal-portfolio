import Slider from 'react-slick';

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="slick-slider">
      <div className="mi-testimonial-slideritem">
        <div className="mi-testimonial">
          <div className="mi-testimonial-content">
            <p>
              He is like a magician. he even fixed detailed bugs related to this
              Django project. He is a really kind and high-tech friend. Highly
              recommend. Bottom line: when you need python , javascript, django
              programmer, he is the best! thank you! I am very happy!
            </p>
          </div>
          <div className="mi-testimonial-author">
            <h5>Frank Kim</h5>
            <h6>Canada</h6>
          </div>
        </div>
      </div>

      <div className="mi-testimonial-slideritem">
        <div className="mi-testimonial">
          <div className="mi-testimonial-content">
            <p>
              Wow! Such a great developer to work with. Devmahmud really did a
              great job. He is good at project deployment on production server.
              Highly recommended. Will buy from him again. Thanks 🙂
            </p>
          </div>
          <div className="mi-testimonial-author">
            <h5>Iliya Pronin</h5>
            <h6>Netherlands</h6>
          </div>
        </div>
      </div>

      <div className="mi-testimonial-slideritem">
        <div className="mi-testimonial">
          <div className="mi-testimonial-content">
            <p>
              He was really professional and very understanding when explaining
              the work and would definitely recommend again!
            </p>
          </div>
          <div className="mi-testimonial-author">
            <h5>Jeremynyika</h5>
            <h6>South Africa</h6>
          </div>
        </div>
      </div>

      <div className="mi-testimonial-slideritem">
        <div className="mi-testimonial">
          <div className="mi-testimonial-content">
            <p>
              Like the way he completed the project. He is a super coder.
              Extremely professional & knowledgeable in his job and completed
              the tasks given within time limit. Definitely hiring again. Highly
              Recommended.
            </p>
          </div>
          <div className="mi-testimonial-author">
            <h5>Steven Cravotta</h5>
            <h6>United States</h6>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
