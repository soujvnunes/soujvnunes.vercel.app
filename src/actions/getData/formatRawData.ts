import type { RawData } from "./getRawData";

type Data<O extends object = object> = Partial<O>;

export default function formatRawData<O extends object = object>(
  params: RawData,
): Data<O>[] | null {
  if (!Array.isArray(params)) return null;

  const [keys, ...rows] = params;

  return rows.reduce(
    (prevRows, curRow) => [
      ...prevRows,
      keys.reduce((cells, key, index) => {
        const value = curRow[index];
        const numericValue = Number(value);

        if (!value) {
          // Asserts each value as partial (Partial<O>) as they're unpredictable.
          return { ...cells, [key]: undefined };
        }

        if (Number.isNaN(numericValue)) {
          return { ...cells, [key]: value };
        }

        return { ...cells, [key]: numericValue };
      }, {} as Data<O>),
    ],
    [] as Data<O>[],
  );
}
