export interface EditFormProps {
  userId: string
}

export const EditForm = ({ userId }: EditFormProps) => {
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
            프로필 수정
          </div>
        </div>

        <div className="pt-10 flex flex-start gap-4 w-full items-center pl-5">
          <img src={`/images/myicon.svg`} className="w-20 h-20" alt="프로필 이미지" />
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

    </form>
  );
};

export default EditForm;