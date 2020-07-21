import Layout from "../components/Layout";

export default function About() {
  const TITLE = "About";
  const PAGESUBTITLE = "Our vision";

  return (
    <Layout>
      <div className="section full center">
      <div className="sectioncontent">
        <h1 className="pagetitle">{TITLE}</h1>
        <h4 className="pagesubtitle">{PAGESUBTITLE}</h4>
        </div>
      </div>
    </Layout>
  );
}
