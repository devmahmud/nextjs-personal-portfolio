import Head from "next/head";
import Layout from "../components/Layout";
import Skills from "../components/Resume/Skills";
import Experiences from "../components/Resume/Experiences";

const Resume = () => {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Mahmudul Alam || Resume</title>
        </Head>
        <Skills />
        <Experiences />
      </div>
    </Layout>
  );
};
export default Resume;
