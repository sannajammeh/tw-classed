import React from "react";
import { TestComponentProps, TestRunner } from "../TestRunner";

/** This test aims to measure the baseline of just using React with vanilla CSS techniques (no CSS-in-JS) */
const Test = ({ testIndex }: TestComponentProps) => {
  return (
    <button
      style={{ "--test-index": testIndex } as any}
      className="inline-flex items-center justify-center text-black bg-white rounded-lg h-6 px-3"
    >
      testing
    </button>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
