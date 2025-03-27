import { fetchUserComment } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

export interface CommentTabContentProps {
  userId: number
}

const CommentTabContent = ({ userId }: CommentTabContentProps) => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['userComment', userId],
    queryFn: () => fetchUserComment(userId),
  });

  const navigateToPost = (postId: number) => {
    navigate({ to: `/home/${postId}` });
  };

  const handleEditComment = (commentId: number) => {
    console.log('댓글 수정', commentId);
  };

  const handleDeleteComment = (commentId: number) => {
    console.log('댓글 삭제', commentId);
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">댓글을 불러오는 중입니다...</p>
      </div>
    );
  }

  if (isError) {
    console.log(error.message)
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">댓글을 불러오는데 실패했습니다.</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">작성한 댓글이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[400px]">
      <div className="flex flex-col gap-4">
        {data.map(item => (
          <div key={item.comment.id} className="border border-[#D9D9D9] rounded-lg overflow-hidden">
            {/* 게시글 정보 영역 */}
            <div
              className="flex items-center p-4 cursor-pointer"
              onClick={() => navigateToPost(item.post.id)}
            >
              <div className="w-16 h-16 mr-3">
                <img
                  src="/images/default-post.svg" // 기본 이미지 사용
                  className="w-full h-full object-cover rounded-lg"
                  alt={item.post.title}
                />
              </div>
              <div>
                <h3 className="font-bold">{item.post.title}</h3>
                <p className="text-sm text-[#919295]">{new Date(item.comment.created_at).toLocaleDateString()}</p>
              </div>
            </div>

            {/* 댓글 영역 */}
            <div className="border-t border-[#D9D9D9] p-4">
              <div className="flex items-center mb-2 gap-4">
                <img className='w-12 h-12' src='/images/userimage.svg' alt="userimage" />
                <div>
                  <p className="text-[#F291D0] font-medium">사용자</p>
                  <p className="text-xs text-[#919295]">{new Date(item.comment.created_at).toLocaleDateString()}</p>
                </div>
              </div>

              <p className="text-[#444444] pl-16">{item.comment.comment}</p>

              {/* 댓글 수정/삭제 버튼 */}
              <div className="flex justify-end gap-2 mt-3">
                <button
                  type='button'
                  className="text-[#F291D0] border border-[#F291D0] rounded-lg px-4 py-1 text-sm"
                  onClick={() => handleEditComment(item.comment.id)}
                >
                  수정
                </button>
                <button
                  type='button'
                  className="text-[#F291D0] border border-[#F291D0] rounded-lg px-4 py-1 text-sm"
                  onClick={() => handleDeleteComment(item.comment.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentTabContent;