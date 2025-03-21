import { StyledInputWrapper, StyledBadge, StyledInput } from "./styles";

export type InputWithBadgeProps = {
  resultsCounter: number;
  placeholder: string;
  onChange: () => void;
};

export const InputWithBadge: React.FC<InputWithBadgeProps> = ({
  resultsCounter,
  placeholder,
  onChange,
}) => (
  <StyledInputWrapper>
    <StyledBadge>{resultsCounter}</StyledBadge>
    <StyledInput placeholder={placeholder} onChange={onChange} />
  </StyledInputWrapper>
);
