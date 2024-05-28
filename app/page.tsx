"use client"
import {ArrowLineUp,Lightbulb,DotsThree} from '@phosphor-icons/react'
import Image from "next/image";

export default function Home() {
    let day = new Date();
    const date = {
        date: day.toDateString(),
    }
    const todos = [
        {
            title: "Home",
            description: "Home",
            done: false,
            important:true,
            bgcolor: "bg-green-200",

        },
        {
            title: "Home",
            description: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            done: false,
            important:true,
            bgcolor: "bg-gray-200",

        }
    ]
  return (
      <div className={'w-2/4 p-8 relative'}>
          {/*topnav bar*/}
        <header className={'bg-white flex justify-between items-center text-gray-600'}>
            {/*right*/}
            <div>
                <h1 className="font-bold text-xl">MY DAY</h1>
                <p className="text-gray-800 leading-tight">{date.date}</p>
            </div>
            {/*left*/}
            <div className={'flex gap-2'}>
                <button className={'flex items-center p-2 ring-1 ring-gray-500 rounded-xl justify-center'}>
                    <ArrowLineUp size={24} />
                </button>
                <button className={'flex items-center p-2 ring-1 ring-gray-500 rounded-xl justify-center'}>
                    <Lightbulb size={24} />
                </button>
                <button className={'flex items-center p-2 ring-1 ring-gray-500 rounded-xl justify-center'}>
                    <DotsThree size={24} />
                </button>
            </div>
        </header>
          <main className={'mt-12 flex flex-col gap-2'}>
              {todos.map((todo, index) => (
                  <div className={`p-4 flex items-center rounded-xl justify-between ${todo.bgcolor}`} key={index}>
                      <div>
                          <h1 className={'text-xl font-semibold'}>{todo.title}</h1>
                          <p className={'text-sm'}>{todo.description}</p>
                      </div>
                      <div className={'flex items-center justify-center rounded-full size-4 ring-1 ring-gray-500 p-1'}>
                          {
                              (todo.done && <div className={'bg-gray-600 rounded-full size-full'}></div>)
                          }
                      </div>
                  </div>
              ))}

          </main>
          <div className={'w-full p-2 absolute bottom-0 my-8'}>
              <input type="text" name="" className={'w-full bg-transparent outline-none'} placeholder={'Try typing Pay utilities bill by Friday 6pm'} id="" />
          </div>
      </div>
  );
}
