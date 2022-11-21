import classed, { ClassedFunctionProxy } from "./index";

export const classedProxy = new Proxy(classed, {
  get: (_, type) => {
    return function (this: unknown, ...args: any[]) {
      return classed.apply(this, [type as any, ...args]);
    };
  },
}) as ClassedFunctionProxy;
