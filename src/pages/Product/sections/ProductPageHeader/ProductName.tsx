import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "utils/constants";

const ProductName = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: ${COLORS.darkGrey};
`;

const ProductHint = styled.div`
  color: ${COLORS.midGrey};
  font-size: 14px;
`;

interface ProductNameComponentProps {
  productName: string;
  hint: string;
}

export const ProductNameComponent: FC<ProductNameComponentProps> = ({
  productName,
  hint,
}) => {
  return (
    <>
      <ProductName>{productName}</ProductName>
      <ProductHint>{hint}</ProductHint>
    </>
  );
};
