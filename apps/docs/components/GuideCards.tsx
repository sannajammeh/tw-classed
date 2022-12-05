import { DownloadIcon, TransformIcon, GearIcon } from "@radix-ui/react-icons";
import React from "react";
import { Cards, Card } from "./ui/Card";

const GuideCards = () => {
  return (
    <div className="mt-12 mb-24">
      <Cards>
        <Card href="/docs/installation">
          <DownloadIcon />
          <h3>Installation</h3>
        </Card>
        <Card href="/docs/variants">
          <TransformIcon />
          <h3>Using Variants</h3>
        </Card>
        <Card href="/docs/guide/extending-classed">
          <GearIcon />
          <h3>Configuring Classed</h3>
        </Card>
      </Cards>
    </div>
  );
};

export default GuideCards;
