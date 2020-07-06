import Slider from "react-slick";
import "./testimonial.css";

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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              impedit nobis tempore quaerat quibusdam.
            </p>
          </div>
          <div className="mi-testimonial-author">
            <h5>Susan Yost</h5>
            <h6>Client</h6>
          </div>
        </div>
      </div>

      <div className="mi-testimonial-slideritem">
        <div className="mi-testimonial">
          <div className="mi-testimonial-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              impedit nobis tempore quaerat quibusdam.
            </p>
          </div>
          <div className="mi-testimonial-author">
            <h5>Susan Yost</h5>
            <h6>Client</h6>
          </div>
        </div>
      </div>

      <div className="mi-testimonial-slideritem">
        <div className="mi-testimonial">
          <div className="mi-testimonial-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              impedit nobis tempore quaerat quibusdam.
            </p>
          </div>
          <div className="mi-testimonial-author">
            <h5>Susan Yost</h5>
            <h6>Client</h6>
          </div>
        </div>
      </div>

      <div className="mi-testimonial-slideritem">
        <div className="mi-testimonial">
          <div className="mi-testimonial-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              impedit nobis tempore quaerat quibusdam.
            </p>
          </div>
          <div className="mi-testimonial-author">
            <h5>Susan Yost</h5>
            <h6>Client</h6>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
