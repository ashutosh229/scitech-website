export function importAll(
  r: __WebpackModuleApi.RequireContext
): Record<string, string> {
  const images: Record<string, string> = {};

  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item) as string;
  });

  return images;
}
