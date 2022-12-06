import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/button-variants/baseline">Baseline</Link>
        </li>
        <li>
          <Link href="/button-variants/tw-classed-canary">
            TwClassed React canary
          </Link>
        </li>
        <li>
          <Link href="/button-variants/stitches">Stitches React latest</Link>
        </li>
        <li>
          <Link href="/button-variants/cva">
            Class Variance Authority latest
          </Link>
        </li>
      </ul>
    </div>
  );
}
