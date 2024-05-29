"use client"
import React from 'react'

import {Star,Sun,Alarm,CalendarBlank,Repeat,X} from '@phosphor-icons/react'

const Suugestion = () => {
    const suugestion = [
        {
            title: 'Suggestion',
            addToDay: {
                booleon:true,
                color:'text-white'
            },
            RemindMe:{
                booleon:true,
                color:'text-white'
            },
            AddDueDate:{
                booleon:true,
                color:'text-white'
            },
            Repeat:{
                booleon:true,
                color:'text-white'
            },
        }
    ]
    return (
        <main className={'w-full flex flex-col justify-between relative p-4 md:w-1/4'}>
            {suugestion.map((item,index) => (
                <div key={index}>
                    <div className={'flex h-20 justify-between items-center'}>
                        <h1>{item.title}</h1>
                        <Star weight={"fill"} size={24} />
                    </div>
                    <button className={'flex w-full gap-4 p-4 ring-1 rounded-xl ring-gray-500'}>
                        <Sun size={24} weight="light" />
                        <h1>Add to my day</h1>
                    </button>
                    <div className={'p-2 rounded-2xl'}>
                        <button className={'flex w-full gap-4 p-4 ring-gray-500'}>
                            <Alarm size={24} weight="light" />
                            <h1>Remind me</h1>
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
                <button>
                    <X size={24} weight="light" />
                </button>
            </div>
        </main>
    )
}
export default Suugestion
