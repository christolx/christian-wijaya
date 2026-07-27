import { test as base, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

export const test = base.extend({
  page: async ({ page }, use, testInfo) => {
    const collectCoverage = testInfo.project.name === "desktop";

    if (collectCoverage) {
      await page.coverage.startJSCoverage({
        resetOnNavigation: false,
        reportAnonymousScripts: true,
      });
    }

    await use(page);

    if (collectCoverage) {
      const coverage = await page.coverage.stopJSCoverage();
      const coverageDir = join(process.cwd(), "coverage", "raw");
      await mkdir(coverageDir, { recursive: true });
      await writeFile(
        join(coverageDir, `${testInfo.testId}.json`),
        JSON.stringify(coverage),
      );
    }
  },
});

export { expect };
