import type { TabContentProps } from "@/components/mypage/myactivity/MyActivityForm";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchUserPosts } from "@/api/api";

const PostTabContent = ({ userId }: TabContentProps) => {
  const navigate = useNavigate();

  // API를 사용하여 사용자 게시물 데이터 가져오기
  const { data, isLoading, isError } = useQuery({
    queryKey: ['userPosts', userId],
    queryFn: fetchUserPosts,
  });

  // 게시물 상세 페이지로 이동
  const navigateToPost = (postId: number) => {
    navigate({ to: `/home/${postId}` });
  };

  // 게시물 수정 핸들러
  const handleEditPost = (postId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('수정', postId);
  };

  // 게시물 삭제 핸들러
  const handleDeletePost = (postId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('삭제', postId);
  };

  // 로딩 상태 처리
  if (isLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">게시물을 불러오는 중입니다...</p>
      </div>
    );
  }

  // 에러 상태 처리
  if (isError) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">게시물을 불러오는데 실패했습니다.</p>
      </div>
    );
  }

  // 게시물이 없는 경우
  if (!data || data.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">작성한 게시물이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[400px]">
      <div className="flex flex-col gap-4">
        {data.map(post => (
          <div
            onClick={() => navigateToPost(post.id)}
            key={post.id}
            className="border border-[#D9D9D9] rounded-lg overflow-hidden shadow-sm cursor-pointer"
          >
            <div className="flex">
              {/* 이미지 영역 */}
              <div className="w-1/3">
                <img
                  src={post.images.length > 0 ? post.images[0].url : '/images/default-post.svg'}
                  className="w-full h-full object-cover py-4 pl-4"
                  alt={post.title}
                />
              </div>

              {/* 콘텐츠 영역 */}
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[#919295] text-sm mb-1">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                  <p className="text-[#444444]">{post.content}</p>
                </div>

                {/* 버튼 영역 */}
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type='button'
                    className="text-[#F291D0] border border-[#D9D9D9] rounded-lg px-4 py-1 text-sm"
                    onClick={(e) => handleEditPost(post.id, e)}
                  >
                    수정
                  </button>
                  <button
                    type='button'
                    className="text-[#F291D0] border border-[#D9D9D9] rounded-lg px-4 py-1 text-sm cursor-pointer"
                    onClick={(e) => handleDeletePost(post.id, e)}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostTabContent;