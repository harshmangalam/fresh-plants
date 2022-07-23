const IMAGE_DIR = "static/images";

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

async function exists(path: string) {
  try {
    await Deno.stat(path);
    return true;
  } catch (_error) {
    return false;
  }
}
