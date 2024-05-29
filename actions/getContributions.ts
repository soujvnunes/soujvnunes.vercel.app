export async function getContributions() {
  const { google } = await import("googleapis");
  const { default: getClient } = await import("./getClient");
  const client = await getClient();
  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });
  const googleSheet = await googleSheets.spreadsheets.values.get({
    spreadsheetId: process.env.GAPI_SHEET_ID,
    range: process.env.GAPI_SHEET_RANGE,
  });

  return googleSheet.data.values;
}

export type RawContributions = Awaited<ReturnType<typeof getContributions>>;
