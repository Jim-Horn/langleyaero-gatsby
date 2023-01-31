import * as React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    text-align: center;
`;

const CenteredDiv = ({ children }) => <StyledDiv>{children}</StyledDiv>;
export default CenteredDiv;
