export interface BundleSizes {
  react: React;
  core: Core;
}

export interface Core {
  scoped: boolean;
  name: string;
  version: string;
  description: string;
  repository: string;
  dependencyCount: number;
  hasJSNext: boolean;
  hasJSModule: boolean;
  isModuleType: boolean;
  hasSideEffects: boolean;
  peerDependencies: any[];
  assets: Asset[];
  dependencySizes: DependencySize[];
  size: number;
  gzip: number;
  parse: null;
}

export interface Asset {
  name: string;
  type: string;
  size: number;
  gzip: number;
  parse: null;
}

export interface DependencySize {
  name: string;
  approximateSize: number;
}

export interface React {
  scoped: boolean;
  name: string;
  version: string;
  description: string;
  repository: string;
  dependencyCount: number;
  hasJSNext: boolean;
  hasJSModule: string;
  isModuleType: boolean;
  hasSideEffects: boolean;
  peerDependencies: string[];
  assets: Asset[];
  dependencySizes: DependencySize[];
  size: number;
  gzip: number;
  parse: null;
}
