const serviceList = [
  {
    title: 'Web Design',
    description: `Designing webpages using HTML, CSS, Javascript,JQuery, Bootstrap, Materialize ,Semantic UI, React, React Native, Next Js, Material UI`,
  },
  {
    title: 'Native App',
    description: `Native application development using React Native, Expo,  Redux, Redux Toolkits, Redux Thunk, Axios, Google Map Integrations`,
  },
  {
    title: 'Backend Development',
    description: `Backend web development using, Django, DRF, Node JS, Express JS, Mysql, Postgresql, PostGIS, Mongodb`,
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
