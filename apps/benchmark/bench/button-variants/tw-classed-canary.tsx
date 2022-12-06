import React from "react";
import { TestComponentProps, TestRunner } from "../TestRunner";
import { classed } from "@tw-classed/react";

/** This test aims to measure the baseline of just using React with vanilla CSS techniques (no CSS-in-JS) */
const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  const Button = classed(
    "button",
    "inline-flex items-center justify-center text-black bg-white rounded-lg h-6 px-3",
    {
      variants: {
        color: {
          0: "!bg-red-500",
          1: "!bg-green-500",
          2: "!bg-blue-500",
          4: "!bg-yellow-500",
          5: "!bg-purple-500",
        },
      },
    }
  ) as any;

  return (
    <Button
      color={(testIndex % 3) as any}
      style={{ "--test-index": testIndex }}
    >
      testing
    </Button>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
