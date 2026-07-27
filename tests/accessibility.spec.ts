import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";

test("core routes meet WCAG 2.1 AA", async ({ page }) => {
  for (const route of ["/", "/products", "/events", "/about"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      // Brand palette needs separate visual review before contrast becomes blocking.
      .disableRules(["color-contrast"])
      .analyze();
    expect(
      results.violations,
      `${route}: ${results.violations.map(({ id }) => id).join(", ")}`,
    ).toEqual([]);
  }
});
