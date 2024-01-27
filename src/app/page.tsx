'use client';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import MainBg from '../assets/MainBg.jpg';
export default function Home() {
  const [list, setList] = useState<string>('');
  const [todoList, setTodoList] = useState<
    { id: string; value: string; done: boolean }[]
  >([]);
  const addToDo = () => {
    setTodoList([{ id: uuid(), value: list, done: false }, ...todoList]);
    setList('');
  };
  const markToDone = (id: string) => {
    setTodoList(
      todoList.map((list) =>
        list.id === id ? { ...list, done: !list.done } : list
      )
    );
  };
  return (
    <div className=''>
      <div className='relative w-full pt-48'>
        <div className='w-full top-0 absolute -z-10'>
          <Image
            src={MainBg}
            alt='bg-Image'
            className='bg-cover bg-no-repeat h-screen'
          />
        </div>
      </div>
      <div className='h-lvh w-lvw flex align-middle justify-center '>
        <div className='h-3/6 w-3/4 flex content-center justify-center'>
          <main>
            <input
              onChange={(e) => setList(e.target.value)}
              value={list}
              type='text'
              placeholder='Enter your plan'
              className='p-2 text-blue-600 placeholder-white border-2 m-6 border-neutral-200 border-solid bg-transparent'
            />
            <button
              onClick={addToDo}
              className='text-slate-300 px-6 py-2 rounded border-neutral-200 border-solid border-2'
            >
              Add
            </button>
            <ul>
              {todoList.map((list) => (
                <li
                  onClick={() => markToDone(list.id)}
                  className={`cursor-pointer text-white ${
                    list.done ? 'line-through' : 'no-underline'
                  }`}
                >
                  {list.value}
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </div>
  );
}
