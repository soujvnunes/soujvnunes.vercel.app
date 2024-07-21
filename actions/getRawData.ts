import { google } from "googleapis";
import getAuth from "./getAuth";

export interface RawDataProps {
  id?: string;
}
export type RawData = string[][] | null | undefined;

export default async function getRawData(
  props: RawDataProps,
): Promise<RawData> {
  const auth = await getAuth();

  const googleSheets = google.sheets({
    version: "v4",
    auth,
  });

  const googleSheet = await googleSheets.spreadsheets.values.get({
    spreadsheetId: process.env.GAPI_SHEET_ID,
    range: props.id,
  });

  return googleSheet.data.values;
}
