import { google } from "googleapis";
import getAuth from "./getAuth";

export interface RawDataProps {
  id?: string;
}
export type RawData = string[][] | null | undefined;

export default async function getRawData(
  props: RawDataProps,
): Promise<RawData> {
  try {
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
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
