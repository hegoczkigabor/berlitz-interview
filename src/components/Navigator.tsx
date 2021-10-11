import React, { FC } from "react";
import styled from "styled-components";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { COLORS } from "utils/constants";

const NavigatorContainer = styled.div`
  padding-bottom: 0px;
  font-size: 14px;
  display: flex;
  padding-bottom: 24px;
`;

const NavigatorIconContainer = styled.div`
  color: ${COLORS.lightGrey};
  padding-right: 14px;
`;

interface NavigatorProps {
  title: string;
}

export const Navigator: FC<NavigatorProps> = ({ title }) => {
  return (
    <NavigatorContainer>
      <NavigatorIconContainer>
        <FontAwesomeIcon icon={faArrowLeft} />
      </NavigatorIconContainer>
      {title}
    </NavigatorContainer>
  );
};
