// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";

const getStats = (lib: string) => {
  return fetch(`https://bundlephobia.com/api/size?package=${lib}`).then((res) =>
    res.json()
  );
};

export default async function handler(_: any, res: NextApiResponse) {
  const [react, core] = await Promise.all([
    getStats("@tw-classed/react@latest"),
    getStats("@tw-classed/core@latest"),
  ]);

  // Set cache
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  res.status(200).json({
    react: react,
    core: core,
  });
}
