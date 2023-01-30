import * as React from "react";
import Layout from "../components/layout";
import * as aui from "@soluto-private/mx-asurion-ui-react";

const Aui = () => (
    <Layout>
        <h1>Asurion UI Components</h1>
        <h2>Button</h2>
        <aui.Button>This is a button</aui.Button>
        <h2>Accordion</h2>
        <aui.Accordion>
            <aui.AccordionSection
                header="This is a short description that goes up to two rows"
                iconSrc="IconPlaceholder"
                subheader="Short sentence or subheading"
                transitionDuration=".4s"
                transitionTimingFunction="cubic-bezier(.68,.12,.24,.99)">
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                tristique vulputate et viverra felis massa metus, condimentum
                ero.
            </aui.AccordionSection>
        </aui.Accordion>
        <h2>Callout</h2>
        <aui.Callout
            content="Make sure everything made it over to your new phone. Check out our setup guide."
            heading="Welcome, Alex!"
            iconSrc="IconPlaceholder"
        />
    </Layout>
);

export default Aui;
