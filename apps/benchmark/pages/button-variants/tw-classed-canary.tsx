import dynamic from "next/dynamic";

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(
    () => import("../../bench/button-variants/tw-classed-canary"),
    {
      ssr: false,
    }
  );

  return (
    <>
      <h1 className="text-lg font-bold">tw-classed-canary</h1>
      <StitchesTest />
    </>
  );
};

export default SierpinskiTriangle;
