import React from "react";
import { TestComponentProps, TestRunner } from "../TestRunner";
import { cva } from "class-variance-authority";

/** This test aims to measure the baseline of just using React with vanilla CSS techniques (no CSS-in-JS) */
const Test = ({ testIndex }: TestComponentProps) => {
  const Button = cva([
    "inline-flex items-center justify-center text-black bg-white rounded-lg h-6 px-3",
  ]);

  return (
    <button className={Button()} style={{ "--test-index": testIndex } as any}>
      testing
    </button>
  );
};

const CvaTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default CvaTest;
