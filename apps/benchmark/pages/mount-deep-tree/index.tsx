import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="mount-deep-tree/tw-classed-latest">
            TwClassed React latest
          </Link>
        </li>
        <li>
          <Link href="mount-deep-tree/tw-classed-canary">
            TwClassed React canary
          </Link>
        </li>
        <li>
          <Link href="mount-deep-tree/stitches">Stitches React latest</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/clsx">clsx</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/cva">Class Variance Authority</Link>
        </li>
      </ul>
    </div>
  );
}
