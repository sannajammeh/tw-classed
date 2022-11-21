import * as React from "react";
/** @deprecated */
export declare function createNamedContext<ContextValueType>(name: string, defaultValue: ContextValueType): React.Context<ContextValueType>;
declare type ContextProvider<T> = React.FC<React.PropsWithChildren<T>>;
export declare function createContext<ContextValueType extends object | null>(rootName: string, defaultContext?: ContextValueType): [
    ContextProvider<ContextValueType>,
    (childName: string) => ContextValueType
];
export {};
