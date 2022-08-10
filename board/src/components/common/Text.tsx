import styled from "styled-components";
import {TextStyle} from "../../types/styles";
import React from "react";

const CustomText = styled.span`
    font-size: ${(props: { size: string; }) => props.size};
  font-weight: ${(props: { weight: string; }) => props.weight};
`;

const Text: React.FC<TextStyle> = ({style, children}) =>
    <CustomText {...style}>{children}</CustomText>
;

export default Text;
