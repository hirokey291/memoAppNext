"use client";

import { ChangeEvent, useState, FC } from "react";

const Home: FC = () => {
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const onClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  };

  const onClickDelete = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };

  return (
    <>
      <h1 className="mt-4 text-4xl text-black-700 font-bold">簡単メモアプリ</h1>
      <input className="mt-8 border-solid border-2 border-blue-400" type="text" value={text} onChange={onChangeText} />

      <button className="bg-green-100 border-solid border-1 border-black-300 ml-8 text-black-500 rounded-sm" onClick={onClickAdd}>追加</button>

      <div className="border-solid border-1 border-gray-300 p-16 m-8">
        <p className="text-left mb-4 text-lg text-black-500">メモ一覧</p>
        <ul className="list-disc">
          {memos.map((memo, index) => (
            <li key={memo}>
              <div className="flex items-center">
                <p className="text-lg text-red-500">{memo}</p>
                <button className="bg-pink-100 border-solid border-1 border-black-300 ml-8 text-black-500 rounded-sm" onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;