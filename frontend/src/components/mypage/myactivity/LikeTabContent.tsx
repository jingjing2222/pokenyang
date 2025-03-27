import type { TabContentProps } from "@/components/mypage/myactivity/MyActivityForm"

const LikeTabContent = ({ userId }: TabContentProps) => {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center">
      <p className="text-[#919295]">좋아요한 게시물 목록이 표시됩니다.</p>
      {/* 실제 좋아요한 게시물 데이터를 이곳에 매핑 */}
    </div>
  );
};
export default LikeTabContent