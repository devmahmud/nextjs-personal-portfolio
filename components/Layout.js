import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="mi-wrapper">
        <div className="mi-bglines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Navbar />
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
