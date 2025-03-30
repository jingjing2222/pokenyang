import type { TabContentProps } from "@/components/mypage/myactivity/MyActivityForm";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchUserMatchPost } from "@/api/api";

export interface PostImage {
  id: number;
  url: string;
}

export interface FetchUserMatchPostResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  images: PostImage[];
}

const PostTabContent = ({ userId }: TabContentProps) => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['userPosts', userId],
    queryFn: () => fetchUserMatchPost(userId),
  });
  console.table(data)

  const navigateToPost = (postId: number) => {
    navigate({ to: `/home/${postId}` });
  };

  const handleEditPost = (postId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('수정', postId);
  };

  const handleDeletePost = (postId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('삭제', postId);
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">게시물을 불러오는 중입니다...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">게시물을 불러오는데 실패했습니다.</p>
      </div>
    );
  }

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
                  src={post.images && post.images.length > 0 ? post.images[0].url : '/images/default-post.svg'}
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