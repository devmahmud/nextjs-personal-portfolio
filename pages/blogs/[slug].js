import Head from "next/head";
import Layout from "../../components/Layout";

const Blogs = () => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Mahmudul Alam || Blogs</title>
        </Head>
        <div class="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
            <div class="container">
                <p><img alt="Markdown &amp; HTML supported blog" src="/images/blog-image-1.jpg"/></p>
                <h3>Markdown &amp; HTML supported blog.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora deleniti repellendus
                    doloribus
                    necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit magni
                    at,
                    tempore cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur earum
                    debitis mollitia repellat porro dolorum magni neque, consectetur et nam fugiat ipsa, quibusdam
                    accusamus
                    aperiam asperiores quia inventore numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quis reprehenderit cum quos quia necessitatibus ipsa mollitia error nemo dicta, possimus nobis
                    tempora
                    quod voluptate nostrum ducimus nulla aperiam, explicabo pariatur.</p>
                <blockquote>
                    <p>Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus
                        assumenda nisi ut eius commodi quis tenetur fugit consequatur earum debitis mollitia repellat.
                    </p>
                </blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora deleniti repellendus
                    doloribus
                    necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit magni
                    at,
                    tempore cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur earum
                    debitis mollitia repellat.</p>
                <p>Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus
                    assumenda
                    nisi ut eius commodi quis tenetur fugit consequatur earum debitis mollitia repellat.</p>
              
            </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blogs;
