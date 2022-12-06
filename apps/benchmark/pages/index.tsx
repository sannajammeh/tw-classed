import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/mount-deep-tree">Mount deep tree</Link>
        </li>
        <li>
          <Link href="/button">Mount and unmount button</Link>
        </li>
        <li>
          <Link href="/button-variants">Mount and unmount button variants</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
