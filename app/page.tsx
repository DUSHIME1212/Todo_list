"use client"
import {ArrowLineUp,Lightbulb,DotsThree} from '@phosphor-icons/react'
import Image from "next/image";
import React,{useState, useEffect} from 'react';

export default function Home() {
    let day = new Date();
    const date = {
        date: day.toDateString(),
    }
 
    // we will activate localStorage on final stages

    // const [todos, setTodos] = React.useState<any[]>([]);
     
    //  React.useEffect(() => {
    //     fetchingTodos();
    //  }, []);

    //  const fetchingTodos = async () => {
    //  const inStorage = await todosFromLocal();
    //  setTodos(inStorage as any[]);
    //  } 
    //  const todosFromLocal = ()=> {
    //     return new Promise((resolve) => {
    //         const inStorage = localStorage.getItem('todos');
    //         if(inStorage){
    //             resolve(JSON.parse(inStorage));
    //         }
    //         else 
    //         {
    //             resolve([]);
    //         }
    //     });
    //  };
    //   const saveTodos = (todos: { title: string; description: string} []) => {
    //     localStorage.setItem("todos", JSON.stringify(todos))
    //   }  
        
    
    //  const addTodo = (title:string, description: string) => {
    //     const newTodo = {
    //         title,
    //         description,
    //         done: false,
    //         important: true,
    //         bgcolor: "bg-blue-200",
    //     };

    //     const updatedTodos = [...todos, newTodo];
    //     setTodos(updatedTodos);

    //     saveTodos(updatedTodos);
    // };

    


     const todos = [
        {
            title: "Buy Groceries",
            description: "Buy milk, bread, eggs, and cheese from the supermarket.",
            done: false,
            important: true,
            bgcolor: "bg-green-200",
        },
        {
            title: "Meeting with John",
            description: "Discuss the project details and timelines with John.",
            done: false,
            important: true,
            bgcolor: "bg-gray-200",
        },
        {
            title: "Workout",
            description: "Go for a 30-minute run in the park.",
            done: false,
            important: true,
            bgcolor: "bg-yellow-200",
        },
        {
            title: "Read a Book",
            description: "Finish reading 'The Great Gatsby' by F. Scott Fitzgerald.",
            done: true,
            important: true,
            bgcolor: "bg-red-200 opacity-20",
        },
        {
            title: "Write Blog Post",
            description: "Write a new blog post on 'The Benefits of Yoga'.",
            done: false,
            important: true,
            bgcolor: "bg-blue-200",
        },
        {
            title: "Pay Bills",
            description: "Pay electricity and internet bills before the due date.",
            done: false,
            important: true,
            bgcolor: "bg-purple-200",
        },
        {
            title: "Pay Bills",
            description: "Pay the electricity and water bills before the due date.",
            done: false,
            important: true,
            bgcolor: "bg-green-200",
        },
        {
            title: "Call Mom",
            description: "Check in with mom and see how she's doing.",
            done: false,
            important: true,
            bgcolor: "bg-yellow-200",
        },

   ]
  return (
      <div className={'w-full md:w-2/4 p-8 relative'}>
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
          <main className={'mt-12 flex h-[calc(100vh-180px)] scrollbar-hide scroll-smooth overflow-y-auto flex-col gap-2'}>
              {todos.map((todo, index) => (
                  <div className={`p-4 gap-2 flex scroll-smooth items-center rounded-xl justify-between ${todo.bgcolor}`} key={index}>
                      <div className={'gap-2 flex flex-col'}>
                          <h1 className={'text-2xl font-semibold'}>{todo.title}</h1>
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
          <div className={'w-full max-w-[92%] bg-[#ffffff9f] backdrop-blur-md p-2 flex flex-col gap-2 absolute bottom-0 my-8'}>
              <input type="text" name="" className={'w-full font-semibold border-b-2 text-2xl p-2 bg-transparent outline-none'}
                     placeholder={'Title'} id=""/>
              <input type="text" name="" className={'w-full p-2 border-b-2 bg-transparent outline-none'}
                     placeholder={'Try typing Pay utilities bill by Friday 6pm'} id=""/>
          </div>
      </div>
  );
}
