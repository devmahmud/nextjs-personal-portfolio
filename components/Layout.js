import Router from "next/router";
import NProgress from "nprogress";

import Navbar from "./Navbar/Navbar";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouterChangeError = () => NProgress.done();

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
