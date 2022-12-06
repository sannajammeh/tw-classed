import dynamic from "next/dynamic";

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(
    () => import("../../bench/button-variants/cva"),
    {
      ssr: false,
    }
  );

  return (
    <>
      <h1 className="text-lg font-bold">Class Variance authority</h1>
      <StitchesTest />
    </>
  );
};

export default SierpinskiTriangle;
