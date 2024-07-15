'use client'
import React, {useState} from 'react'
import {fetch} from "undici";
import {todos} from "@/app/utils/utils";
import {X} from "@phosphor-icons/react";

const Middlesession = () => {

    const [item, setitem] = useState([])

    // function handlesetitem (data:FormData){
    //     let tit = data.get(title)
    //     let desc = data.get(desc)
    //     setitem()
    // }

    let date = new Date()
    let thisdate = date.toDateString()

    // let randomNum = Math.floor(Math.random()*30)
    // let API = `https://dummyjson.com/quotes/${randomNum}`;
    //
    // async function showQuotes(api){
    //     let call = await fetch(api)
    //     let res = await call.json()
    //     return res
    // }
    //
    // let author = showQuotes(API).author
    // let quote = showQuotes(API).quote

    return (
        <div className={'flex flex-col w-full relative h-screen p-4'}>
            <div className={'flex w-full items-center justify-between'}>
                <h1 className={'text-4xl'}>MY DAY</h1>
                <p className={'flex items-end w-1/2 flex-col'}>
                    {thisdate}
                    <span className={'tracking-tighter font-bold'}>author</span>
                    <p className={'text-right opacity-60 font-light'}>About his is my To-Do List application, featuring a robust backend powered by Firebase and a dynamic frontend built</p>
                </p>
            </div>

            <div className={'overflow-scroll'}>
                {
                    todos.map((todo, i) =>(
                        <div key={i} className={`p-4 flex flex-col gap-2 ${todo.done ? 'opacity-100' :'opacity-40'} ${todo.bgcolor}`}>
                            <h1>{todo.title}</h1>
                            <p>{todo.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className={'absolute w-full left-0 bottom-0 bg-white py-8 p-4'}>
                <form action="" className={'flex gap-4 flex-col'}>
                    <input type={'text'} name={'title'} className={'text-3xl focus:outline-none font-semibold'}
                           placeholder={'Todo title'}/>
                    <input type={'text'} name={'desc'} className={'text-xl focus:outline-none font-medium'}
                           placeholder={'Todo describe'}/>
                    <button
                        className={'p-2 px-4 size-fit bg-black opacity-60 hover:opacity-100 duration-700 text-white'}>Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Middlesession
