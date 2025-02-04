import { importAll } from "./importAll";

export type PathsKey =
  | "epsilon"
  | "ses"
  | "ingenuity"
  | "openlake"
  | "electromos"
  | "dsai"
  | "gdg"
  | "bib"
  | "motorsports"
  | "spectre";

const paths: Record<PathsKey, __WebpackModuleApi.RequireContext> = {
  epsilon: require.context(
    "../public/epsilon/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  ses: require.context(
    "../public/ses/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  ingenuity: require.context(
    "../public/ingenuity/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  openlake: require.context(
    "../public/openlake/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  electromos: require.context(
    "../public/electromos/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  dsai: require.context(
    "../public/dsai/gallery",
    false,
    /\.(png|jpe?g|svg|gif)$/
  ),
  gdg: require.context(
    "../public/gdg/gallery",
    false,
    /\.(png|jpe?g|svg|gif)$/
  ),
  bib: require.context(
    "../public/bib/gallery",
    false,
    /\.(png|jpe?g|svg|gif)$/
  ),
  motorsports: require.context(
    "../public/motorsports/gallery",
    false,
    /\.(png|jpe?g|svg|gif)$/
  ),
  spectre: require.context(
    "../public/spectre/gallery",
    false,
    /\.(png|jpe?g|svg|gif)$/
  ),
};

export function getGalleryImages(path: PathsKey): string[] {
  const context = paths[path];
  if (!context) {
    throw new Error(`Path "${path}" is not defined in paths.`);
  }
  return Object.values(importAll(context));
}
