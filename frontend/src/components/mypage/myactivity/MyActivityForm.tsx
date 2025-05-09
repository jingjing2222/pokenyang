import CommentTabContent from "@/components/mypage/myactivity/CommentTabContent";
import PostTabContent from "@/components/mypage/myactivity/PostTabContent";
import { useState } from "react";

export interface MyActivityFormProps {
  userId: number
}

export interface TabContentProps {
  userId: number;
}

export const MyActivityForm = ({ userId }: MyActivityFormProps) => {
  const [currentTab, setCurrentTab] = useState<'post' | 'comment'>('post');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');


  const handleCancel = () => {
    window.history.back();
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 'post':
        return <PostTabContent userId={userId} />;
      case 'comment':
        return <CommentTabContent userId={userId}/>;
      default:
        return null;
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
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
          className={`py-3 px-6 cursor-pointer text-center w-1/3 ${currentTab === 'comment'
            ? 'text-[#F291D0] font-bold border-b-2 border-[#F291D0]'
            : 'text-[#919295]'
            }`}
          onClick={() => setCurrentTab('comment')}
        >
          댓글
        </div>
      </div>

      {/* 정렬 */}
      <div className="w-[380px] mx-auto mt-4 flex justify-start">
        <div
          className="flex items-center gap-1 text-[#919295] cursor-pointer"
          onClick={toggleSortOrder}
        >
          <span className="text-sm font-medium">등록순</span>
          <img
            src="/images/sort_desc.svg"
            className={`w-4 h-4 ${sortOrder === 'asc' ? 'rotate-180' : ''}`}
            alt={sortOrder === 'asc' ? '오름차순' : '내림차순'}
            style={{ transition: 'transform 0.2s ease' }}
          />
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