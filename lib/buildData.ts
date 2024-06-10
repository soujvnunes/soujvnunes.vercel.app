import { type Data } from "actions/getData";

export default function buildData<O extends object = object>(
  params: Data,
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
    [],
  );
}
