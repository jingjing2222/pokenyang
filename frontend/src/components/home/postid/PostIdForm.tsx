import { postMockData } from "@/mocks/mockData"
import { useNavigate, useParams } from "@tanstack/react-router"

export const PostIdForm = () => {
  const { postId } = useParams({ from: '/home/$postId' })
  const post = postMockData.find((e) => e.post_id === parseInt(postId))
  const navigate = useNavigate()

  const handleCancle = () => {
    navigate({ to: '/home' })
  }

  if (!post) {
    return <div>게시물을 찾을 수 없습니다.</div>;
  }

  return <form className="flex flex-col h-[300px] mt-12 border-b border-[#D9D9D9]">

    {/* 헤더 */}
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

    {/* 작성자 내용 */}
    <div className="flex flex-start gap-2 items-center pt-2">
      <img src={`/${post.author_image}`} className="w-9 h-9" />
      <div className="flex flex-col">
        <div className="text-[#F291D0]">
          {post.author}
        </div>
        <div className="text-sm text-gray-500">
          {post.date}
        </div>
      </div>
    </div>

    {/* 컨텐츠 내용 */}
    <div className="p-4 flex flex-col flex-grow border-[#D9D9D9] border-b pb-6">
      <div className="text-2xl font-semibold">
        {post.title}
      </div>{post.image.map((img, index) =>
        <img src={`/${img}`} alt={`img ${index + 1}`} />)}
      <div className="pt-6">{post.content}</div>
    </div>

    {/* 좋댓구알 */}
    <div className="p-4 flex flex-grow border-[#D9D9D9] border-b pb-6 justify-between">
      <div className="flex gap-2 items-center">
        <img src="/images/heart.svg" />
        <img src="/images/comment.svg" />
        <img src="/images/share.svg" />
      </div>
      <div>
        <img src="/images/bookmark.svg" />
      </div>
    </div>

    {/* 댓글 */}
    <div className="pl-2">
      <div className="text-gray-500 text-sm py-2">
        {`댓글 ${post.comment.length}`}
      </div>
      <div className="flex flex-col gap-2">
        {post.comment.map((comment, index) => (
          <div key={index} className="flex flex-start gap-2 items-center">
            <img src={`/images/exauimage.png`} className="w-9 h-9" alt="프로필 이미지" />
            <div className="flex flex-col">
              <div className="text-[#F291D0]">
                {comment.user_id}
              </div>
              <div className="text-sm text-gray-500">
                {comment.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </form>
}

export default PostIdForm