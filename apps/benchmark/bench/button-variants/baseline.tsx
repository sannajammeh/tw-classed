import React from "react";
import { TestComponentProps, TestRunner } from "../TestRunner";

/** This test aims to measure the baseline of just using React with vanilla CSS techniques (no CSS-in-JS) */
const Test = ({ testIndex }: TestComponentProps) => {
  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-red-500";
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-blue-500";
      case 3:
        return "bg-yellow-500";
      case 4:
        return "bg-purple-500";
      default:
        return "";
    }
  };

  return (
    <button
      style={{ "--test-index": testIndex } as any}
      className={`inline-flex items-center justify-center text-black bg-white rounded-lg h-6 px-3 ${getColor(
        testIndex % 5
      )}`}
    >
      testing
    </button>
  );
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
