export const IMAGE_DIR = "images";

export async function fileUpload(file: File) {
  const isExist = await exists(IMAGE_DIR);
  if (!isExist) {
    Deno.mkdir(IMAGE_DIR);
  }

  const arrBuffer = await file.arrayBuffer();
  const uintArrBuffer = new Uint8Array(arrBuffer);
  const fileName = `${Date.now()}-${file.name}`;
  Deno.writeFile(`${IMAGE_DIR}/${fileName}`, uintArrBuffer, {
    create: true,
  });
  return fileName;
}

export async function deleteFile(file: string) {
  try {
    const isExist = await exists(`${IMAGE_DIR}/${file}`);
    if (isExist) {
      await Deno.remove(`${IMAGE_DIR}/${file}`);
    }
  } catch (error) {
    console.log(error);
  }
}
export async function exists(path: string) {
  try {
    await Deno.stat(path);
    return true;
  } catch (_error) {
    return false;
  }
}
