import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/button/baseline">Baseline</Link>
        </li>
        <li>
          <Link href="/button/tw-classed-canary">TwClassed React canary</Link>
        </li>
        <li>
          <Link href="/button/stitches">Stitches React latest</Link>
        </li>
        <li>
          <Link href="/button/cva">Class Variance Authority latest</Link>
        </li>
      </ul>
    </div>
  );
}
