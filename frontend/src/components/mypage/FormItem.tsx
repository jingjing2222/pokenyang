import React from 'react';

interface FormItemProps {
  icon: string;
  text: string;
  onClick: () => void;
}

export const FormItem: React.FC<FormItemProps> = ({ icon, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-14 border-1 border-[#D9D9D9] flex items-center gap-3 pl-4 rounded-lg cursor-pointer"
    >
      <img src={`/images/${icon}.svg`} className="w-[30px] h-[30px]" alt={text} />
      <span className="text-[#919295] font-semibold">
        {text}
      </span>
    </div>
  );
};

export default FormItem;