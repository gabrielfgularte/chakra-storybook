import React from "react";
import {
  Button as CButton,
  ButtonProps as CButtonProps,
} from "@chakra-ui/react";

export interface ButtonProps extends CButtonProps {
  /**
   * Button contents
   */
  label: string | React.ReactNode;
}

export const Button = ({ label, ...props }: ButtonProps): JSX.Element => {
  return (
    <CButton borderRadius="60px" {...props}>
      {label}
    </CButton>
  );
};
