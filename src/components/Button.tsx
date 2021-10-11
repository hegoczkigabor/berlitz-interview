import React, { FC } from "react";
import styled from "styled-components";
import { COLORS } from "utils/constants";

const ButtonMain = styled.div`
  padding: 21px 86px 21px 86px;
  background-color: ${COLORS.lightBlue};
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  color: white;
`;

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <ButtonMain
      onClick={() => {
        onClick();
      }}
    >
      {label}
    </ButtonMain>
  );
};
