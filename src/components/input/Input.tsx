import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";
import { Container, Flex } from "../container";
import { Icon } from "../icon";

interface InputProps {
  className: string;
  name: string;
  type?: string;
  note?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  search?: boolean;
  onChange(e: any): void;
}

const StyledLabel = styled(Container)`
  width: 100%;
  margin: 0.5rem 0;
`;

export const Label = (props: any) => (
  <StyledLabel>
    <label htmlFor={props.name} {...props}>
      {props.name}
    </label>
  </StyledLabel>
);

const InputGroup = styled(Flex)`
  align-items: center;
  border: 0.0625rem solid ${theme.colors.light400};
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  color: ${theme.colors.primary};
  box-sizing: border-box;
  background-color: ${theme.colors.light100};
  transition: ${theme.transition};
  &:hover {
    border: 0.0625rem solid ${theme.colors.light500};
  }
  &:focus {
    outline: 0;
    border: 0.0625rem solid ${theme.colors.dark100};
  }
  &:disabled {
    color: ${theme.colors.light500};
    background-color: ${theme.colors.light};
    border: 0.0625rem solid ${theme.colors.light400};
    cursor: not-allowed;
  }
`;

const StyledInput = styled.input<InputProps>`
  border: 0;
  font-size: 1rem;
  width: 100%;
  background-color: ${theme.colors.light100};
  box-sizing: border-box;
  transition: ${theme.transition};
  &::placeholder {
    color: ${theme.colors.dark100};
  }
  &:hover,
  &:focus {
    outline: 0;
    border: 0;
  }
  &:disabled {
    color: ${theme.colors.light500};
    background-color: ${theme.colors.light};
    border: 0;
    cursor: not-allowed;
  }

  ${({ search }) =>
    search &&
    css`
      margin-left: 0.5rem;
    `}
`;

const StyledDescription = styled(Container)`
  font-size: 0.75rem;
  margin: 0.25rem 0;
  color: ${theme.colors.dark200};
  width: 100%;
`;

export const Description = (props: any) => (
  <StyledDescription>{props.children}</StyledDescription>
);

export const Input: React.FC<InputProps> = props => (
  <InputGroup>
    {props.search && <Icon image={"SEARCH"} width="24px" height="24px" />}
    <StyledInput
      as="input"
      type={props.type || "text"}
      id={props.name}
      {...props}
    />
  </InputGroup>
);
