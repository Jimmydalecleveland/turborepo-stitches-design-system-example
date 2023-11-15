import { styled } from "../../theme/stitches.config";
import { Text } from "../../Text/Text.styles";

export const CardHeading = styled(Text, {
  letterSpacing: "1.5px",
  textTransform: "uppercase",

  defaultVariants: {
    size: "xs",
    weight: "heavy",
  },
});
