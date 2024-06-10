import { type RawDataProps } from "./getRawData";

export default async function getData<O extends object = object>(
  props: RawDataProps,
) {
  const { default: getRawData } = await import("actions/getRawData");
  const { default: buildData } = await import("lib/buildData");

  const rawData = await getRawData(props);
  const data = buildData<O>(rawData);

  return data;
}
