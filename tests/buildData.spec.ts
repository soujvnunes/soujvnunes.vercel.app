import test, { expect } from "@playwright/test";
import buildSheet from "lib/buildSheet";

test("should build contributions correctly", async () => {
  type Sheet = {
    id: number;
    year?: number;
    href?: string;
  };

  const raw = [
    ["id", "year", "href"],
    ["1", "2024"],
    ["2", "", "https://www.com.br"],
  ];
  const contributions = buildSheet<Sheet>(raw);

  expect(contributions).toEqual([
    {
      id: 1,
      year: 2024,
      href: undefined,
    },
    {
      id: 2,
      year: undefined,
      href: "https://www.com.br",
    },
  ]);
});
