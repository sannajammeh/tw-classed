import { classed } from "@tw-classed/react";
import { Snippet, useSnippetSwitcher } from "components/SnippetSwitcher";
import { Container, Text, TwoColumn } from "components/ui";
import React from "react";
import {
  Feature,
  FeatureDescription,
  Features,
  FeatureTitle,
} from "./VariantShowcase";

const Code = classed(
  "code",
  "text-radix-violet11 bg-radix-violet3 px-1 text-sm"
);

interface Props {
  children: React.ReactNode;
}

const Composition = ({ children }: Props) => {
  const { index, setIndex, child } = useSnippetSwitcher(children, {
    fadeIn: true,
  });
  return (
    <Container>
      <TwoColumn>
        <div>
          <span className="bg-radix-violet3 text-radix-violet11 px-1 font-medium rounded-sm text-lg">
            Composition
          </span>
          <Text variant="title">Style external components with ease.</Text>

          <Features>
            <Feature active={index === 0} onClick={() => setIndex(0)}>
              <FeatureTitle>Classed composition</FeatureTitle>
              <FeatureDescription>
                Use the <Code>classed</Code> function to style external
                components.
              </FeatureDescription>
            </Feature>
            <Feature active={index === 1} onClick={() => setIndex(1)}>
              <FeatureTitle>
                The
                <Code>as</Code>
                prop
              </FeatureTitle>
              <FeatureDescription>
                Use the <Code>as</Code> prop set your classed component to a
                different one.
              </FeatureDescription>
            </Feature>
          </Features>
        </div>
        <Snippet className="md:mt-16">{child}</Snippet>
      </TwoColumn>
    </Container>
  );
};

export default Composition;
