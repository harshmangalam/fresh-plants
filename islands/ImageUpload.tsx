/**@jsx h */

import { h } from "preact";
import { tw } from "twind";
import { useRef, useState } from "preact/hooks";
import DeleteIcon from "@icons/DeleteIcon.tsx";
interface Props {
  name: string;
  className?: string;
}

export default function ImageUpload({ name, className }: Props) {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState<unknown>();

  const handleImageChange = (event: Event) => {
    const files = (event.target as HTMLInputElement).files as FileList;
    const image = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(image);
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    if (imageRef.current?.value) {
      imageRef.current.value = "";
    }
  };
  return (
    <div>
      <input
        ref={imageRef}
        accept="image/*"
        type="file"
        name={name}
        id={name}
        hidden
        onChange={handleImageChange}
      />
      {imageUrl ? (
        <div className={tw`relative`}>
          <img
            src={imageUrl as string}
            alt="Plant image"
            className={tw`w-full h-60 object-contain rounded-lg`}
          />

          <div className={tw`absolute top-2 right-2`}>
            <button
              type="button"
              onClick={handleRemoveImage}
              className={tw`bg-red-500 text-white p-2 rounded-full text-lg`}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className={tw`grid place-items-center w-full h-32 border-2 border-gray-400 border-dashed ${className}`}
          onClick={() => imageRef.current?.click()}
        >
          <p className={tw`text-xl text-gray-400 font-medium`}>
            Select image from device
          </p>
        </button>
      )}
    </div>
  );
}
