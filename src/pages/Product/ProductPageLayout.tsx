import styled from "styled-components";
import { COLORS } from "utils/constants";

export const ProductPageContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    display: flex;
  }
`;

export const ProductPageLeft = styled.div`
  @media screen and (min-width: 1024px) {
    width: 55%;
  }
`;

export const ProductPageRight = styled.div` 
  position: relative;
  display: none;
  padding: 25px;
  border-left: 1px solid ${COLORS.lightGrey};
  @media screen and (min-width: 1024px) {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductPageHeader = styled.div`
  padding: 24px 24px 0px 24px;
`;

export const ProductPageBody = styled.div`
  border-top: 1px solid ${COLORS.lightGrey};
  border-bottom: 1px solid ${COLORS.lightGrey};
  padding: 24px;
  & > div {
    padding-bottom: 24px;
  }
`;

export const ProductPageFooter = styled.div`
  padding: 24px;
`;
