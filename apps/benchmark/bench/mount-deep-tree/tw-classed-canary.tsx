import { TestComponentProps, TestRunner } from "../TestRunner";
import { classed } from "@tw-classed/react";
import { Tree } from "../../utils/Tree";

export const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  const View = classed(
    "div",
    "flex items-stretch border-0 border-solid flex-col shrink-0 relative"
  );

  const Box = classed(View, "self-start", {
    variants: {
      color: {
        0: "bg-red-500",
        1: "bg-green-500",
        2: "bg-blue-500",
        3: "bg-yellow-500",
        4: "bg-purple-500",
        5: "bg-pink-500",
      },
      layout: {
        column: "!flex-col",
        row: "!flex-row",
      },
      outer: {
        true: "p-1",
      },
      fixed: {
        true: "w-[6px] h-[6px]",
      },
    },
  });

  return <Tree breadth={2} depth={7} id={0} wrap={1} box={Box} />;
};

const ClassedTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default ClassedTest;
