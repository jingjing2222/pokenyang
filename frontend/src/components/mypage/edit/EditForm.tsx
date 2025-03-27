import { useForm } from "react-hook-form";

export interface EditFormProps {
  userId: string
}

export const EditForm = ({ userId }: EditFormProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      nickname: ""
    }
  });

  const handleCancel = () => {
    window.history.back();
  };

  const handleEdit = () => {
    console.log(`${userId} 수정`)
  }

  const handleDelete = () => {
    console.log(`${userId} 삭제`)
  }

  const handleCheck = () => {
    const nickname = watch("nickname");
    console.log(`중복 체크: ${nickname}`);
  }

  const onSubmit = (data: any) => {
    console.log("제출된 데이터:", data);
  }

  return (
    <form className="flex flex-col mt-12 border-[#D9D9D9]" onSubmit={handleSubmit(onSubmit)}>
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

      {/* 컨텐츠 */}
      <main className="mt-10 border-1 border-[#D9D9D9] flex flex-col p-4 rounded-md gap-8">
        <div className="text-xl font-semibold mt-4">
          프로필 수정
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="nickname" className="text-[#919295] font-semibold text-lg">닉네임 변경</label>
          <div className="relative h-14">
            <input
              {...register("nickname", {
                required: "닉네임을 입력해주세요",
                maxLength: {
                  value: 20,
                  message: "최대 20자까지 입력 가능합니다"
                }
              })}
              className="w-full h-full border-1 border-[#D9D9D9] p-2 pr-20 rounded-lg"
              placeholder="공백 포함 한글 10자, 영문 20자 이내"
            />
            <button
              type="button"
              onClick={handleCheck}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 text-sm border-1 border-[#D9D9D9] px-2 bg-white rounded-md text-[#F291D0]"
            >
              중복확인
            </button>
          </div>
          {errors.nickname && (
            <p className="text-red-500 text-xs">{errors.nickname.message as string}</p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="profile" className="text-[#919295] font-semibold text-lg" >프로필 사진 변경</label>
          <div className="flex items-end gap-4">
            <img src="/images/userimage.svg" className="w-32 h-32" alt="사용자 이미지" />
            <div className="flex gap-2 items-end">
              <button
                onClick={handleEdit}
                type="button" className="px-4 py-2 border-1 border-[#F291D0] text-[#F291D0] rounded-md text-sm font-medium hover:bg-[#FDF2F8]">
                변경
              </button>
              <button
                onClick={handleDelete}
                type="button" className="px-4 py-2 border-1 border-[#D9D9D9] text-[#919295] rounded-md text-sm font-medium hover:bg-gray-50">
                삭제
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-end">
        <button type="submit" className="w-[50px] h-[32px] border-1 border-[#D9D9D9] rounded-md mt-4 bg-[#F291D0] text-white text-sm">
          저장
        </button>
      </div>
    </form>
  );
};

export default EditForm;