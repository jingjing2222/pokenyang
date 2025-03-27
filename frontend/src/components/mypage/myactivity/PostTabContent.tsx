import type { TabContentProps } from "@/components/mypage/myactivity/MyActivityForm";
import { postMockData, type PostMockData } from "@/mocks/mockData";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const PostTabContent = ({ userId }: TabContentProps) => {
  const [userPosts, setUserPosts] = useState<PostMockData[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const filteredPosts = postMockData.filter(post => post.author === userId);
    setUserPosts(filteredPosts);
  }, [userId]);

  if (userPosts.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <p className="text-[#919295]">작성한 게시물이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[400px]">
      <div className="flex flex-col gap-4">
        {userPosts.map(post => (
          <div
            onClick={() => { navigate({ to: `/home/${post.post_id}` }) }}
            key={post.post_id} className="border border-[#D9D9D9] rounded-lg overflow-hidden shadow-sm cursor-pointer">
            <div className="flex">
              {/* 이미지 영역 */}
              <div className="w-1/3">
                <img
                  src={post.image[0]}
                  className="w-full h-full object-cover py-4 pl-4"
                  alt={post.title}
                />
              </div>

              {/* 콘텐츠 영역 */}
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[#919295] text-sm mb-1">{post.date}</p>
                  <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                  <p className="text-[#444444]">{post.content}</p>
                </div>

                {/* 버튼 영역 */}
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type='button'
                    className="text-[#F291D0] border border-[#D9D9D9] rounded-lg px-4 py-1 text-sm "
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log('수정', post.post_id)
                    }}
                  >
                    수정
                  </button>
                  <button
                    type='button'
                    className="text-[#F291D0] border border-[#D9D9D9] rounded-lg px-4 py-1 text-sm cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log('삭제', post.post_id)
                    }}
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