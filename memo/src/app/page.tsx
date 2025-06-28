"use client";

import { MemoList } from "@/components/MemoList";
import { useMemoList } from "@/hooks/useMemoList";
import { ChangeEvent, useState, FC, useCallback } from "react";

const Home: FC = () => {
  const { memos, addMemo, deleteMemo} = useMemoList();

  const [text, setText] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const onClickAdd = () => {
    addMemo(text);
    setText("");
  };

  const onClickDelete = useCallback((index: number) => {
    deleteMemo(index);
  }, [deleteMemo]);

  return (
    <>
      <h1 className="mt-4 text-4xl text-black-700 font-bold">簡単メモアプリ</h1>
      <input className="mt-8 border-solid border-2 border-blue-400" type="text" value={text} onChange={onChangeText} />

      <button className="bg-green-100 border-solid border-1 border-black-300 ml-8 text-black-500 rounded-sm" onClick={onClickAdd}>追加</button>

      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </>
  );
};

export default Home;