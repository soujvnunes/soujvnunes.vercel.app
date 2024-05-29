export default async function getClient() {
  const { google } = await import("googleapis");
  const googleClient = await google.auth.getClient({
    projectId: process.env.GAPI_PROJECT_ID,
    credentials: {
      type: "service_account",
      project_id: process.env.GAPI_PROJECT_ID,
      private_key_id: process.env.GAPI_PRIVATE_KEY_ID,
      private_key: process.env.GAPI_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GAPI_CLIENT_EMAIL,
      universe_domain: "googleapis.com",
    },
    scopes: [process.env.GAPI_SHEET_SCOPE ?? ""],
  });

  return googleClient;
}
