import Layout from "../components/Layout";
import Link from "next/link";
import Section from "../components/Section";
import {
  Mail,
  Storefront,
  Language,
  Build,
  BuildOutlined,
  Settings,
  SettingsOutlined,
  InfoOutlined,
  Facebook,
  Instagram,
  HomeRounded,
  LinkedIn,
} from "@material-ui/icons/";
const TITLE = "JONAS KNAPPITSCH";
const SUBTITLE = "technology | management | innovation";

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
              What I Do
            </a>
          </Link>
        </div>
      </div>

      <Section id="whoweare" textAlign="center" height="50" title="Who i am">
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
          My work
        </a>
      </Section>
      <hr></hr>
      <Section id="whatwedo" textAlign="center" height="50" title="What i do">
        <div className="container">
          <p>
            Using cutting-edge technology and following the most contemporary
            design principles, we conceptualize state-of-the-art web appearences
            for every individual - whether small-scale business or highly
            established company.
          </p>

          <div className="row py-5 ">
            <div className="col-sm">
              <h4>Currently</h4>
                <p className="grow">
                  Spokesman for Southern Europe<br></br>@
                  <a href="https://www.auslandsdienst.at/en">
                    Austrian Service Abroad
                  </a>
                </p>
                <p className="grow">
                  International Relations <br></br>@
                  <a href="https://www.auslandsdienst.at/en">
                    Austrian Service Abroad
                  </a>
                </p>
                <p className="grow">
                  Graduation with distinction <br></br>@
                  <a href="https://www.htl-kaindorf.at/abteilungen/informatik">
                    HTL Kaindorf
                  </a>
                </p>
                <p className="grow">
                  Diploma Thesis about PWA<br></br>@
                  <a href="https://www.htl-kaindorf.at/abteilungen/informatik">
                    HTL Kaindorf
                  </a>
                </p>
            </div>

            <div className="col-sm">
              <h4>Previously</h4>
                <p className="grow">
                  Project Manager <br></br>@
                  <a href="https://www.niceshops.com/en">Niceshops GmbH</a>
                </p>
                <p className="grow">
                  Machine Learning Engineer <br></br>@
                  <a href="https://www.knapp.com/en/">KNAPP AG</a>
                </p>
                <p className="grow">
                  Software Engineer <br></br>@
                  <a href="https://www.ksengineers.at/en">KSEngineers GmbH</a>
                </p>
                <p className="grow">
                  IT-Administrator <br></br>@
                  <a href="https://www.ksengineers.at/en">KSEngineers GmbH</a>
                </p>
            </div>

            <div className="col-sm">
              <h4>Interests</h4>
              <p className="grow">Programming<br></br>
              #<a href="#">Java </a>
              #<a href="#">Python </a>
              </p>
              <p className="grow">Progressive Web Apps<br></br>
              #<a href="#">React.js </a>
              #<a href="#">Next.js </a>
              #<a href="#">Node.js </a>
              </p>
              <p className="grow">Database Modelling<br></br>
              #<a href="#">SQL </a>
              #<a href="#">NoSQL </a>
              #<a href="#">Redis </a>
              #<a href="#">MongoDB </a>
              </p>
              <p className="grow">Project Management<br></br>
              #<a href="#">Agile </a>
              #<a href="#">SCRUM </a>
              </p>
            </div>
          </div>
          <a
          role="button"
          href="#contact"
          className="btn btn-outline-primary"
        >
          Contact
        </a>
        </div>
      </Section>
      <hr></hr>
      <Section id="contact" textAlign="center" height="50" title="Contact me">
        <p>
          Let's approach your project together! I'd be glad to get in touch with
          you.
        </p>
        <div className="container" style={{ maxWidth: "500px" }}>
          <div className="row pt-4 px-4">
            <div className="col-sm">
              <div className="grow">
                <a href="#">
                  <Mail fontSize="large" />
                  <p>hello@wolkenstein.com</p>
                </a>
              </div>
            </div>
            <div className="col-sm">
              <div className="grow">
                <a href="#" className="grow">
                  <LinkedIn fontSize="large" />
                  <p>Jonas Knappitsch</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <style jsx>{`
        .waves {
          background-image: url("/img/gradient-waves_2.png");

          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        li {
          margin: 10px 0;
        }
      `}</style>
    </Layout>
  );
}
