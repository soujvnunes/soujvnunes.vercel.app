import buildData from "lib/buildData";
import getRawData, { type RawDataProps } from "./getRawData";

export default async function getData<O extends object = object>(
  props: RawDataProps,
) {
  try {
    const rawData = await getRawData(props);
    const data = buildData<O>(rawData);

    return data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
