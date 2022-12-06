import React from "react";
import { TestComponentProps, TestRunner } from "../TestRunner";
import { styled } from "@stitches/react";

/** This test aims to measure the baseline of just using React with vanilla CSS techniques (no CSS-in-JS) */
const Test = ({ testIndex }: TestComponentProps) => {
  const Button = styled("button", {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    backgroundColor: "white",
    borderRadius: "lg",
    height: "6",
    paddingX: "3",
    variants: {
      color: {
        0: {
          backgroundColor: "rgb(239 68 68 / var(--tw-bg-opacity))",
        },
        1: {
          backgroundColor: "rgb(34 197 94 / var(--tw-bg-opacity))",
        },
        2: {
          backgroundColor: "rgb(59 130 246 / var(--tw-bg-opacity))",
        },
        3: {
          backgroundColor: "rgb(234 179 8 / var(--tw-bg-opacity))",
        },
        4: {
          backgroundColor: "rgb(168 85 247 / var(--tw-bg-opacity))",
        },
        5: {
          backgroundColor: "rgb(236 72 153 / var(--tw-bg-opacity))",
        },
      },
    },
  });

  return <Button style={{ "--test-index": testIndex } as any}>testing</Button>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
