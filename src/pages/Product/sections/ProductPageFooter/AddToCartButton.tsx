import React, { FC, useState } from "react";
import { Button } from "components";

interface AddToCartButtonProps {
  buttonLabel: string;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({ buttonLabel }) => {
  const [label, setLabel] = useState<string>(buttonLabel);
  const [disabled, setDisabled] = useState<boolean>(false);
  return (
    <Button
      label={label}
      onClick={() => {
        if (!disabled) {
          setLabel("Loading...");
          const interval = setInterval(() => {
            alert("Item added to cart!");
            setLabel("View Cart");
            clearInterval(interval);
          }, 2000);
        }
        setDisabled(true);
      }}
    />
  );
};
