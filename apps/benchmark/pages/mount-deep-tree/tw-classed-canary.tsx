import dynamic from "next/dynamic";

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(
    () => import("../../bench/mount-deep-tree/tw-classed-canary"),
    { ssr: false }
  );

  return (
    <>
      <h1 className="text-lg font-bold">Tw Classed Canary</h1>
      <StitchesTest />
    </>
  );
};

export default SierpinskiTriangle;
