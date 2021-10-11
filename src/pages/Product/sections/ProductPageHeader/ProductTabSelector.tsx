import React, { FC, useState } from "react";
import styled from "styled-components";

import { COLORS } from "utils/constants";

export const ProductTabSelectorContainer = styled.div`
  flex-direction: row;
  display: flex;
  padding-top: 24px;
  font-size: 14px;
  & > div {
    padding: 5px;
  }
`;

export const TabButton = styled.div<{ isActive: boolean }>`
  border-bottom: ${(props) =>
    props.isActive ? `2px solid ${COLORS.lightBlue}` : "none"};
  color: ${(props) => (props.isActive ? COLORS.darkGrey : COLORS.midGrey)};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  text-transform: uppercase;
  text-align: center;
  min-width: 100px;
  cursor: pointer;
`;

export enum TabState {
  DESCRIPTION,
  DETAILS,
}

interface ProductTabSelectorProps {
  onSelect: (tabState: TabState) => void;
}

export const ProductTabSelector: FC<ProductTabSelectorProps> = ({
  onSelect,
}) => {
  const [tabState, setTabState] = useState<TabState>(TabState.DESCRIPTION);
  return (
    <ProductTabSelectorContainer>
      <TabButton
        onClick={() => {
          onSelect(TabState.DESCRIPTION);
          setTabState(TabState.DESCRIPTION);
        }}
        isActive={tabState === TabState.DESCRIPTION}
      >
        Description
      </TabButton>
      <TabButton
        onClick={() => {
          onSelect(TabState.DETAILS);
          setTabState(TabState.DETAILS);
        }}
        isActive={tabState === TabState.DETAILS}
      >
        Details
      </TabButton>
    </ProductTabSelectorContainer>
  );
};
