// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { exec } from "shelljs";

const getStats = (lib: string) => {
  return new Promise<string>((resolve, reject) => {
    exec(
      `bundle-phobia --json ${lib}`,
      { silent: true },
      (code, stdout, stderr) => {
        if (code !== 0) {
          reject(stderr);
        } else {
          resolve(JSON.parse(stdout));
        }
      }
    );
  });
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
