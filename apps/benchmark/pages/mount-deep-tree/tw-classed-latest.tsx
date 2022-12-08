import dynamic from "next/dynamic";

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(
    () => import("../../bench/mount-deep-tree/tw-classed-latest"),
    { ssr: false }
  );

  return (
    <>
      <h1 className="text-lg font-bold">Tw Classed current</h1>
      <StitchesTest />
    </>
  );
};

export default SierpinskiTriangle;
