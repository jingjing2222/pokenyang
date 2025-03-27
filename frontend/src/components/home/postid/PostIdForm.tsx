import { postMockData } from "@/mocks/mockData"
import { useNavigate, useParams } from "@tanstack/react-router"

export const PostIdForm = () => {
  const { postId } = useParams({ from: '/home/$postId' })
  const post = postMockData.find((e) => e.postId === parseInt(postId))
  const navigate = useNavigate()

  const handleCancle = () => {
    navigate({ to: '/home' })
  }

  if (!post) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return <form className="flex flex-col h-[300px] mt-12 border-b border-[#D9D9D9]">
    <div className="relative flex items-center justify-center border-b py-4 border-[#D9D9D9] text-xl font-medium">
      <img
        src='/images/back.svg'
        className="absolute left-0 w-7 h-7 cursor-pointer"
        alt="뒤로 가기"
        onClick={handleCancle}
      />
      <div>
        게시물
      </div>
    </div>
    <div className="flex flex-start gap-2 items-center">
      <img src={`/${post.author_image}`} className="w-9 h-9" />
      <div className="flex flex-col">
        <div>
          {post.author}
        </div>
        <div>
          {post.date}
        </div>
      </div>
    </div>
    <div className="m-4 flex flex-col flex-grow border-[#D9D9D9]">
      <div className="text-2xl font-semibold">
        {post.title}
      </div>{post.image.map((img, index) =>
        <img src={`/${img}`} alt={`img ${index + 1}`} />)}
    </div>
  </form>
}

export default PostIdForm