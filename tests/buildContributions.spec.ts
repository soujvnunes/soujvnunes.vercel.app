import test, { expect } from "@playwright/test";
import buildContributions from "lib/buildContributions";

test("should build contributions correctly", async () => {
  const rawContributions = [
    ["id", "tags", "visit", "contribution", "article", "presentation"],
    [
      "1",
      "NextJS,TailwindCSS,Figma",
      "https://www.visit.io",
      "null",
      "https://www.article.io",
      "null",
    ],
  ];
  const contributions = buildContributions(rawContributions);

  expect(contributions).toEqual([
    {
      id: "1",
      tags: ["NextJS", "TailwindCSS", "Figma"],
      actions: [
        {
          name: "visit",
          href: "https://www.visit.io",
          iconStart: "ArrowOutward",
        },
        {
          name: "article",
          href: "https://www.article.io",
          iconStart: "Medium",
        },
      ],
    },
  ]);
});
