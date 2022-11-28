import { classed } from "@tw-classed/react";
import React from "react";
import useSWR from "swr";
import { BundleSizes } from "types/BundleSizes";

export const useBundleSize = () => {
  return useSWR<BundleSizes>("/api/bundlesize", (url) =>
    fetch(url).then((r) => r.json())
  );
};

const Stats = () => {
  const { data: bundlesize } = useBundleSize();

  return (
    <section data-aos="fadeInUp" data-aos-mount>
      <h2 className="text-center text-4xl font-bold mb-4">Stats</h2>
      <StatList>
        <Stat>
          Bundle size ( core )
          <StatValue>{formatBytes(bundlesize?.core.gzip)}</StatValue>
        </Stat>
        <Stat>
          Bundle size ( react )
          <StatValue>{formatBytes(bundlesize?.react.gzip)}</StatValue>
        </Stat>
        <Stat>
          Variants
          <StatValue>
            <span className="text-radix-cyan11">∞</span>
          </StatValue>
        </Stat>
      </StatList>
    </section>
  );
};

export default Stats;

const StatList = classed(
  "ul",
  "flex justify-around flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
);

const Stat = classed("li", "flex flex-col text-lg text-radix-slate11");
const StatValue = classed("span", "text-3xl font-bold text-radix-slate12");

export const formatBytes = (bytes?: number) => {
  if (!bytes) return "0kb";
  try {
    const ByteFormatter = new Intl.NumberFormat("en", {
      notation: "compact",
      style: "unit",
      unit: "byte",
      unitDisplay: "narrow",
    });

    return ByteFormatter.format(bytes);
  } catch (error) {
    return (bytes / 1000).toFixed(2) + "kb";
  }
};
