type RequireContext = {
  keys: () => string[];
  (id: string): string;
};

export function importAll(r: RequireContext): Record<string, string> {
  const images: Record<string, string> = {};
  r.keys().forEach((key: string) => {
    images[key.replace("./", "")] = r(key);
  });
  return images;
}
