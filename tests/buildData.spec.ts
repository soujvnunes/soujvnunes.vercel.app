import test, { expect } from "@playwright/test";
import buildData from "lib/buildData";

test("should build data correctly", async () => {
  type Data = {
    id: number;
    year?: number;
    href?: string;
  };

  const rawData = [
    ["id", "year", "href"],
    ["1", "2024"],
    ["2", "", "https://www.com.br"],
  ];
  const data = buildData<Data>(rawData);

  expect(data).toEqual([
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
