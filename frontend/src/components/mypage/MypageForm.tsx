import type { UserData } from "@/components/home/postid/comment/UploadComment";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import FormItem from "@/components/mypage/FormItem";

export const MypageForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate({ to: '/' });
  };

  const handleCancel = () => {
    window.history.back();
  };

  const handleDeleteUser = () => {
    console.log('delete');
    navigate({ to: '/' });
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
            마이페이지
          </div>
        </div>

        <div className="pt-10 flex flex-start gap-4 w-full items-center pl-5">
          <img src='/images/userimage.svg' className="w-20 h-20" alt="프로필 이미지" />
          <div className="flex flex-col gap-2 font-extrabold text-lg">
            <div className="text-[#F291D0]">
              {'김아삭'}
            </div>
            <div className="text-lg text-[#919295] font-medium">
              {userData?.email}
            </div>
          </div>
        </div>
      </div>


      {/* 컨텐츠 */}
      <main className="w-[380px] mx-auto mt-6 flex flex-col gap-8">
        <FormItem
          icon="myactivity"
          text="나의 활동"
          onClick={() => navigate({ to: `/mypage/${userData?.userId}/activity` })}
        />
        <FormItem
          icon="editprofile"
          text="프로필 수정"
          onClick={() => navigate({ to: `/mypage/${userData?.userId}/edit` })}
        />
        <FormItem
          icon="logout"
          text="로그아웃"
          onClick={handleLogout}
        />
        <FormItem
          icon="deleteuser"
          text="회원 탈퇴"
          onClick={handleDeleteUser}
        />

        <div className="flex w-full h-28 border-1 border-[#D9D9D9] rounded-lg items-center">
          <img src='/images/asac_logo.svg' style={{ width: '75px', height: '75px', marginLeft: '16px', marginRight: '16px' }} alt='asac' />
          <div className="flex flex-col">
            <span className="text-[#919295] font-semibold">
              Developed By
            </span>
            <div className="text-[#919295] font-medium text-sm">
              [SK플래닛] ASAC 웹 풀스택 과정
              7기 김형정, 원승혁, 이성아, 홍정욱
            </div>
          </div>
        </div>
      </main>
    </form>
  );
};

export default MypageForm;