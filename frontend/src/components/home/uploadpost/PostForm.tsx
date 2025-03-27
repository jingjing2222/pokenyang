import ImageUpload from "@/components/home/uploadpost/ImageUpload";
import { useNavigate } from "@tanstack/react-router"

export const PostForm = () => {
  const navigate = useNavigate()

  const handleCancle = () => {
    navigate({ to: '/home' });
  }

  return <form className="flex flex-col h-[300px] mt-12 border-b border-[#D9D9D9]">
    <div className="flex justify-between border-b p-4 border-[#D9D9D9] items-center">
      <div className="text-lg" onClick={handleCancle}>
        취소
      </div>
      <div className="text-xl font-medium">
        게시물 작성
      </div>
      <div className="text-lg text-[#F291D0]">
        등록
      </div>
    </div>
    <div className="m-4 flex flex-col flex-grow border-1 border-[#D9D9D9]">
      <textarea
        className="w-full flex-grow border-b outline-none resize-none p-2 border-[#D9D9D9]"
        placeholder="작성내용은 쏼라 어쩔"
      />
      <div className="flex justify-start gap-2 p-2 mt-2">
        <ImageUpload />
      </div>
    </div>
  </form>
}

export default PostForm