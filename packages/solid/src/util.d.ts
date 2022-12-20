/** Narrowed function. */
export type Function = (...args: any[]) => unknown;

/** Returns a widened value from the given value. */
export type Widen<T> = T extends number
  ? `${T}` | T
  : T extends "true"
  ? boolean | T | "false"
  : T extends "false"
  ? boolean | T | "true"
  : T extends `${number}`
  ? number | T
  : T;

export type String = string & Record<never, never>;
