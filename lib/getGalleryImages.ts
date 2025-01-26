import { importAll } from "";

// Define the paths object with specific typing for each path key
const paths: Record<string, __WebpackModuleApi.RequireContext> = {
  epsilon: require.context(
    "../../public/epsilon/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  ses: require.context(
    "../../public/ses/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  ingenuity: require.context(
    "../../public/ingenuity/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  openlake: require.context(
    "../../public/openlake/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  electromos: require.context(
    "../../public/electromos/gallery",
    false,
    /\.(png|JPG|jpe?g|svg|gif)$/
  ),
  dsai: require.context(
    "../../public/dsai/gallery",
    false,
    /\.(png|jpe?g|svg|gif)$/
  ),
  // Uncomment and add more paths as needed
  // gdsc: require.context('../../public/gdsc/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
  // motorsports: require.context('../../public/motorsports/gallery', false, /\.(png|JPG|jpe?g|svg|gif)$/),
};

export function getGalleryImages(path: string): string[] {
  const context = paths[path];

  if (!context) {
    throw new Error(`Path "${path}" is not defined in paths.ts`);
  }

  // Use importAll to load the images dynamically
  return Object.values(importAll(context));
}
