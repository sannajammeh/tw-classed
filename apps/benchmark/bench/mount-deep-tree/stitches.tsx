import { styled } from "@stitches/react";
import React from "react";
import { Tree } from "../../utils/Tree";
import { TestComponentProps, TestRunner } from "../TestRunner";

export const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  const View = styled("div", {
    alignItems: "stretch",
    borderWidth: "0",
    borderStyle: "solid",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0,
    margin: "0",
    padding: "0",
    position: "relative",
    minHeight: "0",
    minWidth: "0",
  });

  const Box = styled(View, {
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    "--tw-bg-opacity": "1",

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
      layout: {
        column: {
          flexDirection: "column",
        },
        row: {
          flexDirection: "row",
        },
      },
      outer: {
        true: {
          padding: "4px",
        },
      },
      fixed: {
        true: {
          width: "6px",
          height: "6px",
        },
      },
    },
  });

  return <Tree breadth={2} depth={7} id={0} wrap={1} box={Box} />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;
