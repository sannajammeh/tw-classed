import dynamic from "next/dynamic";

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(() => import("../../bench/button/baseline"), {
    ssr: false,
  });

  return (
    <>
      <h1 className="text-lg font-bold">Baseline</h1>
      <StitchesTest />
    </>
  );
};

export default SierpinskiTriangle;
