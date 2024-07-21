import { type RawData } from "actions/getRawData";

export default function buildData<O extends object = object>(
  params: RawData,
): O[] {
  if (!Array.isArray(params)) return [];

  const [keys, ...rows] = params;

  return rows.reduce(
    (prevRows, curRow) => [
      ...prevRows,
      keys.reduce((cells, key, index) => {
        const value = curRow[index];
        const numericValue = +value;

        return {
          ...cells,
          [key]:
            value === ""
              ? undefined
              : Number.isNaN(numericValue)
                ? value
                : numericValue,
        };
      }, {} as O),
    ],
    [] as O[],
  );
}
