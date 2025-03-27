import { CreateComment, type CreateCommentProps } from "@/api/api";
import { useEffect, useState, type FormEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface UserData {
  userId: string;
  email: string;
  isLoggedIn: boolean;
  loginTime: string;
}

export interface UploadCommentProps {
  postId: string
}

export const UploadComment = ({ postId }: UploadCommentProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [content, setContent] = useState<string>("");
  const queryClient = useQueryClient();

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  const commentMutation = useMutation({
    mutationFn: (commentData: CreateCommentProps) => CreateComment(commentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post', postId] });

      setContent("");

      setTimeout(() => {
        window.history.back();
      }, 100);
    },
    onError: (error) => {
      console.error("댓글 등록 실패:", error);
      alert("댓글 등록에 실패했습니다. 다시 시도해주세요.");
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userData?.userId) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!content.trim()) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      const commentData: CreateCommentProps = {
        comment: content,
        userId: Number(userData.userId),
        postId: Number(postId)
      };

      console.log("댓글 데이터 전송 중:", commentData);

      commentMutation.mutate(commentData);
    } catch (error) {
      console.error("댓글 제출 중 오류 발생:", error);
    }
  };

  return (
    <form
      className="flex flex-col h-[300px] mt-12 border-b border-[#D9D9D9]"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between border-b p-4 border-[#D9D9D9] items-center">
        <div
          className="text-lg cursor-pointer"
          onClick={() => { window.history.back() }}
        >
          취소
        </div>
        <div className="text-xl font-medium">
          댓글 작성
        </div>
        <button
          type="submit"
          className={`text-lg text-[#F291D0] cursor-pointer bg-transparent border-0 ${commentMutation.isPending ? 'opacity-50' : ''}`}
          disabled={commentMutation.isPending}
        >
          {commentMutation.isPending ? '등록 중...' : '등록'}
        </button>
      </div>
      <div className="m-4 flex flex-col flex-grow border-1 border-[#D9D9D9]">
        <textarea
          className="w-full flex-grow border-b outline-none resize-none p-2 border-[#D9D9D9]"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={commentMutation.isPending}
        />
      </div>
    </form>
  );
};

export default UploadComment;