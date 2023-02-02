import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const SiteMap = ({ data }) => (
  <Layout>
    <h1>Qualifications</h1>
    <div class="entry-content">
      <p>
        Langley Aero is a Transport Canada certified Approved Maintenance
        Organization. (AMO)
      </p>

      <p>
        We were granted AMO 88-04 in the summer of our founding year, 2004.
        Since then, our capabilities have expanded considerably.
      </p>

      <p>
        Some skill sets that are getting harder &nbsp;to find, such as aircraft
        wood structure, fabric, welding, and compound curve aluminum panels,
        also known as crown rolling on the English Wheel.
      </p>

      <p>
        We&nbsp;often fabricate forming blocks to create complex shapes in
        aircraft materials. We can form complex shapes in non heat treated
        aircraft aluminum and have it heat treated locally after forming,
        allowing us to make parts that would not otherwise be possible.
      </p>

      <p>
        We are certified to work on a long list of aircraft types and groups.
        General maintenance on all piston and turbine powered fixed wing
        aircraft up to a maximum take-off weight of 5700 kg, (12,500 lbs.) In
        addition we are certified for many over 12,500 lb aircraft such as the
        entire, Beech King Air series, Beech 1900 series, and Fairchild Metro.
        We are also certified for Aero Vodochody L-29 Czech Republic built jet
        trainers, and Italian Military SIAI Marchetti SM-1019 Observer/Trainer
        aircraft.
      </p>

      <p>
        We are certified for repairs, modifications and maintenance of the
        following structures:
      </p>

      <ul>
        <li>Aluminum stressed skin</li>
        <li>Tube frame</li>
        <li>Wood structures</li>
        <li>Fabric repairs and replacement</li>
      </ul>

      <p>
        In addition we are qualified for Turbo Beaver, Turbo Otter and Twin
        Otter, All Beech King Air Series, all Beech 1900 Airliner series, Cessna
        Caravan, Cessna Turbo prop Twins, Piper Cheyenne, and Robinson R-22 and
        R-44 Helicopters.
      </p>

      <p>
        While we specialize in Cessna 180/185 aircraft, we also have extensive
        experience with vintage Waco, Fleet Finch and DHC82C Tiger Moth
        Biplanes, Vintage Harvard Advanced trainers, the wonderful old Cessna
        120-140-170 series, Beavers, Otters, and many other types right up to
        Turbine powered King Air and 1900 aircraft.
      </p>

      <p>
        World-Wide pre-purchase inspections, imports, pick up and delivery, is
        another area we have extensive experience with.
      </p>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Qualifications" />;

export default SiteMap;
