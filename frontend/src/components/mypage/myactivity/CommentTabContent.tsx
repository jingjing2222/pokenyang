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
                <div className="flex items-center mb-2 gap-4">
                  <img className='w-12 h-12' src='/images/userimage.svg' alt="userimage" />
                  <div>
                    <p className="text-[#F291D0] font-medium">{comment.user_name}</p>
                    <p className="text-xs text-[#919295]">{comment.create_at}</p>
                  </div>
                </div>

                <p className="text-[#444444] pl-16">{comment.comment}</p>

                {/* 댓글 수정/삭제 버튼 */}
                <div className="flex justify-end gap-2 mt-3">
                  <button
                    type='button'
                    className="text-[#F291D0] border border-[#F291D0] rounded-lg px-4 py-1 text-sm"
                    onClick={() => handleEditComment(comment.comment_id)}
                  >
                    수정
                  </button>
                  <button
                    type='button'
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