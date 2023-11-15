import { styled } from "../theme/stitches.config";

const QuoteSymbol = styled("span", {
  fontFamily: "$body",
  fontSize: "6rem",
  color: "$textNeutral",
  lineHeight: 0.8,
});

const Quote = () => <QuoteSymbol>&quot;</QuoteSymbol>;

export default Quote;
