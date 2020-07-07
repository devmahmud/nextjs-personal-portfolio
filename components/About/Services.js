const serviceList = [
  {
    title: "Web Design",
    description: `Designing web pages using HTML, CSS, Javascript,JQuery, Bootstrap, Materialize ,Semantic UI, React, Next Js, Material UI`,
  },
  {
    title: "Web Development",
    description: `Depeloping website backend with Python(Django,etc). If you need any kind of backend development work, you can contact me.`,
  },
  {
    title: "Api Development",
    description: `I have experience in developing RESTful API using Django Rest Framework and also in 3rd party api integration.`,
  },
];

const Services = () => {
  return (
    <React.Fragment>
      <div className="mi-sectiontitle">
        <h2>Services</h2>
        <span>Services</span>
      </div>
      <div className="mi-service-wrapper">
        <div className="row mt-30-reverse">
          {serviceList.map((service, i) => (
            <div className="col-lg-4 col-md-6 col-12 mt-30" key={i}>
              <div className="mi-service">
                <span className="mi-service-icon">
                  <i className="lni lni-pallet size-md"></i>
                </span>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
