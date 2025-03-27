import type { TabContentProps } from "@/components/mypage/myactivity/MyActivityForm";
import { postMockData } from "@/mocks/mockData";
import { useNavigate } from "@tanstack/react-router";

const CommentTabContent = ({ userId }: TabContentProps) => {
  const navigate = useNavigate();

  const navigateToPost = (postId: number) => {
    navigate({ to: `/home/${postId}` });
  };

  const handleEditComment = (commentId: number) => {
    console.log('댓글 수정', commentId);
  };

  const handleDeleteComment = (commentId: number) => {
    console.log('댓글 삭제', commentId);
  };

  const hasComments = postMockData.length > 0 && postMockData.some(post => post.comment && post.comment.length > 0);

  if (!hasComments) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">작성한 댓글이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[400px]">

      <div className="flex flex-col gap-4">
        {postMockData.map(post => (
          post.comment.map(comment => (
            <div key={comment.comment_id} className="border border-[#D9D9D9] rounded-lg overflow-hidden">
              {/* 게시글 정보 영역 */}
              <div
                className="flex items-center p-4 cursor-pointer"
                onClick={() => navigateToPost(post.post_id)}
              >
                <div className="w-16 h-16 mr-3">
                  <img
                    src={post.image[0]}
                    className="w-full h-full object-cover rounded-lg"
                    alt={post.title}
                  />
                </div>
                <div>
                  <h3 className="font-bold">{post.title}</h3>
                  <p className="text-sm text-[#919295]">{post.date}</p>
                </div>
              </div>

              {/* 댓글 영역 */}
              <div className="border-t border-[#D9D9D9] p-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center mr-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="11" stroke="#E4E4E4" strokeWidth="2" />
                      <circle cx="12" cy="10" r="4" fill="#E4E4E4" />
                      <path d="M4 19.5C4 15.9101 7.58172 13 12 13C16.4183 13 20 15.9101 20 19.5" stroke="#E4E4E4" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#F291D0] font-medium">{comment.user_name}</p>
                    <p className="text-xs text-[#919295]">{comment.create_at}</p>
                  </div>
                </div>

                <p className="text-[#444444] pl-12">{comment.comment}</p>

                {/* 댓글 수정/삭제 버튼 */}
                <div className="flex justify-end gap-2 mt-3">
                  <button
                    className="text-[#F291D0] border border-[#F291D0] rounded-lg px-4 py-1 text-sm"
                    onClick={() => handleEditComment(comment.comment_id)}
                  >
                    수정
                  </button>
                  <button
                    className="text-[#F291D0] border border-[#F291D0] rounded-lg px-4 py-1 text-sm"
                    onClick={() => handleDeleteComment(comment.comment_id)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default CommentTabContent;