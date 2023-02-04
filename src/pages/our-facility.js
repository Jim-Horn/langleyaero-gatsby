import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import hangarPhoto from '../images/Hanger-aerial-BK.jpg';

const SiteMap = ({ data }) => (
  <Layout>
    <h1>Our Facility / Contact Info</h1>

    <figure>
      <img src={hangarPhoto} alt="Hanger aerial BK" />
    </figure>

    <p>
      We operate out of what is currently the largest single business hangar on
      the east side business section of the Langley Airport. We can accommodate
      any aircraft the airport runways can receive.
    </p>

    <p>
      <a
        href="https://goo.gl/maps/hguWtRMfqGMvCb1k7"
        rel="noreferrer"
        target="_blank">
        Langley Aero Structures Ltd.
      </a>
      <br />
      Hangar 8,
      <br />
      5333 216 Street
      <br />
      Langley BC V2Y 2N3
    </p>

    <p>
      <a href="tel:604-530-4077">604-530-4077</a>
      <br />
      <a href="mailto:info@langleyaero.com">info@langleyaero.com</a>
    </p>
  </Layout>
);

export const Head = () => <Seo title="Qualifications" />;

export default SiteMap;
