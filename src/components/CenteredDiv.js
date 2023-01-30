import * as React from "react";
import styled from "styled-components";

const CenteredDiv = ({ children }) => {
    const StyledDiv = styled.div`
        text-align: center;
    `;
    return <StyledDiv>{children}</StyledDiv>;
};
export default CenteredDiv;
