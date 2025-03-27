import { useEffect, useState, type FormEvent } from "react";

export const UploadComment = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentTime = new Date().toISOString();
    console.log("댓글 제출 데이터:", {
      content: content,
      userId: userId,
      createdAt: currentTime
    });

    setContent("");

    window.history.back();
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
          className="text-lg text-[#F291D0] cursor-pointer bg-transparent border-0"
        >
          등록
        </button>
      </div>
      <div className="m-4 flex flex-col flex-grow border-1 border-[#D9D9D9]">
        <textarea
          className="w-full flex-grow border-b outline-none resize-none p-2 border-[#D9D9D9]"
          placeholder="작성내용은 쏼라 어쩔"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </form>
  );
};

export default UploadComment;