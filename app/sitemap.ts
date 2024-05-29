export default function sitemap() {
  const routes = ["", "/about"].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
