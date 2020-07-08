import Head from "next/head";
import Layout from "../../components/Layout";

const Blogs = () => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Mahmudul Alam || Blogs</title>
        </Head>
        <div class="mi-about mi-section mi-padding-top mi-padding-bottom">
          <div class="container">
            <div class="mi-sectiontitle">
              <h2>Recent Blogs</h2>
              <span>Recent Blogs</span>
            </div>
            <div class="row mt-30-reverse">
              <div class="col-lg-6 mt-30">
                <div class="mi-blog">
                  <div class="mi-blog-image">
                    <a href="/blogs/markdown-html-supported-blog">
                      <img
                        src="/images/blog-image-1.jpg"
                        alt="Markdown &amp; Html supported blog."
                      />
                    </a>
                    <div class="mi-blog-date">
                      <span class="date">20</span>
                      <span class="month">Feb</span>
                    </div>
                  </div>
                  <div class="mi-blog-content">
                    <h5>
                      <a href="/blogs/markdown-html-supported-blog">
                        Markdown &amp; Html supported blog.
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-30">
                <div class="mi-blog">
                  <div class="mi-blog-image">
                    <a href="/blogs/installing-nodejs-on-your-device">
                      <img
                        src="/images/blog-image-2.jpg"
                        alt="Installing NodeJS on your device."
                      />
                    </a>
                    <div class="mi-blog-date">
                      <span class="date">20</span>
                      <span class="month">Feb</span>
                    </div>
                  </div>
                  <div class="mi-blog-content">
                    <h5>
                      <a href="/blogs/installing-nodejs-on-your-device">
                        Installing NodeJS on your device.
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-30">
                <div class="mi-blog">
                  <div class="mi-blog-image">
                    <a href="/blogs/uiux-design-starter-with-adobe-xd">
                      <img
                        src="/images/blog-image-3.jpg"
                        alt="UI/UX design starter with Adobe XD."
                      />
                    </a>
                    <div class="mi-blog-date">
                      <span class="date">20</span>
                      <span class="month">Feb</span>
                    </div>
                  </div>
                  <div class="mi-blog-content">
                    <h5>
                      <a href="/blogs/uiux-design-starter-with-adobe-xd">
                        UI/UX design starter with Adobe XD.
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-30">
                <div class="mi-blog">
                  <div class="mi-blog-image">
                    <a href="/blogs/boost-your-post-for-increasing-sales">
                      <img
                        src="/images/blog-image-4.jpg"
                        alt="Boost your post for increasing sales."
                      />
                    </a>
                    <div class="mi-blog-date">
                      <span class="date">20</span>
                      <span class="month">Feb</span>
                    </div>
                  </div>
                  <div class="mi-blog-content">
                    <h5>
                      <a href="/blogs/boost-your-post-for-increasing-sales">
                        Boost your post for increasing sales.
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-30">
                <div class="mi-blog">
                  <div class="mi-blog-image">
                    <a href="/blogs/difference-between-gatsbyjs-and-nextjs">
                      <img
                        src="/images/blog-image-5.jpg"
                        alt="Difference between GatsbyJS &amp; NextJS."
                      />
                    </a>
                    <div class="mi-blog-date">
                      <span class="date">20</span>
                      <span class="month">Feb</span>
                    </div>
                  </div>
                  <div class="mi-blog-content">
                    <h5>
                      <a href="/blogs/difference-between-gatsbyjs-and-nextjs">
                        Difference between GatsbyJS &amp; NextJS.
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-30">
                <div class="mi-blog">
                  <div class="mi-blog-image">
                    <a href="/blogs/how-to-choose-javascript-framework-for-project">
                      <img
                        src="/images/blog-image-6.jpg"
                        alt="How to choose javascript framework for project."
                      />
                    </a>
                    <div class="mi-blog-date">
                      <span class="date">20</span>
                      <span class="month">Feb</span>
                    </div>
                  </div>
                  <div class="mi-blog-content">
                    <h5>
                      <a href="/blogs/how-to-choose-javascript-framework-for-project">
                        How to choose javascript framework for project.
                      </a>
                    </h5>
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
export default Blogs;
