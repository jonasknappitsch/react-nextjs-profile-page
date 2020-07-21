import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
export default function legal() {
  const COMPANY = "Wolkenstein GmbH";
  const COMPANYGROUP = "Wolkenstein Group";
  const EMAIL = "help@wolkenstein.com";
  const ADDRESS = "Eibiswald 2xx, 8552 Eibiswald, Austria";
  return (
    <Layout>
      <Section id="privacypolicy" textAlign="center" title="Privacy Policy">
        <p>
          {COMPANY} is part of the {COMPANYGROUP}. This privacy policy will
          explain how our organization uses the personal data we collect from
          you when you use our website.
        </p>

        <h4>How we collect data</h4>
        <p>
          Data we collect is mostly directly provided by you. We collect and
          process data when you
        </p>
        <ul>
          <li>register online</li>
          <li>place an order for any of our products or services</li>
          <li>subscribe to our newsletter</li>
          <li>etc.</li>
        </ul>
        <p>{COMPANY} collects the following data:</p>
        <ul>
          <li>
            personal identification information (Name, email address, phone
            number, etc.)
          </li>
        </ul>

        <h4>How we use your data</h4>
        <p>{COMPANY} collects your data so that we can:</p>
        <ul>
          <li>process your order and manage your account</li>
          <li>
            email you with special offers on products and services that you
            might like
          </li>
        </ul>
        <p>
          You have the right at any time to stop {COMPANY} from contacting you
          for marketing purposes or giving your data to other members of the{" "}
          {COMPANYGROUP}. If you no longer wish to be contacted for marketing
          purposes, simply inform us.
        </p>

        <h4>How to contact us</h4>

        <p>
          If you have any questions about {COMPANY}’s privacy policy, the data
          we hold on you, or you would like to exercise one of your data
          protection rights, please do not hesitate to contact us at {EMAIL}
        </p>
      </Section>

      <Section id="legalnotice" textAlign="center" title="Legal Notice">
        <h4>{COMPANY}</h4>
        <p>UID: 987654321</p>
        <p>FN: 123456a</p>
        <p>Address: {ADDRESS}</p>
        <p>Email: {EMAIL}</p>
      </Section>
      <style jsx>
        {`
          p {
            text-align: left;
          }
          ul {
            text-align: left;
          }
          h1,h2,h3,h4 {
              text-align: left;
              padding-top: 2em;
          }
        `}
      </style>
    </Layout>
  );
}
