import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "utils/constants";

const SelectComponent = styled.select`
  border: 1px solid ${COLORS.midGrey};
  border-radius: 5px;
  padding: 12px;
  width: 150px;
`;

const ComponentLabel = styled.div`
  color: ${COLORS.darkGrey};
  text-transform: uppercase;
  padding-bottom: 14px;
  font-weight: bold;
  padding-left: 2px;
  font-weight: bold;
  font-size: 14px;
`;

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  onChange: (selectedColor: string) => void;
}

export const Select: FC<SelectProps> = ({ options, label, onChange }) => {
  return (
    <>
      <ComponentLabel>{label}</ComponentLabel>
      <SelectComponent
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectComponent>
    </>
  );
};
