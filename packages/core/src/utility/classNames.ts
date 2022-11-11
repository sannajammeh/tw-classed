export const joinClasses = (classNames: string[]) => classNames.join(" ");

export const mergeClass = (
  c1: string,
  c2: string | null | undefined | boolean
) => {
  if (typeof c2 === "boolean") return c1;
  if (!c2) return c1;
  // Check if c1 is empty
  if (c1.length === 0) return c2;
  // Check if c2 is empty
  if (c2.length === 0) return c1;

  return c1 + " " + c2;
};
