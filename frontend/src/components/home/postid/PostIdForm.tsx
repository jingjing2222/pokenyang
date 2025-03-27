import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUserPost } from "@/api/api";

export interface PostIdFormProps {
  postId: string;
}

export const PostIdForm = ({ postId }: PostIdFormProps) => {
  const navigate = useNavigate();
  const [isShare, setIsShare] = useState(false);

  // Tanstack Query를 사용하여 특정 게시물 데이터 가져오기
  const { data: post, isLoading, isError } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchUserPost(Number(postId)),
  });

  const handleCancel = () => {
    navigate({ to: '/home' });
  };

  const handleComment = () => {
    navigate({ to: `/home/${postId}/comment` });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsShare(true);
    // 3초 후 공유 메시지 숨기기
    setTimeout(() => setIsShare(false), 3000);
  };

  // 로딩 상태 처리
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <p className="text-[#919295]">게시물을 불러오는 중입니다...</p>
      </div>
    );
  }

  // 에러 상태 처리
  if (isError) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <p className="text-[#919295]">게시물을 불러오는데 실패했습니다.</p>
      </div>
    );
  }

  // 게시물이 없는 경우
  if (!post) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <p className="text-[#919295]">게시물을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col h-[300px] mt-12 border-b border-[#D9D9D9]">
      {/* 헤더 */}
      <div className="relative flex items-center justify-center border-b py-4 border-[#D9D9D9] text-xl font-medium">
        <img
          src="/images/back.svg"
          className="absolute left-0 w-7 h-7 cursor-pointer"
          alt="뒤로 가기"
          onClick={handleCancel}
        />
        <div>게시물</div>
      </div>

      {/* 작성자 내용 */}
      <div className="flex flex-start gap-2 items-center pt-2">
        <img
          src={"/images/userimage.svg"}
          className="w-9 h-9"
          alt="author_image"
        />
        <div className="flex flex-col">
          <div className="text-[#F291D0]">
            {post.user?.name || "사용자"}
          </div>
          <div className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* 컨텐츠 내용 */}
      <div className="p-4 flex flex-col flex-grow border-[#D9D9D9] border-b pb-6">
        <div className="text-2xl font-semibold pb-4">{post.title}</div>
        {post.images.map((img, index) => (
          <img
            key={`img-${img.id || index}`}
            src={img.url || `/images/default-post-${index + 1}.svg`}
            alt={`이미지 ${index + 1}`}
          />
        ))}
        <div className="pt-6">{post.content}</div>
      </div>

      {/* 좋아요, 댓글, 공유, 북마크 */}
      <div className="relative p-4 flex flex-grow border-[#D9D9D9] border-b pb-6 justify-between">
        <div className="flex gap-4 items-center">
          <img className="cursor-pointer" src="/images/heart.svg" alt="heart" />
          <img
            onClick={handleComment}
            className="cursor-pointer"
            src="/images/comment.svg"
            alt="comment"
          />
          <img
            onClick={handleShare}
            className="cursor-pointer"
            src="/images/share.svg"
            alt="share"
          />
        </div>
        <div>
          <img
            className="cursor-pointer"
            src="/images/bookmark.svg"
            alt="bookmark"
          />
        </div>
        {isShare && (
          <div className="absolute bottom-0 left-25 text-[#111111] text-sm">
            복사 완료
          </div>
        )}
      </div>

      {/* 댓글 */}
      <div className="pl-2">
        <div className="text-gray-500 text-sm py-2">
          {`댓글 ${post.comments.length}`}
        </div>
        <div className="flex flex-col gap-2">
          {post.comments.map((comment) => (
            <div key={comment.id} className="flex flex-start gap-2 items-center">
              <img
                src="/images/userimage.svg"
                className="w-9 h-9"
                alt="프로필 이미지"
              />
              <div className="flex flex-col">
                <div className="text-[#F291D0]">
                  {/* API에서 댓글 작성자 정보가 없으면 기본값 사용 */}
                  사용자
                </div>
                <div className="text-sm text-gray-500">{comment.comment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default PostIdForm;