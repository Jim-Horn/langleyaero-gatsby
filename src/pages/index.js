import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <h1>Home</h1>
    <p>
      Langley Aero Structures Ltd is a Transport Canada Approved Maintenance
      Organization, (AMO 88-04), for the repair and modification of aircraft
      stressed skin, tubular frame and wood structures. We are also approved as
      a general maintenance facility for all fixed wing piston and turbine
      powered aircraft up to 12,500 lbs, plus the entire Beech King Air series,
      1900 Airliner Series, Cessna 208 Caravan, Cessna Turboprop twins, Turbo
      Beaver &amp; Turbo Otter, Twin Otter, Aero Vodochody Czech Republic built
      L-29 Jet trainers, SIAI Marchetti SM1019 Italian Military
      Trainer/Observation aircraft, and Robinson R-22 &amp; R-44 Helicopters.
    </p>

    <p>
      We are trained and experienced on the following: radial piston engines:
      P&amp;W, Wright, Kinner, Jacobs, and Continental, Lycoming, Franklin
      Horizontally Opposed piston engines, Fairchild, and DeHaviland Gypsy
      Inline engines.
    </p>

    <p>
      And in the turbine department: P&amp;W PT6 Series, Honeywell (Garrett),
      and Rolls Royce (Allison) engines.
    </p>

    <p>
      We are also a Transport Canada approved aircraft welding shop for most
      aerospace metals.
    </p>

    <p>
      No job is too big or too small. We specialize in quick turn times for
      major re-builds and restorations. We also do a lot of imports. We have a
      great working relationship with a Transport Canada MDM (Ministers
      designate for Maintenance) for type certificated aircraft, and have
      substantial experience with Limited Category, Ex-military aircraft
      directly with Transport Canada. If you have a rare, ex-military,
      one-of-a-kind aircraft you would like to register in Canada, we can help.
    </p>

    <p>
      One of our specialties is re-builds, restorations and general maintenance
      of Cessna 180/185 aircraft.
    </p>

    <p>
      We are located at the{' '}
      <a
        href="https://goo.gl/maps/hguWtRMfqGMvCb1k7"
        rel="noreferrer"
        target="_blank">
        Langley Municipal Airport
      </a>
      , in Langley British Columbia, Western Canada. Airport designator CYNJ.
    </p>

    <p>
      We can be reached at <a href="tel:604-530-4077">604-530-4077</a> or{' '}
      <a href="mailto:info@langleyaero.com">info@langleyaero.com</a>.
    </p>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
