export interface RawDataProps {
  id?: string;
}

export default async function getRawData(props: RawDataProps) {
  const { default: getAuth } = await import("./getAuth");

  const auth = await getAuth();

  const googleSheets = auth.api.sheets({
    version: "v4",
    auth: auth.client,
  });
  const googleSheet = await googleSheets.spreadsheets.values.get({
    spreadsheetId: process.env.GAPI_SHEET_ID,
    range: props.id,
  });

  return googleSheet.data.values;
}

export type RawData = Awaited<ReturnType<typeof getRawData>>;
