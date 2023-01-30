import * as React from "react";
import Layout from "../components/layout";
import CenteredDiv from "../components/CenteredDiv";
import {
    Button,
    AsurionDoodleSpinner,
} from "@soluto-private/mx-asurion-ui-react";

const MyPage = () => {
    const [isLoaded, setIsLoaded] = React.useState(true);

    const toggleLoaded = () => {
        setIsLoaded(isLoaded => !isLoaded);
    };

    return (
        <Layout>
            <h1>AUI Example</h1>
            <Button onClick={toggleLoaded}>{isLoaded && `Not `}Loaded</Button>
            <CenteredDiv>
                {isLoaded ? <AsurionDoodleSpinner /> : <h2>It's loaded</h2>}
            </CenteredDiv>
        </Layout>
    );
};

export default MyPage;
