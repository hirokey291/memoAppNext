"use client";

import { FC } from "react";

type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;

  return (
    <div className="border-solid border-1 border-gray-300 p-16 m-8">
      <p className="text-left mb-4 text-lg text-black-500">メモ一覧</p>
      <ul className="list-disc">
        {memos.map((memo, index) => (
          <li key={memo}>
            <div className="flex items-center">
              <p className="text-lg text-red-500">{memo}</p>
              <button
                className="bg-pink-100 border-solid border-1 border-black-300 ml-8 text-black-500 rounded-sm"
                onClick={() => onClickDelete(index)}
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
