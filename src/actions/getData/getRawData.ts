import { cache } from "react";

export interface RawDataProps {
  id?: string;
}
export type RawData = string[][] | null | undefined;

async function getRawData(props: RawDataProps): Promise<RawData> {
  const { google } = await import("googleapis");
  const privateKey = process.env.GAPI_PRIVATE_KEY?.replace(/\\n/g, "\n");

  try {
    const auth = await google.auth.getClient({
      projectId: process.env.GAPI_PROJECT_ID,
      credentials: {
        type: process.env.GAPI_TYPE,
        project_id: process.env.GAPI_PROJECT_ID,
        private_key_id: process.env.GAPI_PRIVATE_KEY_ID,
        private_key: privateKey,
        client_email: process.env.GAPI_CLIENT_EMAIL,
        universe_domain: process.env.GAPI_UNIVERSAL_DOMAIN,
      },
      scopes: [process.env.GAPI_SHEET_SCOPE ?? ""],
    });
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

export default cache(getRawData);
