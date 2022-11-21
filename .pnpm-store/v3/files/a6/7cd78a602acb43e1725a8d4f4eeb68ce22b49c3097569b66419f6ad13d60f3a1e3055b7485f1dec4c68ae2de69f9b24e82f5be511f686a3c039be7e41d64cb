import * as vitest from 'vitest';
import { CoverageProvider, ResolvedCoverageOptions, CoverageC8Options } from 'vitest';
import { Vitest } from 'vitest/node';

declare class C8CoverageProvider implements CoverageProvider {
    name: string;
    ctx: Vitest;
    options: ResolvedCoverageOptions & {
        provider: 'c8';
    };
    initialize(ctx: Vitest): void;
    resolveOptions(): ({
        tempDirectory: string;
    } & Required<vitest.BaseCoverageOptions & {
        provider?: vitest.CoverageProviderModule | null | undefined;
    }> & {
        provider: "c8";
    }) | ({
        tempDirectory: string;
    } & Required<CoverageC8Options & {
        provider?: "c8" | undefined;
    }> & {
        provider: "c8";
    });
    onBeforeFilesRun(): void;
    clean(clean?: boolean): Promise<void>;
    onAfterSuiteRun(): void;
    reportCoverage(): Promise<void>;
}

declare function takeCoverage(): void;

declare function getProvider(): Promise<C8CoverageProvider>;

export { getProvider, takeCoverage };
