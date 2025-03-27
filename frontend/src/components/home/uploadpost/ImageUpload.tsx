import { useState, type ChangeEvent } from "react";

interface ImageUploadProps {
  onImageUpload: (file: File | null, preview: string | null) => void;
}

export const ImageUpload = ({ onImageUpload }: ImageUploadProps) => {
  const [uploadImgUrl, setUploadImgUrl] = useState<string | null>(null);

  const onchangeImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setUploadImgUrl(null);
      onImageUpload(null, null);
      return;
    }

    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setUploadImgUrl(reader.result);
        onImageUpload(uploadFile, reader.result);
      }
    }
  }

  return (
    <div className="flex flex-col items-center">
      {uploadImgUrl && (
        <img src={uploadImgUrl} alt="업로드된 이미지" className="mb-2 max-w-full h-auto max-h-32" />
      )}
      <label className="cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onchangeImageUpload}
        />
        <img
          src="/images/photobooth.svg"
          alt="이미지 업로드"
          className="w-6 h-6"
        />
      </label>
    </div>
  );
}

export default ImageUpload;