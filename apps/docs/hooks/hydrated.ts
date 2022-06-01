import { useEffect, useState } from "react";

export default function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}
