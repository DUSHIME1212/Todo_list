"use client";

import React, {useState} from 'react'
import Profilecard from "@/app/Components/Profilecard";
import Searchcard from "@/app/Components/Searchcard";
import Link from "next/link";
import { Plus, FolderPlus, Cube } from "@phosphor-icons/react";

const Navbar = () => {
    const [shownav, setShownav] = useState(true)


    return (
        <header className={'w-full'}>{
            shownav &&
            <div className={'h-screen flex flex-col p-4 justify-between'} >
                <div>
                    <Profilecard/>
                    <Searchcard/>
                </div>
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
                <div>
                    <div className={'flex w-full'}>
                        <button className={'flex p-2 border-b-2 w-2/3 flex-row justify-center'} onClick={() => window.location.href='/'}>
                            <Plus size={24}/>
                            <span>New list</span>
                        </button>
                        <button title="Go to icon" className={'flex p-2 border-b-2 w-1/3 flex-row justify-center'} onClick={() => window.location.href='/'}>
                            <FolderPlus size={24} />
                        </button>
                    </div>
                </div>
            </div>}
        </header>
    )
}
export default Navbar
