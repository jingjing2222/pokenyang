import CommentTabContent from "@/components/mypage/myactivity/CommentTabContent";
import LikeTabContent from "@/components/mypage/myactivity/LikeTabContent";
import PostTabContent from "@/components/mypage/myactivity/PostTabContent";
import { useState } from "react";

export interface MyActivityFormProps {
  userId: string
}

export interface TabContentProps {
  userId: string;
}

export const MyActivityForm = ({ userId }: MyActivityFormProps) => {
  const [currentTab, setCurrentTab] = useState<'post' | 'like' | 'comment'>('post');

  const handleCancel = () => {
    window.history.back();
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'post':
        return <PostTabContent userId={userId} />;
      case 'like':
        return <LikeTabContent userId={userId} />;
      case 'comment':
        return <CommentTabContent userId={userId} />;
      default:
        return null;
    }
  };

  return (
    <form className="flex flex-col mt-12 border-[#D9D9D9]">
      {/* 헤더 */}
      <div className="relative flex flex-col items-center justify-center py-4 text-xl font-medium">
        <div>
          <img
            src="/images/back.svg"
            className="absolute left-0 w-7 h-7 cursor-pointer"
            alt="뒤로 가기"
            onClick={handleCancel}
          />
          <div className="text-[#444444] text-lg font-semibold">
            나의 활동
          </div>
        </div>
      </div>

      {/* 탭 */}
      <div className="flex justify-evenly border-b border-[#D9D9D9] mt-4">
        <div
          className={`py-3 px-6 cursor-pointer text-center w-1/3 ${currentTab === 'post'
            ? 'text-[#F291D0] font-bold border-b-2 border-[#F291D0]'
            : 'text-[#919295]'
            }`}
          onClick={() => setCurrentTab('post')}
        >
          게시물
        </div>
        <div
          className={`py-3 px-6 cursor-pointer text-center w-1/3 ${currentTab === 'like'
            ? 'text-[#F291D0] font-bold border-b-2 border-[#F291D0]'
            : 'text-[#919295]'
            }`}
          onClick={() => setCurrentTab('like')}
        >
          좋아요
        </div>
        <div
          className={`py-3 px-6 cursor-pointer text-center w-1/3 ${currentTab === 'comment'
            ? 'text-[#F291D0] font-bold border-b-2 border-[#F291D0]'
            : 'text-[#919295]'
            }`}
          onClick={() => setCurrentTab('comment')}
        >
          댓글
        </div>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="mt-4 px-4">
        {renderTabContent()}
      </div>
    </form>
  );
};

export default MyActivityForm;