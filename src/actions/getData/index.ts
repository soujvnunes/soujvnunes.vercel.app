import { type RawDataProps } from "./getRawData";

export default async function getData<O extends object = object>(
  props: RawDataProps,
) {
  try {
    const { default: formatRawData } = await import("./formatRawData");
    const { default: getRawData } = await import("./getRawData");
    const rawData = await getRawData(props);
    const data = formatRawData<O>(rawData);

    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
