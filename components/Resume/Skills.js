const Skills = () => {
  return (
    <div className="mi-skills-area mi-section mi-padding-top">
      <div className="container">
        <div className="mi-sectiontitle">
          <h2>My Skills</h2>
          <span>My Skills</span>
        </div>
        <div className="mi-skills">
          <h5>Languages: </h5>
          <blockquote>Python, JavaScript, Bash, C</blockquote>

          <h5>Framework/Libraries:</h5>
          <blockquote>
            <p>
              <b>Front End:</b> ReactJS, NextJS, Gatsby, React Native, Jquery,
              Boostrap, Material UI, Ant Design
            </p>
            <p>
              <b>Back End:</b> Django, Django REST, NodeJS, Express, Flask
            </p>
            <p>
              <b>ML:</b> Numpy, Pandas, NLTK
            </p>
            <p>
              <b>MISC:</b> Redux-Toolkit, Redux, Axios, Expo
            </p>
          </blockquote>

          <h5>Database:</h5>
          <blockquote>
            MySQL, PostgreSQL, Firebase, MongoDB, Django ORM, Redis
          </blockquote>

          <h5>DevOps:</h5>
          <blockquote>
            Docker, Celery, RabbitMQ, TravisCI, GitLab CI/CD, GitHub Actions
          </blockquote>

          <h5>Platforms:</h5>
          <blockquote>
            AWS, Heroku, DigitalOcean, Namecheap, Netlify, PythonAnywhere,
            Vercel
          </blockquote>

          <h5>IDE</h5>
          <blockquote>
            Visual Studio Code, IntelliJ IDEA, Android Studio, Xcode, Pycharm
          </blockquote>

          <h5>Others:</h5>
          <blockquote>Git, Unit Testing, Markdown, etc</blockquote>
        </div>
      </div>
    </div>
  );
};

export default Skills;

// {skills &&
//   skills.map((skill, i) => (
//     <div className="col-lg-6 mt-30" key={i}>
//       <div className="mi-progress">
//         <h6 className="mi-progress-title">{skill.name}</h6>
//         <div className="mi-progress-inner">
//           <div className="mi-progress-percentage">
//             {skill.level}
//           </div>
//           {/* <div className="mi-progress-container">
//             <span
//               className="mi-progress-active"
//               style={{ width: `${skill.level}` }}
//             ></span>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   ))}
