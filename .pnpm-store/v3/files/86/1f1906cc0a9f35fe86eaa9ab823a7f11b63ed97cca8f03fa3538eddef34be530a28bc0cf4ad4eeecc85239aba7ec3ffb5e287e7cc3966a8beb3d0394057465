import v8 from 'v8';

function takeCoverage() {
  if (v8.takeCoverage == null)
    console.warn("[Vitest] takeCoverage is not available in this NodeJs version.\nCoverage could be incomplete. Update to NodeJs 14.18.");
  else
    v8.takeCoverage();
}

async function getProvider() {
  const { C8CoverageProvider } = await import('./provider-cb65be9c.js');
  return new C8CoverageProvider();
}

export { getProvider, takeCoverage };
