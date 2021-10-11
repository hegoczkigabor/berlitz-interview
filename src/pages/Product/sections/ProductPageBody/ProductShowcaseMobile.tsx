import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "utils/constants";

export const ProductShowcaseMobileContainer = styled.div`
  margin-top:24px;
  padding: 24px;
  display: block;
  text-align: center;
  @media screen and (min-width: 1024px) {
    display: none;
  }
  & > img {
    max-width: 100%;
  }
`;

interface ProductShowcaseMobileProps {
  fileName: string;
}

export const ProductShowcaseMobile: FC<ProductShowcaseMobileProps> = ({
  fileName,
}) => {
  return (
    <ProductShowcaseMobileContainer>
      <img src={`images/${fileName}-small.jpg`} alt={fileName} loading="lazy" />
    </ProductShowcaseMobileContainer>
  );
};
