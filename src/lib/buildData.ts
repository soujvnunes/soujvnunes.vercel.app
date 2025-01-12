import { type RawData } from "actions/getRawData";

type Data<O extends object = object> = Partial<O>;

export default function buildData<O extends object = object>(
  params: RawData,
): Data<O>[] | null {
  if (!Array.isArray(params)) return null;

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
            // Asserts each value as partial (Partial<O>) as they're unpredictable.
            !value
              ? undefined
              : Number.isNaN(numericValue)
                ? value
                : numericValue,
        };
      }, {} as Data<O>),
    ],
    [] as Data<O>[],
  );
}
