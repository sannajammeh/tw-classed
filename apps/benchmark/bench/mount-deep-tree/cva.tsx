import { TestComponentProps, TestRunner } from "../TestRunner";
import { Tree } from "../../utils/Tree";
import { cva, cx } from "class-variance-authority";

export const Test = ({ testIndex }: TestComponentProps) => {
  const view = cva([
    "flex",
    "items-stretch",
    "border-0",
    "border-solid",
    "flex-col",
    "shrink-0",
    "relative",
  ]);

  const box = cva(["self-start"], {
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

  const Box = ({ children, color, layout, outer, fixed, ...props }) => {
    return (
      <div
        className={cx(view(), box({ color, layout, outer, fixed }))}
        {...props}
      >
        {children}
      </div>
    );
  };

  return <Tree breadth={2} depth={7} id={0} wrap={1} box={Box} />;
};

const CvaTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default CvaTest;
