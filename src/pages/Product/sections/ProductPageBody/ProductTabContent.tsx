import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "utils/constants";

export const ProductTabContentContainer = styled.div`
  color: ${COLORS.darkGrey};
  font-size: 14px;
`;

interface ProductTabContentProps {
  content: string;
}

export const ProductTabContent: FC<ProductTabContentProps> = ({ content }) => (
  <ProductTabContentContainer>{content}</ProductTabContentContainer>
);
