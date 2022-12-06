import dynamic from "next/dynamic";

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(
    () => import("../../bench/mount-deep-tree/clsx"),
    { ssr: false }
  );

  return (
    <>
      <h1 className="text-lg font-bold">CLSX</h1>
      <StitchesTest />
    </>
  );
};

export default SierpinskiTriangle;
