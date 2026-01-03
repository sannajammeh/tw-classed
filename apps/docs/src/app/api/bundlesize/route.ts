// app/api/stats/route.ts
import { NextResponse } from "next/server";

const getStats = (lib: string) => {
  return fetch(`https://bundlephobia.com/api/size?package=${lib}`).then((res) =>
    res.json()
  );
};

export async function GET() {
  const [react, core] = await Promise.all([
    getStats("@tw-classed/react@latest"),
    getStats("@tw-classed/core@latest"),
  ]);

  return NextResponse.json(
    {
      react: react,
      core: core,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=86400, stale-while-revalidate",
      },
    }
  );
}
