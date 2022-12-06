import dynamic from "next/dynamic";

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(() => import("../../bench/button/stitches"), {
    ssr: false,
  });

  return (
    <>
      <h1 className="text-lg font-bold">stitches</h1>
      <StitchesTest />
    </>
  );
};

export default SierpinskiTriangle;
