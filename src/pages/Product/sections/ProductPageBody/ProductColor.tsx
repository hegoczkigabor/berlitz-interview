import React, { FC } from "react";

import { Select } from "components";
import { SelectOption } from "components/Select";

interface ProductColorProps {
  label: string;
  onChange: (selectedColor: string) => void;
  colors: SelectOption[];
}

export const ProductColor: FC<ProductColorProps> = ({ onChange, colors, label }) => {
  return (
    <>
      <Select
        onChange={(selectedColor) => onChange(selectedColor)}
        label={label}
        options={colors}
      />
    </>
  );
};
