import { cache } from "react";
import { google } from "googleapis";
import formatNewLine from "lib/formatNewLine";

export default cache(async function getAuth() {
  const privateKey = formatNewLine(process.env.GAPI_PRIVATE_KEY ?? "");

  try {
    const client = await google.auth.getClient({
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

    return client;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
});
