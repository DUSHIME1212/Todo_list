"use client"
import React, {useState} from 'react'

import {Star,Sun,Alarm,CalendarBlank,Repeat,X} from '@phosphor-icons/react'
import {suugestion} from "@/app/utils/utils";

const Suugestion = () => {
    const [fav, setfav] = useState(false)
    const [remind, setremind] = useState(false)

    function handlefav(){
        setfav((prevState) => !prevState)
    }function handleremind(){
        setremind((prevState) => !prevState)
    }

    return (
        <main className={'w-full flex flex-col justify-between relative p-4'}>
            {suugestion.map((item,index) => (
                <div key={index}>
                    <div className={'flex h-20 justify-between items-center'}>
                        <h1>{item.title}</h1>
                        <Star onClick={handlefav} className={'cursor-pointer'} weight={fav?'fill':'light'} size={24} />
                    </div>
                    <button className={'flex w-full gap-4 p-4 ring-1 rounded-xl ring-gray-500'}>
                        <Sun size={24} weight="light" />
                        <h1>Add to my day</h1>
                    </button>
                    <div className={'p-2 rounded-2xl'}>
                        <button onClick={handleremind} className={`flex w-full ring-2 rounded-xl gap-4 p-4 ${remind?'ring-blue-500 text-white bg-blue-500 bg-opacity-60':'ring-gray-500'}`}>
                            <Alarm size={24} weight="light" />
                            <h1>{remind?'Remind me':'Remind off'}</h1>
                        </button>
                        <button className={'flex w-full gap-4 p-4 ring-gray-500'}>
                            <CalendarBlank size={24} weight="light" />
                            <h1>Add a due date</h1>
                        </button>
                        <button className={'flex w-full gap-4 p-4 ring-gray-500'}>
                            <Repeat size={24} weight="light" />
                            <h1>repeat</h1>
                        </button>
                    </div>
                </div>
            ))}
            <div className={'w-full flex justify-end'}>
                <button title='button'>
                    <X size={24} weight="light" />
                </button>
            </div>
        </main>
    )
}
export default Suugestion
