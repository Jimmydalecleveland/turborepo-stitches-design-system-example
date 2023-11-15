import { Column, Columns } from "../Columns";
import { Text } from "../Text";
import Quote from "./Quote";

export interface BlockQuoteProps {
  children: React.ReactNode;
  citationLink?: string;
}

const BlockQuote = ({ children, citationLink }: BlockQuoteProps) => {
  return (
    <Columns space="04" alignY="top">
      <Column width="content">
        <Quote />
      </Column>
      <Column>
        <blockquote cite={citationLink} style={{ margin: 0 }}>
          <Text as="p" size="xl" vibe="subdued" weight="heavy">
            {children}
          </Text>
        </blockquote>
      </Column>
    </Columns>
  );
};

export default BlockQuote;
