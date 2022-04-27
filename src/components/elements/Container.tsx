import React from "react";
import styled, { css } from "styled-components";
import { spacing } from "../../styles/utilities";

type Props = {
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default styled(Container)(
  ({ theme }) => css`
    width: 100%;
    ${spacing.gutter("px")}
  `
);
