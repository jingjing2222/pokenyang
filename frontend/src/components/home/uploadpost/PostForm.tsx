import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import ImageUpload from "@/components/home/uploadpost/ImageUpload";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import type { UserData } from "@/components/home/postid/comment/UploadComment";
import { PostUserPost } from "@/api/api";

interface PostFormData {
  title: string;
  content: string;
}

export const PostForm = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { location, error } = useGeoLocation();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<PostFormData>({
    defaultValues: {
      title: "",
      content: ""
    }
  });

  const handleCancel = () => {
    navigate({ to: '..' });
  };

  const onSubmit = async (data: PostFormData) => {
    if (!userData?.userId) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (error) {
      alert("위치 정보를 가져오는데 실패했습니다. 다시 시도해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await PostUserPost({
        title: data.title,
        content: data.content,
        lat: location.lat,
        lng: location.lng
      });

      console.log("게시물 등록 완료:", result);

      if (imageFile) {
        console.log("이미지 업로드 처리:", imageFile);
      }

      navigate({ to: '/home' });
    } catch (error) {
      console.error("게시물 등록 중 오류 발생:", error);
      alert("게시물 등록에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (file: File | null, preview: string | null) => {
    setImageFile(file);
    setImagePreview(preview);
  };

  return (
    <form
      className="flex flex-col h-[400px] mt-12 border-b border-[#D9D9D9]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between border-b p-4 border-[#D9D9D9] items-center">
        <div className="text-lg cursor-pointer" onClick={handleCancel}>
          취소
        </div>
        <div className="text-xl font-medium">
          게시물 작성
        </div>
        <button
          type="submit"
          className={`text-lg text-[#F291D0] cursor-pointer bg-transparent border-0 ${isSubmitting ? 'opacity-50' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? '등록 중...' : '등록'}
        </button>
      </div>

      <input
        {...register("title", { required: "제목을 입력해주세요" })}
        className="border-1 outline-none p-2 border-[#D9D9D9] m-4 rounded-md"
        placeholder="제목을 입력해주세요"
        disabled={isSubmitting}
      />
      {errors.title && (
        <span className="text-red-500 px-4 -mt-2 text-sm">{errors.title.message}</span>
      )}

      <div className="m-4 flex flex-col flex-grow border-1 border-[#D9D9D9] rounded-md">
        <textarea
          {...register("content", { required: "내용을 입력해주세요" })}
          className="w-full flex-grow border-b outline-none resize-none p-2 border-[#D9D9D9]"
          placeholder="내용을 입력해주세요"
          disabled={isSubmitting}
        />
        {errors.content && (
          <span className="text-red-500 px-2 text-sm">{errors.content.message}</span>
        )}

        <div className="flex justify-start gap-2 p-2 mt-2">
          <ImageUpload onImageUpload={handleImageUpload} />
          {imagePreview && (
            <div className="text-sm text-gray-500">이미지가 업로드되었습니다</div>
          )}
          {error ? (
            <div className="text-sm text-red-500">위치 정보 오류: {error}</div>
          ) : (
            <div className="text-sm text-gray-500">
              위치 정보가 포함됩니다
              <span className="text-xs ml-1">
                ({location.lat.toFixed(4)}, {location.lng.toFixed(4)})
              </span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default PostForm;