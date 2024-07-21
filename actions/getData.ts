import buildData from "lib/buildData";
import getRawData, { type RawDataProps } from "./getRawData";

export default async function getData<O extends object = object>(
  props: RawDataProps,
) {
  const rawData = await getRawData(props);
  const data = buildData<O>(rawData);

  return data;
}
