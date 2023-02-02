import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const SiteMap = ({ data }) => (
  <Layout>
    <h1>Quality Control</h1>
    <div class="entry-content">
      <figure class="wp-block-image">
        <img
          src="http://langleyaero.com/wp-content/uploads/2014/01/Hanger-aerial-BK.jpg"
          alt="Hanger aerial BK"
          class="wp-image-188"
          srcset="http://www.langleyaero.com/wp-content/uploads/2014/01/Hanger-aerial-BK.jpg 980w, http://www.langleyaero.com/wp-content/uploads/2014/01/Hanger-aerial-BK-300x124.jpg 300w"
          sizes="(max-width: 980px) 100vw, 980px"
        />
      </figure>

      <p>
        We operate out of what is currently the largest single business hangar
        on the east side business section of the Langley Airport. We can
        accommodate any aircraft the airport runways can receive.
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
    </div>
  </Layout>
);

export const Head = () => <Seo title="Qualifications" />;

export default SiteMap;
