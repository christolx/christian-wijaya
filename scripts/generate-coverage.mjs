import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { CoverageReport } from "monocart-coverage-reports";

const rawDir = join(process.cwd(), "coverage", "raw");
const files = await readdir(rawDir);
const report = new CoverageReport({
  name: "Browser coverage",
  outputDir: "coverage",
  reports: ["v8", "lcovonly", "markdown-summary"],
  entryFilter: {
    "**/node_modules/**": false,
    "http://127.0.0.1:4321/**": true,
    "**": false,
  },
  onEnd: (results) => {
    const threshold = 60;
    const covered = results?.summary.bytes.pct;
    if (typeof covered !== "number" || covered < threshold) {
      throw new Error(
        `Coverage threshold not met: ${covered ?? 0}% < ${threshold}% bytes.`,
      );
    }
  },
});

for (const file of files.filter((file) => file.endsWith(".json"))) {
  await report.add(JSON.parse(await readFile(join(rawDir, file), "utf8")));
}

await report.generate();
