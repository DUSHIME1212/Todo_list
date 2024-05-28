"use client";

import React, {useState} from 'react'
import Profilecard from "@/app/Components/Profilecard";
import Searchcard from "@/app/Components/Searchcard";
import Link from "next/link";

const Navabar = () => {
    const [shownav, setShownav] = useState(true)


    return (
        <header>{
            shownav &&
            <div className={'h-screen w-1/6 flex flex-col p-4 justify-center'} >
                <Profilecard/>
                <Searchcard/>
                <div>
                    <Link className={'flex p-2 border-b-2 flex-row justify-between'} href={''}>
                        <div>
                            <h1>My day</h1>
                        </div>
                        <span
                            className={'text-gray-500 size-4 flex items-center justify-center bg-gray-100 p-3 ring-1 rounded-2xl'}>0</span>
                    </Link>
                    <Link className={'flex p-2 border-b-2 flex-row justify-between'} href={''}>
                        <div>
                            <h1>Important</h1>
                        </div>
                        <span
                            className={'text-gray-500 size-4 flex items-center justify-center bg-gray-100 p-3 ring-1 rounded-2xl'}>0</span>
                    </Link>
                    <Link className={'flex p-2 border-b-2 flex-row justify-between'} href={''}>
                        <div>
                            <h1>Planned</h1>
                        </div>
                        <span
                            className={'text-gray-500 size-4 flex items-center justify-center bg-gray-100 p-3 ring-1 rounded-2xl'}>0</span>
                    </Link>
                    <Link className={'flex p-2 border-b-2 flex-row justify-between'} href={''}>
                        <div>
                            <h1>Assigned to me</h1>
                        </div>
                        <span
                            className={'text-gray-500 size-4 flex items-center justify-center bg-gray-100 p-3 ring-1 rounded-2xl'}>0</span>
                    </Link>
                    <Link className={'flex p-2 border-b-2 flex-row justify-between'} href={''}>
                        <div>
                            <h1>Tasks</h1>

                        </div>
                    </Link>
                </div>

            </div>}
        </header>
    )
}
export default Navabar
