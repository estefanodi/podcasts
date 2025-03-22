import { StyledInputWrapper, StyledBadge, StyledInput } from "../styles";

type InputWithBadgeProps = {
  resultsCounter: number;
  placeholder: string;
  onChange: (e: { target: { value: string } }) => void;
  value: string;
};

export const InputWithBadge: React.FC<InputWithBadgeProps> = ({
  resultsCounter,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <StyledInputWrapper>
      <StyledBadge>{resultsCounter}</StyledBadge>
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </StyledInputWrapper>
  );
};
