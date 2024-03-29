import Head from "next/head";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";

const Index = () => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Mahmudul Alam || Home</title>
        </Head>
        <Home />
      </div>
    </Layout>
  );
};
export default Index;
