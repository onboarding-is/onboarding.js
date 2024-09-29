type BrowserTarget = 'es2020' | 'legacy'

export function getBrowserTarget(agent: string): BrowserTarget {
  const options = [
    { browserRegExp: /Edg\//, versionRegExp: /Edg\/(\d+)/, minVersion: 80 },
    { browserRegExp: /OPR\//, versionRegExp: /OPR\/(\d+)/, minVersion: 67 },
    { browserRegExp: /Chrome\//, versionRegExp: /Chrome\/(\d+)/, minVersion: 80 },
    { browserRegExp: /CriOS\//, versionRegExp: /CriOS\/(\d+)/, minVersion: 100 },
    { browserRegExp: /Safari\//, versionRegExp: /Version\/(\d+)/, minVersion: 14 },
    { browserRegExp: /Firefox\//, versionRegExp: /Firefox\/(\d+)/, minVersion: 74 },
  ];

  const browser = options.find(({ browserRegExp }) => browserRegExp.test(agent));

  if (browser) {
    const versionMatch = agent.match(browser.versionRegExp);
    if (versionMatch && parseInt(versionMatch[1], 10) >= browser.minVersion) {
      return 'es2020';
    }
  }

  return 'legacy';
}
