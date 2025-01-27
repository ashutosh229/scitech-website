export function importAll(r: any): Record<string, string> {
  const images: Record<string, string> = {};

  r.keys().forEach((item: string) => {
    images[item.replace("./", "")] = r(item);
  });

  return images;
}
