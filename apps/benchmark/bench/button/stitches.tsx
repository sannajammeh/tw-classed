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
  });

  return <Button style={{ "--test-index": testIndex } as any}>testing</Button>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
