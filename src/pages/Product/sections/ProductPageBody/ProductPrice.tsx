import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "utils/constants";

const PriceContainer = styled.div`
  flex-direction: row;
  font-weight: bold;
  font-size: 28px;
  display: flex;
`;

const Price = styled.div`
  color: #4b4b4b;
`;

const OldPrice = styled.div`
  text-decoration: line-through;
  padding-left: 21px;
  color: ${COLORS.midGrey};
`;

interface PriceProps {
  price: number;
  oldPrice?: number;
}

export const ProductPrice: FC<PriceProps> = ({ price, oldPrice }) => {
  return (
    <PriceContainer>
      <Price>${price}</Price>
      {oldPrice && <OldPrice>${oldPrice}</OldPrice>}
    </PriceContainer>
  );
};
