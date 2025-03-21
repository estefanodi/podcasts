import { StyledIndicator } from "./styles";

type IndicatorProps = {
  isVisible: boolean;
};

export const Indicator: React.FC<IndicatorProps> = ({ isVisible }) => {
  return isVisible ? <StyledIndicator /> : null;
};
