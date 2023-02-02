import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const SiteMap = ({ data }) => (
  <Layout>
    <h1>Quality Control</h1>

    <p>
      We operate under a custom made computer software system handling all
      aspects of aircraft maintenance, including inventory, with shelf life
      control, Calibrated tooling control and certification, resource document
      control, work order generation, including task management, secondary tasks
      triggered when specific circumstances call for it, automated log entry and
      work order file system.
    </p>

    <p>
      All parts, materials and calibrated tools carry a bar code that our
      computers scan and record for the utmost accuracy in record keeping.
    </p>

    <p>
      This ensures that only current up to date manuals are used in the
      maintenance of your aircraft, that shelf life limited parts and materials
      are not used past their intended storage life, that all precision tools
      are maintained to current standards and readings and settings are
      accurate, and that the work done on your aircraft will be properly
      documented to meet Transport Canada requirements.
    </p>

    <p>
      It also ensures your invoice will be clear, and accurately
      reflect&nbsp;the&nbsp;work done on your aircraft.
    </p>
  </Layout>
);

export const Head = () => <Seo title="Qualifications" />;

export default SiteMap;
