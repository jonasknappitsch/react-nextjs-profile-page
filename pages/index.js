import Layout from "../components/Layout";
import Link from "next/link";
import Section from "../components/Section";
import { Mail, Storefront, Language, Build, BuildOutlined, Settings, SettingsOutlined } from "@material-ui/icons/";
const TITLE = "WOLKENSTEIN";
const SUBTITLE = "the new era of online presence";

export default function Home() {
  return (
    <Layout>
      <div className="section gradient full center">
        <div className="sectioncontent centerxy">
          <h1 className="pagetitle">{TITLE}</h1>
          <h4 className="pagesubtitle">{SUBTITLE}</h4>
          <div className="mt-5"></div>
          <Link href="#contact">
            <a
              role="button"
              className="btn btn-outline-primary pagetitlebtn mt-2 mx-2"
            >
              Contact
            </a>
          </Link>
          <Link href="#whatwedo">
            <a
              role="button"
              className="btn btn-primary nonoutlinebutton pagetitlebtn mt-2 mx-2"
            >
              What we do
            </a>
          </Link>
        </div>
      </div>

      <Section id="whoweare" textAlign="center" height="50" title="Who we are">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <a
          role="button"
          href="#whatwedo"
          className="btn btn-outline-primary mt-5"
        >
          Our services
        </a>
      </Section>

      <div className="gradient waves py-4">
        <Section
          id="whatwedo"
          textAlign="center"
          height="50"
          title="What we do"
        >
          <div className="container">
            <p>
              Using cutting-edge technology and following the most contemporary
              design principles, we conceptualize state-of-the-art web
              appearences for every individual - whether small-scale business or
              highly established company.
            </p>

            <div className="row pt-4">
              <div className="col-sm grow">
                <Language fontSize="large" className="icon my-4" />
                <h4>Website</h4>
                <p>
                  A website is the foundation for a successful modern business.
                  You tell us your values and we conceptualize a website that
                  reflects them.
                </p>
              </div>
              <div className="col-sm grow">
                <Storefront fontSize="large" className="icon my-4" />
                <h4>Onlineshop</h4>
                <p>While you take care of your products, we arrange the sales. Having a perfectly designed onlineshop set up, we're ready to attract customers.</p>
              </div>
              <div className="col-sm grow">
                <SettingsOutlined fontSize="large" className="icon my-4" />
                <h4>Optimization</h4>
                <p>
                  Having your shop created, we optimize it so you attract the
                  customers you want to target in order to outperform your competition.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Section id="contact" textAlign="center" height="50" title="Contact us">
        <p>
          Let's approach your project together! We'd be glad to get in touch
          with you.
        </p>

        <div className="grow py-4">
          <Link href="#">
            <a>
              <Mail fontSize="large" />
              <p>hello@wolkenstein.com</p>
            </a>
          </Link>
        </div>
      </Section>
      <style jsx>{`
        .icon {
          width: 60;
        }
        .waves {
          background-image: url("/img/gradient-waves_2.png");

          
          
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      `}</style>
    </Layout>
  );
}
