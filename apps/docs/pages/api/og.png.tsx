import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default async function () {
  const image = new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col items-center justify-center text-white bg-black"
        style={{
          backgroundImage:
            "radial-gradient(circle at 550px 250px, #2c2250, rgba(0, 0, 0, 0) 40%), radial-gradient(circle at 650px 350px, #07303b, rgba(0, 0, 0, 0) 80%), radial-gradient(circle at 1100px 100px, #102a4c, rgba(0, 0, 0, 0) 10%)",
        }}
      >
        <svg
          width="168"
          height="168"
          viewBox="0 0 168 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="84"
            cy="84"
            r="83"
            fill="transparent"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M36.0179 40.9043H14.6087L45.6151 133.658H67.0242L93.6011 58.713H116.487L122.393 40.9043H44.1386L50.7828 58.713H72.192V60.1971L58.1653 101.009L36.0179 40.9043Z"
            fill="white"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M109.843 100.267L98.0306 68.3594L88.4334 96.5565L100.245 134.4H122.393L152.661 40.9043H130.513L109.843 100.267Z"
            fill="white"
            stroke="black"
            stroke-width="2"
          />
          <circle
            cx="84"
            cy="84"
            r="82.5"
            fill="transparent"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M36.0179 40.9043H14.6087L45.6151 133.658H67.0242L93.6011 58.713H116.487L122.393 40.9043H44.1386L50.7828 58.713H72.192V60.1971L58.1653 101.009L36.0179 40.9043Z"
            fill="white"
          />
          <path
            d="M109.843 100.267L98.0306 68.3594L88.4334 96.5565L100.245 134.4H122.393L152.661 40.9043H130.513L109.843 100.267Z"
            fill="white"
          />
        </svg>

        <div tw="flex flex-col items-center">
          <h1 tw="m-0 text-4xl font-black">TW CLASSED</h1>
          <p tw="m-0 text-2xl">Make your Tailwind components reusable.</p>
        </div>
      </div>
    )
  );

  return image;
}
