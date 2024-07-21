export default function formatNewLine(params: string) {
  return params?.replace(/\\n/g, "\n");
}
