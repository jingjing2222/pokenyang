import type { TabContentProps } from "@/components/mypage/myactivity/MyActivityForm";
import { useNavigate } from "@tanstack/react-router";
import { postMockData } from "@/mocks/mockData";


const LikeTabContent = ({ userId }: TabContentProps) => {
  const navigate = useNavigate();

  const navigateToPost = (postId: number) => {
    navigate({ to: `/home/${postId}` });
  };


  return (
    <div className="min-h-[400px]">

      {/* 그리드 레이아웃 */}
      <div className="grid grid-cols-3 gap-2">
        {postMockData.map(post => (
          <div
            key={post.post_id}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer relative"
            onClick={() => navigateToPost(post.post_id)}
          >
            {/* 썸네일 이미지 */}
            <img
              src={post.image[0]}
              className="w-full h-full object-cover"
              alt={post.title}
            />

            {/* 여러 이미지가 있는 경우 표시 */}
            {post.image.length > 1 && (
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                +{post.image.length - 1}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikeTabContent;