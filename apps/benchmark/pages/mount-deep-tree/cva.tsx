import dynamic from "next/dynamic";

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(
    () => import("../../bench/mount-deep-tree/cva"),
    { ssr: false }
  );

  return (
    <>
      <h1 className="text-lg font-bold">Class Variance Authority</h1>
      <StitchesTest />
    </>
  );
};

export default SierpinskiTriangle;
