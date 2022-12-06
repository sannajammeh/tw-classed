import { TestComponentProps, TestRunner } from "../TestRunner";
import { Tree } from "../../utils/Tree";
import clsx from "clsx";

export const Test = ({ testIndex }: TestComponentProps) => {
  const Box = ({ children, color, layout, outer, fixed, ...props }) => {
    return (
      <div
        className={clsx(
          "flex items-stretch border-0 border-solid flex-col shrink-0 relative",
          "self-start",
          color && `bg-${color}-500`,
          layout && `!flex-${layout}`,
          outer && "p-1",
          fixed && "w-[6px] h-[6px]"
        )}
        {...props}
      >
        {children}
      </div>
    );
  };

  return <Tree breadth={2} depth={7} id={0} wrap={1} box={Box} />;
};

const ClsxTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default ClsxTest;
