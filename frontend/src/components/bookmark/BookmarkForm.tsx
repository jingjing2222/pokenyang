import BookmarkContent from "@/components/bookmark/BookmarkContent";
import { useState } from "react";

export interface BookmarkFromProps {
  userId: string
}

export const BookmarkForm = ({ userId }: BookmarkFromProps) => {

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const toggleSortOrder = () => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <form className="flex flex-col mt-12 border-[#D9D9D9]">
      {/* 헤더 */}
      <div className="relative flex flex-col items-center justify-center border-b py-4 border-[#D9D9D9] text-xl font-medium">
        <div>
          <img
            src="/images/back.svg"
            className="absolute left-0 w-7 h-7 cursor-pointer"
            alt="뒤로 가기"
            onClick={handleCancel}
          />
          <div className="text-[#444444] text-lg font-semibold">
            북마크
          </div>
        </div>

        <div className="pt-10 flex flex-start gap-4 w-full items-center pl-5">
          <img src='/images/userimage.svg' className="w-20 h-20" alt="프로필 이미지" />
          <div className="flex flex-col gap-2 font-extrabold text-lg">
            <div className="text-[#F291D0]">
              {'김아삭'}
            </div>
            <div className="text-lg text-[#919295] font-medium">
              {userId}
            </div>
          </div>
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

      {/* 콘텐츠 */}
      <main className="mt-6 p-4">
        <BookmarkContent userId={userId} />
      </main>
    </form>
  );
};

export default BookmarkForm;

